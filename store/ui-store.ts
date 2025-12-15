import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UiState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  compactMode: boolean;
  setCompactMode: (compact: boolean) => void;
}

export const useUiStore = create<UiState>()(
  persist(
    (set) => ({
      isDarkMode: true,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      selectedCity: 'Delhi',
      setSelectedCity: (city) => set({ selectedCity: city }),
      sidebarOpen: true,
      toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
      compactMode: false,
      setCompactMode: (compact) => set({ compactMode: compact }),
    }),
    {
      name: 'ui-store',
      partialize: (state) => ({
        selectedCity: state.selectedCity,
        compactMode: state.compactMode,
      }),
    }
  )
);
