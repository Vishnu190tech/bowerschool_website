'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  UserGroupIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

interface PastEvent {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category: string;
  galleryImages?: any;
  speakers?: any;
  testimonials?: any;
  stats?: any;
  size: string;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export default function PastEventsManagement() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const queryClient = useQueryClient();

  // Fetch past events
  const { data: events = [], isLoading } = useQuery({
    queryKey: ['admin-past-events'],
    queryFn: async () => {
      const response = await fetch('/api/events/past');
      if (!response.ok) throw new Error('Failed to fetch past events');
      const data = await response.json();
      return data.events;
    },
  });

  // Create past event mutation
  const createMutation = useMutation({
    mutationFn: async (formData: any) => {
      const response = await fetch('/api/events/past', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to create past event');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-past-events'] });
      toast.success('Past event created successfully');
      setIsCreateModalOpen(false);
    },
    onError: () => {
      toast.error('Failed to create past event');
    },
  });

  // Update past event mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, ...data }: any) => {
      const response = await fetch(`/api/events/past/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update past event');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-past-events'] });
      toast.success('Past event updated successfully');
      setIsEditModalOpen(false);
    },
    onError: () => {
      toast.error('Failed to update past event');
    },
  });

  // Delete past event mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/events/past/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete past event');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-past-events'] });
      toast.success('Past event deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete past event');
    },
  });

  const filteredEvents = events.filter((event: PastEvent) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const EventForm = ({ event, onSubmit, onCancel }: any) => {
    const [formData, setFormData] = useState({
      title: event?.title || 'Innovation Summit 2025',
      subtitle: event?.subtitle || 'Shaping the Future of Technology',
      description: event?.description || 'Join us for an inspiring summit bringing together innovators, entrepreneurs, and thought leaders to explore the future of technology and startup ecosystem.',
      eventType: event?.eventType || 'Event Type',
      date: event?.date || '2025-03-15',
      time: event?.time || '10:00 AM',
      location: event?.location || 'San Francisco, CA',
      venue: event?.venue || 'Innovation Hub',
      category: event?.category || 'Meetups',
      tags: event?.tags || ['innovation', 'technology', 'startups'],
      size: event?.size || 'medium',
      isPublished: event?.isPublished ?? true,
      isFeatured: event?.isFeatured ?? false,
      imageUrl: event?.imageUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      thumbnailUrl: event?.thumbnailUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
      videoUrl: event?.videoUrl || '',
      galleryImages: event?.galleryImages || [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
      ],
      speakers: event?.speakers || [
        {
          name: 'Dr. Sarah Johnson',
          title: 'CEO & Founder, TechVentures',
          imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
        },
        {
          name: 'Michael Chen',
          title: 'CTO, Innovation Labs',
          imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
        }
      ],
      testimonials: event?.testimonials || [
        {
          quote: 'An incredible experience that empowered our startup to reach new heights.',
          author: 'Kairos Ventures'
        }
      ],
      stats: event?.stats || {
        attendees: '300+',
        speakers: '42',
        satisfaction: '95%',
        sessions: '100+'
      }
    });

    const [activeTab, setActiveTab] = useState('basic');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData);
    };

    const addGalleryImage = () => {
      const url = prompt('Enter image URL:');
      if (url) {
        setFormData({
          ...formData,
          galleryImages: [...(formData.galleryImages || []), url]
        });
      }
    };

    const removeGalleryImage = (index: number) => {
      setFormData({
        ...formData,
        galleryImages: formData.galleryImages.filter((_: any, i: number) => i !== index)
      });
    };

    const addSpeaker = () => {
      const newSpeaker = {
        name: 'New Speaker',
        title: 'Title',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      };
      setFormData({
        ...formData,
        speakers: [...(formData.speakers || []), newSpeaker]
      });
    };

    const updateSpeaker = (index: number, field: string, value: string) => {
      const updatedSpeakers = [...formData.speakers];
      updatedSpeakers[index] = { ...updatedSpeakers[index], [field]: value };
      setFormData({ ...formData, speakers: updatedSpeakers });
    };

    const removeSpeaker = (index: number) => {
      setFormData({
        ...formData,
        speakers: formData.speakers.filter((_: any, i: number) => i !== index)
      });
    };

    const addTestimonial = () => {
      const newTestimonial = {
        quote: 'Enter testimonial quote',
        author: 'Author Name'
      };
      setFormData({
        ...formData,
        testimonials: [...(formData.testimonials || []), newTestimonial]
      });
    };

    const updateTestimonial = (index: number, field: string, value: string) => {
      const updatedTestimonials = [...formData.testimonials];
      updatedTestimonials[index] = { ...updatedTestimonials[index], [field]: value };
      setFormData({ ...formData, testimonials: updatedTestimonials });
    };

    const removeTestimonial = (index: number) => {
      setFormData({
        ...formData,
        testimonials: formData.testimonials.filter((_: any, i: number) => i !== index)
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['basic', 'gallery', 'speakers', 'testimonials', 'stats'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${activeTab === tab
                  ? 'border-[#4242ff] text-[#4242ff]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {tab === 'basic' ? 'Basic Info' : tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Basic Info Tab */}
        {activeTab === 'basic' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                placeholder="Enter event description..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type *</label>
                <input
                  type="text"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                  placeholder="e.g., Conference, Workshop"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                >
                  <option value="Meetups">Meetups</option>
                  <option value="Webinars">Webinars</option>
                  <option value="Workshops">Workshops</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="text"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                  placeholder="e.g., 10:00 AM"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                  placeholder="e.g., San Francisco, CA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Venue</label>
                <input
                  type="text"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                  placeholder="e.g., Innovation Hub"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                <select
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
                <input
                  type="text"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                  placeholder="YouTube or Vimeo URL"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Main Image URL *</label>
              <input
                type="text"
                required
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL</label>
              <input
                type="text"
                value={formData.thumbnailUrl}
                onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                placeholder="https://example.com/thumbnail.jpg"
              />
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Gallery Images</h3>
              <button
                type="button"
                onClick={addGalleryImage}
                className="px-3 py-1 bg-[#4242ff] text-white text-sm rounded-lg hover:bg-[#3232e6]"
              >
                Add Image
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {formData.galleryImages?.map((url: string, index: number) => (
                <div key={index} className="relative group">
                  <img
                    src={url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Speakers Tab */}
        {activeTab === 'speakers' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Speakers</h3>
              <button
                type="button"
                onClick={addSpeaker}
                className="px-3 py-1 bg-[#4242ff] text-white text-sm rounded-lg hover:bg-[#3232e6]"
              >
                Add Speaker
              </button>
            </div>
            {formData.speakers?.map((speaker: any, index: number) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-900">Speaker {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeSpeaker(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={speaker.name}
                    onChange={(e) => updateSpeaker(index, 'name', e.target.value)}
                    className="px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Title/Role"
                    value={speaker.title}
                    onChange={(e) => updateSpeaker(index, 'title', e.target.value)}
                    className="px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Image URL"
                  value={speaker.imageUrl}
                  onChange={(e) => updateSpeaker(index, 'imageUrl', e.target.value)}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Testimonials</h3>
              <button
                type="button"
                onClick={addTestimonial}
                className="px-3 py-1 bg-[#4242ff] text-white text-sm rounded-lg hover:bg-[#3232e6]"
              >
                Add Testimonial
              </button>
            </div>
            {formData.testimonials?.map((testimonial: any, index: number) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-900">Testimonial {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeTestimonial(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
                <textarea
                  placeholder="Quote"
                  value={testimonial.quote}
                  onChange={(e) => updateTestimonial(index, 'quote', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
                <input
                  type="text"
                  placeholder="Author"
                  value={testimonial.author}
                  onChange={(e) => updateTestimonial(index, 'author', e.target.value)}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
            ))}
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Event Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attendees</label>
                <input
                  type="text"
                  value={formData.stats?.attendees || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, attendees: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Speakers</label>
                <input
                  type="text"
                  value={formData.stats?.speakers || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, speakers: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Satisfaction</label>
                <input
                  type="text"
                  value={formData.stats?.satisfaction || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, satisfaction: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sessions</label>
                <input
                  type="text"
                  value={formData.stats?.sessions || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, sessions: e.target.value }
                  })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#4242ff] text-white rounded-lg hover:bg-[#3232e6]"
          >
            {event ? 'Update' : 'Create'} Past Event
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-900">Past Events Management</h2>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-4 py-2 bg-[#4242ff] text-white rounded-lg hover:bg-[#3232e6] transition-colors flex items-center gap-2"
          >
            <PlusIcon className="w-5 h-5" />
            Add Past Event
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search past events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff]"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff]"
          >
            <option value="all">All Categories</option>
            <option value="Meetups">Meetups</option>
            <option value="Webinars">Webinars</option>
            <option value="Workshops">Workshops</option>
          </select>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {isLoading ? (
          <div className="p-6 text-center">
            <div className="animate-pulse">Loading past events...</div>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No past events found. Create your first past event!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEvents.map((event: PastEvent) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{event.title}</div>
                        <div className="text-sm text-gray-500">{event.subtitle}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {event.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {event.viewCount || 0} views
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => window.open(`/events/past/${event.slug}`, '_blank')}
                        className="text-gray-600 hover:text-gray-900 mr-3"
                      >
                        <EyeIcon className="w-5 h-5 inline" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedEvent(event);
                          setIsEditModalOpen(true);
                        }}
                        className="text-[#4242ff] hover:text-[#3232e6] mr-3"
                      >
                        <PencilIcon className="w-5 h-5 inline" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this past event?')) {
                            deleteMutation.mutate(event.id);
                          }
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="w-5 h-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Create Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 bg-opacity-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Past Event</h2>
            <EventForm
              onSubmit={(data: any) => createMutation.mutate(data)}
              onCancel={() => setIsCreateModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 bg-opacity-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Past Event</h2>
            <EventForm
              event={selectedEvent}
              onSubmit={(data: any) => updateMutation.mutate({ id: selectedEvent.id, ...data })}
              onCancel={() => setIsEditModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}