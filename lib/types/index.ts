// Metro Project Types
export interface MetroProject {
  id: string;
  name: string;
  location: string;
  country: string;
  length: string;
  stations: number;
  color: 'blue' | 'yellow' | 'red';
  status: 'operational' | 'under-construction' | 'planned';
  operationalDate: string;
  ridersDaily?: string;
}

// News Article Types
export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  source: string;
  publishedAt: string;
  metro?: string;
  category: 'news' | 'incident' | 'expansion' | 'technology';
}

// Job Posting Types
export interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  jobType: 'full-time' | 'contract' | 'internship';
  postedAt: string;
  applicants?: number;
}

// Metro System Types
export interface MetroSystem {
  id: string;
  name: string;
  city: string;
  country: string;
  description: string;
  operationalStatus: string;
  capacity: string;
  technology: string;
}

// Stats Types
export interface MetroStats {
  metroId: string;
  dailyRiders: number;
  networkLength: string;
  totalStations: number;
  avgWaitTime: string;
  onTimePercentage: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
