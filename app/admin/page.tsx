'use client';

import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function AdminOverview() {
  const stats = [
    { label: 'Total Students', value: '1,234', change: '+12%', color: 'bg-blue-500' },
    { label: 'Active Programs', value: '8', change: '+2', color: 'bg-green-500' },
    { label: 'Upcoming Events', value: '5', change: 'This Week', color: 'bg-purple-500' },
    { label: 'Total Revenue', value: '$45.2K', change: '+18%', color: 'bg-yellow-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg opacity-20`} />
              <span className="text-sm text-gray-500">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/admin/students"
            className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#4242ff] hover:bg-gray-50 transition-colors"
          >
            <PlusIcon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Add New Student</span>
          </Link>
          <Link
            href="/admin/events"
            className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#4242ff] hover:bg-gray-50 transition-colors"
          >
            <PlusIcon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Create Event</span>
          </Link>
          <Link
            href="/admin/programs"
            className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#4242ff] hover:bg-gray-50 transition-colors"
          >
            <PlusIcon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700">Add Program</span>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {[
            'New student registration: John Doe',
            'Event "Open Day 2024" created',
            'Program "K-12 SEED" updated',
            'Content page "About Us" modified',
            'Student Sarah Smith enrolled in Masterclass',
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
              <div className="w-2 h-2 bg-[#4242ff] rounded-full flex-shrink-0" />
              <p className="text-sm text-gray-700">{activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}