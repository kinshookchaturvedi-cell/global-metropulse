import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days (1 month)
      gcTime: 1000 * 60 * 60 * 24 * 31,    // 31 days
      retry: 2,
      refetchInterval: 1000 * 60 * 60 * 24 * 30, // 30 days (monthly updates)
    },
    mutations: {
      retry: 1,
    },
  },
});
