import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/lib/api/client';
import { MetroProject } from '@/lib/types';

// Fallback hardcoded data for demo
const DEFAULT_PROJECTS: MetroProject[] = [
  {
    id: '1',
    name: 'Delhi Metro',
    location: 'India',
    country: 'India',
    length: '394 km',
    stations: 289,
    color: 'blue',
    status: 'operational',
    operationalDate: '2002',
    ridersDaily: '2.7M',
  },
  {
    id: '2',
    name: 'Riyadh Metro',
    location: 'Saudi Arabia',
    country: 'Saudi Arabia',
    length: '176 km',
    stations: 85,
    color: 'yellow',
    status: 'operational',
    operationalDate: '2024',
    ridersDaily: '500K',
  },
  {
    id: '3',
    name: 'Shanghai Metro',
    location: 'China',
    country: 'China',
    length: '830 km',
    stations: 508,
    color: 'red',
    status: 'operational',
    operationalDate: '1993',
    ridersDaily: '10.3M',
  },
];

export const useMetroStats = (city?: string) => {
  return useQuery({
    queryKey: ['metroStats', city],
    queryFn: async () => {
      try {
        return await apiClient.get<MetroProject[]>(`/projects${city ? `?city=${city}` : ''}`);
      } catch (error) {
        // Fallback to demo data
        return DEFAULT_PROJECTS;
      }
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useAllProjects = () => {
  return useQuery({
    queryKey: ['allProjects'],
    queryFn: async () => {
      try {
        return await apiClient.get<MetroProject[]>('/projects');
      } catch (error) {
        return DEFAULT_PROJECTS;
      }
    },
  });
};
