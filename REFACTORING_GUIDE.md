# Global MetroPulse Refactoring Guide

## Overview
This guide outlines a comprehensive refactoring of the Global MetroPulse application to implement modular architecture using React Query, Zustand, and domain-driven design patterns.

## Current Architecture Issues

1. **Monolithic components** - Main page component handles all features
2. **Scattered state management** - Multiple state solutions
3. **Tightly coupled data fetching** - No separation of concerns
4. **Missing error boundaries** - No graceful error handling
5. **Lack of widget customization** - Dashboard layout is fixed

## Proposed Architecture

### 1. Domain-Based Module Structure

```
features/
├── projects/
│   ├── hooks/
│   │   ├── useMetroProjects.ts       # React Query hook for projects
│   │   ├── useProjectFilters.ts      # Filter logic
│   │   └── useMetroStats.ts          # Statistics calculations
│   ├── components/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectFilters.tsx
│   │   └── index.ts                  # Barrel export
│   ├── types/
│   │   └── index.ts                  # Project-related types
│   └── index.ts
│
├── news/
│   ├── hooks/
│   │   ├── useMetroNews.ts
│   │   └── useNewsFilters.ts
│   ├── components/
│   │   ├── NewsCard.tsx
│   │   ├── NewsFeed.tsx
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   └── index.ts
│
├── jobs/
│   ├── hooks/
│   │   ├── useMetroJobs.ts
│   │   └── useJobFilters.ts
│   ├── components/
│   │   ├── JobCard.tsx
│   │   ├── JobList.tsx
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   └── index.ts
│
└── systems/
    ├── hooks/
    │   └── useMetroSystems.ts
    ├── components/
    │   ├── SystemCard.tsx
    │   ├── SystemGrid.tsx
    │   └── index.ts
    ├── types/
    │   └── index.ts
    └── index.ts
```

### 2. State Management (Zustand Stores)

#### Dashboard Layout Store

```typescript
// store/dashboard-layout-store.ts
import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface Widget {
  id: string;
  type: 'projects' | 'news' | 'jobs' | 'systems' | 'stats';
  visible: boolean;
  order: number;
}

interface DashboardLayoutState {
  widgets: Widget[];
  layout: 'grid' | 'list' | 'kanban';
  updateWidgetVisibility: (id: string, visible: boolean) => void;
  reorderWidgets: (widgets: Widget[]) => void;
  changeLayout: (layout: 'grid' | 'list' | 'kanban') => void;
}

export const useDashboardLayout = create<DashboardLayoutState>(
  subscribeWithSelector((set) => ({
    widgets: [
      { id: 'stats', type: 'stats', visible: true, order: 0 },
      { id: 'projects', type: 'projects', visible: true, order: 1 },
      { id: 'news', type: 'news', visible: true, order: 2 },
      { id: 'jobs', type: 'jobs', visible: true, order: 3 },
    ],
    layout: 'grid',
    updateWidgetVisibility: (id, visible) =>
      set((state) => ({
        widgets: state.widgets.map((w) =>
          w.id === id ? { ...w, visible } : w
        ),
      })),
    reorderWidgets: (widgets) => set({ widgets }),
    changeLayout: (layout) => set({ layout }),
  }))
);
```

#### Filter Store

```typescript
// store/filters-store.ts
import { create } from 'zustand';

interface FilterState {
  searchTerm: string;
  region: 'all' | 'india' | 'world';
  status: 'all' | 'completed' | 'ongoing' | 'planned' | 'delayed';
  setSearchTerm: (term: string) => void;
  setRegion: (region: 'all' | 'india' | 'world') => void;
  setStatus: (status: 'all' | 'completed' | 'ongoing' | 'planned' | 'delayed') => void;
  resetFilters: () => void;
}

export const useFilters = create<FilterState>((set) => ({
  searchTerm: '',
  region: 'all',
  status: 'all',
  setSearchTerm: (term) => set({ searchTerm: term }),
  setRegion: (region) => set({ region }),
  setStatus: (status) => set({ status }),
  resetFilters: () =>
    set({ searchTerm: '', region: 'all', status: 'all' }),
}));
```

### 3. React Query Hooks

#### useMetroProjects Hook

```typescript
// features/projects/hooks/useMetroProjects.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '@/lib/api/projects';

export function useMetroProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    refetchInterval: 5 * 60 * 1000, // Auto-refetch every 5 minutes
    retry: 2,
    onError: (error) => console.error('Failed to fetch projects:', error),
  });
}
```

#### useMetroNews Hook

```typescript
// features/news/hooks/useMetroNews.ts
import { useQuery } from '@tanstack/react-query';
import { fetchNews } from '@/lib/api/news';

export function useMetroNews() {
  return useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
    staleTime: 10 * 60 * 1000,
    refetchInterval: 15 * 60 * 1000,
    retry: 2,
  });
}
```

### 4. Widget Components

#### ProjectsWidget.tsx

```typescript
// components/widgets/ProjectsWidget.tsx
import { Suspense } from 'react';
import { useMetroProjects } from '@/features/projects/hooks';
import { ProjectGrid } from '@/features/projects/components';
import { useFilters } from '@/store/filters-store';

export function ProjectsWidget() {
  const { data, isLoading, error } = useMetroProjects();
  const filters = useFilters();

  if (error) {
    return (
      <div className="error-widget">
        <p>Failed to load projects</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="skeleton">Loading projects...</div>}>
      <ProjectGrid projects={data || []} filters={filters} isLoading={isLoading} />
    </Suspense>
  );
}
```

### 5. Error Boundaries

```typescript
// components/ErrorBoundary.tsx
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Widget error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="error-boundary">
            <p>Something went wrong loading this widget</p>
            <details>{this.state.error?.message}</details>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
```

## Implementation Steps

### Phase 1: Setup Infrastructure (1-2 days)
1. Install React Query and Zustand
2. Create store structure
3. Setup query client configuration
4. Create error boundaries

### Phase 2: Extract Domain Modules (3-5 days)
1. Create `features/projects` module
2. Create `features/news` module
3. Create `features/jobs` module
4. Create `features/systems` module
5. Create barrel exports for each

### Phase 3: Implement Hooks (2-3 days)
1. Implement React Query hooks
2. Implement filter logic hooks
3. Implement statistics calculation hooks
4. Add error handling and loading states

### Phase 4: Refactor Components (3-4 days)
1. Create widget components
2. Update dashboard to use widgets
3. Implement drag-and-drop reordering
4. Add widget visibility toggles

### Phase 5: Testing & Polish (2-3 days)
1. Add unit tests for hooks
2. Add component tests
3. Test auto-update functionality
4. Performance optimization

## Benefits of This Refactoring

✅ **Modularity** - Each domain is self-contained
✅ **Reusability** - Hooks can be used across components
✅ **Testability** - Independent modules are easier to test
✅ **Scalability** - Easy to add new features
✅ **Performance** - React Query handles caching and optimization
✅ **Type Safety** - Better TypeScript support
✅ **Developer Experience** - Clearer code organization
✅ **Maintainability** - Easier to debug and modify

## Next Steps

1. Review this guide with your team
2. Create feature branches for each domain module
3. Start with Phase 1 setup
4. Follow the implementation steps sequentially
5. Test thoroughly before merging

## Resources

- [React Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://zustand-demo.vercel.app/)
- [Next.js Best Practices](https://nextjs.org/docs)
- [TypeScript React Handbook](https://react-typescript-cheatsheet.netlify.app/)
