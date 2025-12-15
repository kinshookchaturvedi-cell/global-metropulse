import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DashboardWidget {
  id: string;
  type: 'metroStats' | 'newsFeed' | 'jobsTable' | 'systemsProfile' | 'statsPanel';
  title: string;
  visible: boolean;
  position?: number;
  props?: Record<string, unknown>;
}

interface DashboardLayoutState {
  widgets: DashboardWidget[];
  updateWidget: (id: string, updates: Partial<DashboardWidget>) => void;
  toggleWidget: (id: string) => void;
  reorderWidgets: (widgets: DashboardWidget[]) => void;
  resetToDefault: () => void;
}

const DEFAULT_WIDGETS: DashboardWidget[] = [
  { id: 'stats', type: 'statsPanel', title: 'Stats Overview', visible: true, position: 1 },
  { id: 'metroStats', type: 'metroStats', title: 'Major Metro Corridors', visible: true, position: 2 },
  { id: 'newsFeed', type: 'newsFeed', title: 'Latest News', visible: true, position: 3 },
  { id: 'jobsTable', type: 'jobsTable', title: 'Job Opportunities', visible: true, position: 4 },
];

export const useDashboardLayoutStore = create<DashboardLayoutState>()(
  persist(
    (set) => ({
      widgets: DEFAULT_WIDGETS,
      updateWidget: (id, updates) => set((state) => ({
        widgets: state.widgets.map((w) => (w.id === id ? { ...w, ...updates } : w)),
      })),
      toggleWidget: (id) => set((state) => ({
        widgets: state.widgets.map((w) => (w.id === id ? { ...w, visible: !w.visible } : w)),
      })),
      reorderWidgets: (widgets) => set({ widgets }),
      resetToDefault: () => set({ widgets: DEFAULT_WIDGETS }),
    }),
    { name: 'dashboard-layout-store' }
  )
);
