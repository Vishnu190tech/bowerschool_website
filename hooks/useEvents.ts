import { useQuery } from '@tanstack/react-query';

export interface Event {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  eventType: string;
  date: string;
  time?: string;
  location?: string;
  venue?: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  thumbnailUrl?: string;
  height: string;
  isPublished: boolean;
  isFeatured: boolean;
  capacity?: number;
  registeredCount: number;
  price?: number;
  registrationLink?: string;
  agenda?: any;
  speakers?: any;
  sponsors?: any;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PastEvent {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  eventType: string;
  date: string;
  time?: string;
  location?: string;
  venue?: string;
  category: string;
  tags: string[];
  imageUrl?: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  galleryImages?: any;
  speakers?: any;
  agenda?: any;
  testimonials?: any;
  stats?: any;
  resources?: any;
  viewCount: number;
  attendeeCount?: number;
  duration?: string;
  isPublished: boolean;
  isFeatured: boolean;
  size: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: string;
  updatedAt: string;
}

export function useEvents(category?: string, featured?: boolean, limit?: number) {
  return useQuery({
    queryKey: ['events', { category, featured, limit }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (category) params.append('category', category);
      if (featured) params.append('featured', 'true');
      if (limit) params.append('limit', limit.toString());

      const response = await fetch(`/api/events?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch events');
      }

      return data.events as Event[];
    },
  });
}

export function useUpcomingEvents() {
  return useQuery({
    queryKey: ['upcoming-events'],
    queryFn: async () => {
      const response = await fetch('/api/events/upcoming');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch upcoming events');
      }

      return data.events as Event[];
    },
  });
}

export function useEvent(slug: string) {
  return useQuery({
    queryKey: ['event', slug],
    queryFn: async () => {
      const response = await fetch(`/api/events/${slug}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch event');
      }

      return data.event as Event;
    },
    enabled: !!slug,
  });
}

// Hooks for Past Events
export function usePastEvents(filters?: {
  category?: string;
  search?: string;
  limit?: number;
  page?: number;
}) {
  return useQuery({
    queryKey: ['past-events', filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters?.category) params.append('category', filters.category);
      if (filters?.search) params.append('search', filters.search);
      if (filters?.limit) params.append('limit', filters.limit.toString());
      if (filters?.page) params.append('page', filters.page.toString());

      const response = await fetch(`/api/events/past?${params}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch past events');
      }

      return data.events as PastEvent[];
    },
  });
}

export function usePastEvent(slug: string) {
  return useQuery<PastEvent>({
    queryKey: ['past-event', slug],
    queryFn: async () => {
      const response = await fetch(`/api/events/past/${slug}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch past event');
      }

      return data.event as PastEvent;
    },
    enabled: !!slug,
  });
}