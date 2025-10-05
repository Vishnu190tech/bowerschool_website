'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import {
  UserCircleIcon,
  AcademicCapIcon,
  CalendarIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

interface StudentUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  program: string;
}

export default function StudentDashboard() {
  const [studentUser, setStudentUser] = useState<StudentUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    // In a real app, fetch student user details from the session
    // For now, we'll set mock data
    setStudentUser({
      id: '1',
      email: 'student@example.com',
      firstName: 'John',
      lastName: 'Doe',
      program: 'Undergraduate',
    });
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
      });

      if (response.ok) {
        toast.success('Logged out successfully');
        router.push('/login');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
    }
  };

  const dashboardCards = [
    {
      title: 'My Profile',
      description: 'View and edit your personal information',
      icon: UserCircleIcon,
      color: 'bg-blue-500',
      link: '#',
    },
    {
      title: 'My Programs',
      description: 'Access your enrolled programs and courses',
      icon: AcademicCapIcon,
      color: 'bg-green-500',
      link: '#',
    },
    {
      title: 'Upcoming Events',
      description: 'Check out upcoming events and workshops',
      icon: CalendarIcon,
      color: 'bg-purple-500',
      link: '#',
    },
    {
      title: 'Resources',
      description: 'Download course materials and resources',
      icon: DocumentTextIcon,
      color: 'bg-yellow-500',
      link: '#',
    },
    {
      title: 'Progress',
      description: 'Track your learning progress',
      icon: ChartBarIcon,
      color: 'bg-pink-500',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-10 lg:pt-20">
      <Toaster position="top-right" />
      <Header />

      <main className="flex-1 bg-[#181a1c]">
        <div className="bg-white rounded-b-3xl w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Welcome back, {studentUser?.firstName}!
                  </h1>
                  <p className="mt-2 text-lg text-gray-600">
                    Continue your learning journey with Bower School
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="mt-4 lg:mt-0 flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </motion.div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-lg font-medium mb-2">Enrolled Program</h3>
                <p className="text-2xl font-bold">{studentUser?.program || 'Not Enrolled'}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-lg font-medium mb-2">Courses Completed</h3>
                <p className="text-2xl font-bold">3 of 12</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white"
              >
                <h3 className="text-lg font-medium mb-2">Next Event</h3>
                <p className="text-2xl font-bold">Open Day 2024</p>
              </motion.div>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboardCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-100"
                >
                  <div className="p-6">
                    <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-gray-50 rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {[
                  'Completed Module 1: Introduction to Entrepreneurship',
                  'Registered for Masterclass: Digital Marketing',
                  'Submitted assignment for Business Planning',
                  'Joined the Alumni Connect program',
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 py-2 border-b border-gray-200 last:border-0">
                    <div className="w-2 h-2 bg-[#4242ff] rounded-full" />
                    <p className="text-sm text-gray-700">{activity}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}