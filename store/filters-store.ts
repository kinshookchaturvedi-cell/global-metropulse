import { create } from 'zustand';

interface FiltersState {
  newsStatus: string[];
  newsRegion: string[];
  newsSearchTerm: string;
  jobsType: string[];
  jobsLocation: string[];
  jobsSearchTerm: string;
  setNewsFilters: (filters: Partial<FiltersState>) => void;
  setJobsFilters: (filters: Partial<FiltersState>) => void;
  clearAllFilters: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  newsStatus: [],
  newsRegion: [],
  newsSearchTerm: '',
  jobsType: ['full-time'],
  jobsLocation: [],
  jobsSearchTerm: '',
  setNewsFilters: (filters) => set((state) => ({ ...state, ...filters })),
  setJobsFilters: (filters) => set((state) => ({ ...state, ...filters })),
  clearAllFilters: () => set({
    newsStatus: [],
    newsRegion: [],
    newsSearchTerm: '',
    jobsType: ['full-time'],
    jobsLocation: [],
    jobsSearchTerm: '',
  }),
}));
