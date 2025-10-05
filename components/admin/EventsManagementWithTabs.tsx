'use client';

import { useState } from 'react';
import { CalendarIcon, ClockIcon, FolderIcon } from '@heroicons/react/24/outline';
import EventsManagementEnhanced from './EventsManagementEnhanced';
import PastEventsManagement from './PastEventsManagement';

export default function EventsManagementWithTabs() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors
                ${activeTab === 'upcoming'
                  ? 'border-[#4242ff] text-[#4242ff]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <CalendarIcon className="w-5 h-5" />
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors
                ${activeTab === 'past'
                  ? 'border-[#4242ff] text-[#4242ff]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <ClockIcon className="w-5 h-5" />
              Past Events
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'upcoming' && <EventsManagementEnhanced />}
        {activeTab === 'past' && <PastEventsManagement />}
      </div>
    </div>
  );
}