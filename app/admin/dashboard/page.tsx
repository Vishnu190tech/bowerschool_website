'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import EventsManagementWithTabs from '@/components/admin/EventsManagementWithTabs';
import {
  HomeIcon,
  UsersIcon,
  AcademicCapIcon,
  CalendarIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  PlusIcon,
  FolderIcon,
} from '@heroicons/react/24/outline';

interface AdminUser {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    // In a real app, fetch admin user details
    setAdminUser({
      id: '1',
      email: 'admin@bowerschool.com',
      username: 'admin',
      firstName: 'Admin',
      lastName: 'User',
    });
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });

      if (response.ok) {
        toast.success('Logged out successfully');
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
    }
  };

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: HomeIcon },
    { id: 'students', label: 'Students', icon: UsersIcon },
    { id: 'programs', label: 'Programs', icon: AcademicCapIcon },
    { id: 'events', label: 'Events', icon: CalendarIcon },
    { id: 'content', label: 'Content', icon: FolderIcon },
    { id: 'analytics', label: 'Analytics', icon: ChartBarIcon },
    { id: 'settings', label: 'Settings', icon: Cog6ToothIcon },
  ];

  const stats = [
    { label: 'Total Students', value: '1,234', change: '+12%', color: 'bg-blue-500' },
    { label: 'Active Programs', value: '8', change: '+2', color: 'bg-green-500' },
    { label: 'Upcoming Events', value: '5', change: 'This Week', color: 'bg-purple-500' },
    { label: 'Total Revenue', value: '$45.2K', change: '+18%', color: 'bg-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="px-6 py-6 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Bower Admin</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden text-gray-400 hover:text-white"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#4242ff] text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* User Info & Logout */}
            <div className="p-4 border-t border-gray-800">
              <div className="px-4 py-3 bg-gray-800 rounded-lg mb-3">
                <p className="text-sm text-gray-400">Logged in as</p>
                <p className="text-white font-medium truncate">{adminUser?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
              >
                <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="lg:hidden text-gray-600 hover:text-gray-900"
                  >
                    <Bars3Icon className="w-6 h-6" />
                  </button>
                  <h1 className="text-2xl font-semibold text-gray-900 capitalize">
                    {menuItems.find(item => item.id === activeSection)?.label}
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">
                    Welcome back, {adminUser?.firstName}!
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {activeSection === 'overview' && (
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
                    <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#4242ff] hover:bg-gray-50 transition-colors">
                      <PlusIcon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Add New Student</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#4242ff] hover:bg-gray-50 transition-colors">
                      <PlusIcon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Create Event</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#4242ff] hover:bg-gray-50 transition-colors">
                      <PlusIcon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Add Program</span>
                    </button>
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
            )}

            {activeSection === 'students' && (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Student Management</h2>
                  <button className="px-4 py-2 bg-[#4242ff] text-white rounded-lg hover:bg-[#3232e6] transition-colors">
                    Add Student
                  </button>
                </div>
                <p className="text-gray-600">Student management features will be implemented here.</p>
              </div>
            )}

            {activeSection === 'programs' && (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Program Management</h2>
                  <button className="px-4 py-2 bg-[#4242ff] text-white rounded-lg hover:bg-[#3232e6] transition-colors">
                    Add Program
                  </button>
                </div>
                <p className="text-gray-600">Program management features will be implemented here.</p>
              </div>
            )}

            {activeSection === 'events' && <EventsManagementWithTabs />}

            {activeSection === 'content' && (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Content Management</h2>
                  <button className="px-4 py-2 bg-[#4242ff] text-white rounded-lg hover:bg-[#3232e6] transition-colors">
                    Add Content
                  </button>
                </div>
                <p className="text-gray-600">Content management features will be implemented here. You can manage website content, pages, and media.</p>
              </div>
            )}

            {activeSection === 'analytics' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Analytics</h2>
                <p className="text-gray-600">Analytics and reporting features will be implemented here.</p>
              </div>
            )}

            {activeSection === 'settings' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Settings</h2>
                <p className="text-gray-600">System settings and configuration options will be implemented here.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}