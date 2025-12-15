'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query/client';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Global MetroPulse',
  description: 'Real-time dashboard tracking global metro rail projects and news with auto-updating data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
