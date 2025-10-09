'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
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
  FolderIcon,
  CloudIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

interface AdminUser {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const router = useRouter();
  const pathname = usePathname();

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
    { id: 'overview', label: 'Overview', icon: HomeIcon, href: '/admin' },
    { id: 'students', label: 'Students', icon: UsersIcon, href: '/admin/students' },
    { id: 'leads', label: 'Leads', icon: UserGroupIcon, href: '/admin/leads' },
    { id: 'programs', label: 'Programs', icon: AcademicCapIcon, href: '/admin/programs' },
    { id: 'events', label: 'Events', icon: CalendarIcon, href: '/admin/events' },
    { id: 'content', label: 'Content', icon: FolderIcon, href: '/admin/content' },
    { id: 'zoho', label: 'Zoho CRM', icon: CloudIcon, href: '/admin/zoho' },
    { id: 'analytics', label: 'Analytics', icon: ChartBarIcon, href: '/admin/analytics' },
    { id: 'settings', label: 'Settings', icon: Cog6ToothIcon, href: '/admin/settings' },
  ];

  // Get current page title based on pathname
  const getCurrentPageTitle = () => {
    const currentItem = menuItems.find(item => item.href === pathname);
    return currentItem?.label || 'Dashboard';
  };

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
                <Link href="/admin" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
                  Bower Admin
                </Link>
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
              {menuItems.map((item) => {
                const isActive = pathname === item.href || (item.href === '/admin' && pathname === '/admin/dashboard');
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#4242ff] text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
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
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {getCurrentPageTitle()}
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
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}