'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  XMarkIcon,
  CalendarIcon,
  TagIcon,
  UsersIcon,
  UserCircleIcon,
  ClockIcon,
  MapPinIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

interface Event {
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
  isPublished: boolean;
  isFeatured: boolean;
  capacity?: number;
  registeredCount: number;
  price?: number;
  registrationLink?: string;
  agenda?: any;
  speakers?: any;
  createdAt: string;
  updatedAt: string;
}

interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  videoUrl?: string;
}

interface AgendaItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speakerId?: string;
}

export default function EventsManagementEnhanced() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const queryClient = useQueryClient();

  // Fetch events
  const { data: events = [], isLoading } = useQuery({
    queryKey: ['admin-events'],
    queryFn: async () => {
      const response = await fetch('/api/admin/events');
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      return data.events;
    },
  });

  // Create event mutation
  const createMutation = useMutation({
    mutationFn: async (formData: any) => {
      const response = await fetch('/api/admin/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map((t: string) => t.trim()).filter(Boolean),
          capacity: formData.capacity ? parseInt(formData.capacity) : undefined,
          price: formData.price ? parseFloat(formData.price) : undefined,
        }),
      });
      if (!response.ok) throw new Error('Failed to create event');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-events'] });
      toast.success('Event created successfully');
      setIsCreateModalOpen(false);
    },
    onError: () => {
      toast.error('Failed to create event');
    },
  });

  // Update event mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, ...formData }: any) => {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map((t: string) => t.trim()).filter(Boolean),
          capacity: formData.capacity ? parseInt(formData.capacity) : undefined,
          price: formData.price ? parseFloat(formData.price) : undefined,
        }),
      });
      if (!response.ok) throw new Error('Failed to update event');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-events'] });
      toast.success('Event updated successfully');
      setIsEditModalOpen(false);
      setSelectedEvent(null);
    },
    onError: () => {
      toast.error('Failed to update event');
    },
  });

  // Delete event mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete event');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-events'] });
      toast.success('Event deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete event');
    },
  });

  // Toggle publish status
  const togglePublishMutation = useMutation({
    mutationFn: async ({ id, isPublished }: { id: string; isPublished: boolean }) => {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished }),
      });
      if (!response.ok) throw new Error('Failed to update event');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-events'] });
      toast.success('Event status updated');
    },
    onError: () => {
      toast.error('Failed to update event status');
    },
  });

  // Filter events
  const filteredEvents = events.filter((event: Event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const EventForm = ({ event, onSubmit }: { event?: Event | null; onSubmit: (data: any) => void }) => {
    const [activeTab, setActiveTab] = useState('basic');

    // Generate future date (30 days from now) for new events
    const getFutureDate = () => {
      const date = new Date();
      date.setDate(date.getDate() + 30);
      return date.toISOString().split('T')[0];
    };

    // Default prefill data for new events
    const defaultEventData = {
      title: 'Innovation Summit 2025',
      subtitle: 'Shaping the Future of Technology',
      description: 'Join us for an inspiring day of innovation, networking, and learning from industry leaders. This event brings together entrepreneurs, developers, designers, and business professionals to explore the latest trends and technologies shaping our future.',
      eventType: 'Conference',
      date: getFutureDate(),
      time: '10:00 AM',
      location: 'Hyderabad',
      venue: 'Bower School Innovation Hub',
      category: 'Meetups',
      tags: 'innovation, technology, networking, entrepreneurship',
      imageUrl: '/events/innovation-summit.jpg',
      thumbnailUrl: '/events/innovation-summit-thumb.jpg',
      isPublished: false,
      isFeatured: false,
      capacity: '100',
      price: '0',
      registrationLink: 'https://forms.google.com/event-registration',
      speakers: [
        {
          id: '1',
          name: 'Dr. Sarah Johnson',
          title: 'CEO & Founder, TechVentures',
          bio: 'Leading expert in AI and machine learning with 15+ years of experience in building successful tech startups.',
          imageUrl: '/speakers/sarah-johnson.jpg',
          videoUrl: 'https://www.youtube.com/watch?v=example'
        }
      ],
      agenda: {
        '0': [
          {
            id: '1',
            time: '09:30 AM',
            title: 'Registration & Welcome Coffee',
            description: 'Check-in and networking opportunity',
            speakerId: ''
          },
          {
            id: '2',
            time: '10:00 AM',
            title: 'Opening Keynote',
            description: 'The Future of Innovation in Technology',
            speakerId: '1'
          },
          {
            id: '3',
            time: '11:00 AM',
            title: 'Panel Discussion',
            description: 'Building Successful Tech Startups',
            speakerId: ''
          },
          {
            id: '4',
            time: '12:30 PM',
            title: 'Networking Lunch',
            description: 'Connect with fellow innovators',
            speakerId: ''
          }
        ]
      }
    };

    // Check if we're creating a new event (no event prop means create mode)
    const isCreateMode = !event;

    const [formData, setFormData] = useState({
      title: event?.title || (isCreateMode ? defaultEventData.title : ''),
      subtitle: event?.subtitle || (isCreateMode ? defaultEventData.subtitle : ''),
      description: event?.description || (isCreateMode ? defaultEventData.description : ''),
      eventType: event?.eventType || (isCreateMode ? defaultEventData.eventType : 'Conference'),
      date: event?.date ? new Date(event.date).toISOString().split('T')[0] : (isCreateMode ? defaultEventData.date : ''),
      time: event?.time || (isCreateMode ? defaultEventData.time : ''),
      location: event?.location || (isCreateMode ? defaultEventData.location : ''),
      venue: event?.venue || (isCreateMode ? defaultEventData.venue : ''),
      category: event?.category || (isCreateMode ? defaultEventData.category : 'Meetups'),
      tags: event?.tags?.join(', ') || (isCreateMode ? defaultEventData.tags : ''),
      imageUrl: event?.imageUrl || (isCreateMode ? defaultEventData.imageUrl : ''),
      thumbnailUrl: event?.thumbnailUrl || (isCreateMode ? defaultEventData.thumbnailUrl : ''),
      isPublished: event?.isPublished ?? (isCreateMode ? defaultEventData.isPublished : false),
      isFeatured: event?.isFeatured ?? (isCreateMode ? defaultEventData.isFeatured : false),
      capacity: event?.capacity?.toString() || (isCreateMode ? defaultEventData.capacity : ''),
      price: event?.price?.toString() || (isCreateMode ? defaultEventData.price : ''),
      registrationLink: event?.registrationLink || (isCreateMode ? defaultEventData.registrationLink : ''),
      speakers: event?.speakers ? (typeof event.speakers === 'string' ? JSON.parse(event.speakers) : event.speakers) : (isCreateMode ? defaultEventData.speakers : []),
      agenda: event?.agenda ? (typeof event.agenda === 'string' ? JSON.parse(event.agenda) : event.agenda) : (isCreateMode ? defaultEventData.agenda : { '0': [] }),
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({
        ...formData,
        speakers: JSON.stringify(formData.speakers),
        agenda: JSON.stringify(formData.agenda)
      });
    };

    const addSpeaker = () => {
      const newSpeaker: Speaker = {
        id: Date.now().toString(),
        name: '',
        title: '',
        bio: '',
        imageUrl: '',
        videoUrl: ''
      };
      setFormData({
        ...formData,
        speakers: [...formData.speakers, newSpeaker]
      });
    };

    const updateSpeaker = (id: string, field: keyof Speaker, value: string) => {
      setFormData({
        ...formData,
        speakers: formData.speakers.map((s: Speaker) =>
          s.id === id ? { ...s, [field]: value } : s
        )
      });
    };

    const removeSpeaker = (id: string) => {
      setFormData({
        ...formData,
        speakers: formData.speakers.filter((s: Speaker) => s.id !== id)
      });
    };

    const addAgendaItem = (day: string) => {
      const newItem: AgendaItem = {
        id: Date.now().toString(),
        time: '',
        title: '',
        description: '',
        speakerId: ''
      };
      setFormData({
        ...formData,
        agenda: {
          ...formData.agenda,
          [day]: [...(formData.agenda[day] || []), newItem]
        }
      });
    };

    const updateAgendaItem = (day: string, itemId: string, field: keyof AgendaItem, value: string) => {
      setFormData({
        ...formData,
        agenda: {
          ...formData.agenda,
          [day]: formData.agenda[day].map((item: AgendaItem) =>
            item.id === itemId ? { ...item, [field]: value } : item
          )
        }
      });
    };

    const removeAgendaItem = (day: string, itemId: string) => {
      setFormData({
        ...formData,
        agenda: {
          ...formData.agenda,
          [day]: formData.agenda[day].filter((item: AgendaItem) => item.id !== itemId)
        }
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {['basic', 'speakers', 'schedule', 'settings'].map((tab) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type *</label>
                <input
                  type="text"
                  required
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="text"
                  placeholder="e.g., 10:00 AM"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Venue</label>
                <input
                  type="text"
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
              <input
                type="text"
                placeholder="e.g., design, workshop, beginner"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff]"
              />
            </div>
          </div>
        )}

        {/* Speakers Tab */}
        {activeTab === 'speakers' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Event Speakers</h3>
              <button
                type="button"
                onClick={addSpeaker}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#4242ff] text-white text-sm rounded-lg hover:bg-[#3232e6]"
              >
                <PlusIcon className="w-4 h-4" />
                Add Speaker
              </button>
            </div>

            {formData.speakers.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <UserCircleIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">No speakers added yet</p>
                <button
                  type="button"
                  onClick={addSpeaker}
                  className="mt-3 text-sm text-[#4242ff] hover:text-[#3232e6]"
                >
                  Add your first speaker
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {formData.speakers.map((speaker: Speaker, index: number) => (
                  <div key={speaker.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-sm font-medium text-gray-900">Speaker {index + 1}</h4>
                      <button
                        type="button"
                        onClick={() => removeSpeaker(speaker.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          value={speaker.name}
                          onChange={(e) => updateSpeaker(speaker.id, 'name', e.target.value)}
                          className="w-full px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
                        <input
                          type="text"
                          value={speaker.title}
                          onChange={(e) => updateSpeaker(speaker.id, 'title', e.target.value)}
                          className="w-full px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-gray-700 mb-1">Bio</label>
                        <textarea
                          rows={2}
                          value={speaker.bio}
                          onChange={(e) => updateSpeaker(speaker.id, 'bio', e.target.value)}
                          className="w-full px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                          // type="url"
                          value={speaker.imageUrl}
                          onChange={(e) => updateSpeaker(speaker.id, 'imageUrl', e.target.value)}
                          className="w-full px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Video URL</label>
                        <input
                          type="url"
                          value={speaker.videoUrl}
                          onChange={(e) => updateSpeaker(speaker.id, 'videoUrl', e.target.value)}
                          className="w-full px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Event Schedule</h3>
            </div>

            {['0', '1', '2'].map((day) => (
              <div key={day} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Day {parseInt(day) + 1}
                  </h4>
                  <button
                    type="button"
                    onClick={() => addAgendaItem(day)}
                    className="text-sm text-[#4242ff] hover:text-[#3232e6]"
                  >
                    <PlusIcon className="w-4 h-4 inline mr-1" />
                    Add Item
                  </button>
                </div>

                {(!formData.agenda[day] || formData.agenda[day].length === 0) ? (
                  <div className="text-center py-4 bg-gray-50 rounded">
                    <ClockIcon className="mx-auto h-8 w-8 text-gray-400" />
                    <p className="mt-1 text-xs text-gray-500">No schedule items for this day</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {formData.agenda[day].map((item: AgendaItem, index: number) => (
                      <div key={item.id} className="flex gap-3 items-start">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2">
                          <input
                            type="text"
                            placeholder="10:00 AM"
                            value={item.time}
                            onChange={(e) => updateAgendaItem(day, item.id, 'time', e.target.value)}
                            className="px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                          />
                          <input
                            type="text"
                            placeholder="Session Title"
                            value={item.title}
                            onChange={(e) => updateAgendaItem(day, item.id, 'title', e.target.value)}
                            className="px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                          />
                          <input
                            type="text"
                            placeholder="Brief description of this session"
                            value={item.description}
                            onChange={(e) => updateAgendaItem(day, item.id, 'description', e.target.value)}
                            className="md:col-span-2 px-2 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeAgendaItem(day, item.id)}
                          className="text-red-500 hover:text-red-600 p-1"
                        >
                          <XMarkIcon className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL</label>
                <input
                  type="url"
                  value={formData.thumbnailUrl}
                  onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Link</label>
                <input
                  type="url"
                  value={formData.registrationLink}
                  onChange={(e) => setFormData({ ...formData, registrationLink: e.target.value })}
                  className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
                  <input
                    type="number"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="rounded text-[#4242ff] focus:ring-[#4242ff]"
                />
                <span className="text-sm text-gray-700">Published</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="rounded text-[#4242ff] focus:ring-[#4242ff]"
                />
                <span className="text-sm text-gray-700">Featured</span>
              </label>
            </div>
          </div>
        )}

        {/* Form Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={() => {
              if (event) {
                setIsEditModalOpen(false);
                setSelectedEvent(null);
              } else {
                setIsCreateModalOpen(false);
              }
            }}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#4242ff] text-white rounded-lg hover:bg-[#3232e6]"
          >
            {event ? 'Update' : 'Create'} Event
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Event Management</h2>
              <p className="mt-1 text-sm text-gray-500">Manage all your events and activities</p>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[#4242ff] text-white rounded-lg hover:bg-[#3232e6] transition-colors"
            >
              <PlusIcon className="w-5 h-5" />
              Create Event
            </button>
          </div>

          {/* Filters */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 text-gray-900 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
                />
              </div>
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4242ff] bg-white"
            >
              <option value="all">All Categories</option>
              <option value="Meetups">Meetups</option>
              <option value="Webinars">Webinars</option>
              <option value="Workshops">Workshops</option>
            </select>
          </div>
        </div>

        {/* Events Table */}
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-pulse">Loading events...</div>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">No events found</p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
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
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registrations
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEvents.map((event: Event) => (
                  <tr key={event.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {event.thumbnailUrl && (
                          <img
                            src={event.thumbnailUrl}
                            alt={event.title}
                            className="w-10 h-10 rounded-lg object-cover mr-3"
                          />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">{event.title}</div>
                          <div className="text-sm text-gray-500">{event.eventType}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        {event.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()}
                      {event.time && ` • ${event.time}`}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => togglePublishMutation.mutate({
                            id: event.id,
                            isPublished: !event.isPublished
                          })}
                          className={`px-2 py-1 text-xs font-medium rounded-full ${event.isPublished
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                            }`}
                        >
                          {event.isPublished ? 'Published' : 'Draft'}
                        </button>
                        {event.isFeatured && (
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {event.registeredCount}
                      {event.capacity && ` / ${event.capacity}`}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          href={`/events/upcoming/${event.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <EyeIcon className="w-5 h-5" />
                        </a>
                        <button
                          onClick={() => {
                            setSelectedEvent(event);
                            setIsEditModalOpen(true);
                          }}
                          className="text-[#4242ff] hover:text-[#3232e6]"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm('Are you sure you want to delete this event?')) {
                              deleteMutation.mutate(event.id);
                            }
                          }}
                          className="text-red-500 hover:text-red-600"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Create Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Create New Event</h3>
                <button
                  onClick={() => setIsCreateModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto flex-grow">
              <EventForm
                onSubmit={(data) => createMutation.mutate(data)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Edit Event</h3>
                <button
                  onClick={() => {
                    setIsEditModalOpen(false);
                    setSelectedEvent(null);
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto flex-grow">
              <EventForm
                event={selectedEvent}
                onSubmit={(data) => updateMutation.mutate({ ...data, id: selectedEvent.id })}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}