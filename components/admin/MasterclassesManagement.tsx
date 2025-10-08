'use client';

import React, { useState, useEffect } from 'react';
import { useMasterclasses } from '@/hooks/useEvents';
import { PlusCircleIcon, PencilIcon, TrashIcon, DocumentTextIcon, EyeIcon } from '@heroicons/react/24/outline';

interface Masterclass {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  category: string;
  videoThumbnail?: string;
  videoUrl?: string;
  learningOutcomes?: any;
  galleryImages?: any;
  studentPortalConfig?: any;
  assignmentDetails?: any;
  registrationCode?: string;
  instructors?: any;
  isPublished: boolean;
  isFeatured: boolean;
}

export default function MasterclassesManagement() {
  const { data: masterclasses, refetch } = useMasterclasses();
  const [selectedMasterclass, setSelectedMasterclass] = useState<Masterclass | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [masterclassToDelete, setMasterclassToDelete] = useState<Masterclass | null>(null);
  const [activeTab, setActiveTab] = useState<'basic' | 'content' | 'portal' | 'media' | 'instructors' | 'network'>('basic');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    date: '',
    time: '',
    category: 'BowerClass',
    videoThumbnail: '',
    videoUrl: '',
    level: 'Beginner',
    duration: '',
    prerequisites: '',
    maxStudents: 100,
    price: 0,
    registrationOpen: true,
    registrationLink: '',
    registrationCode: '',
    isPublished: false,
    isFeatured: false,
  });

  const [learningOutcomes, setLearningOutcomes] = useState<string[]>([]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [instructors, setInstructors] = useState<any[]>([]);
  const [networkStats, setNetworkStats] = useState<any[]>([]);
  const [assignmentDetails, setAssignmentDetails] = useState({
    title: 'Masterclass Project Overview',
    subtitle: 'Showcase Your Mastery and Reflect on Your Learning Journey',
    dueDate: '',
    instructions: [] as string[],
    fileFormats: 'PDF or Word format (.pdf / .docx)',
    maxAttempts: 1,
  });
  const [portalConfig, setPortalConfig] = useState({
    title: 'Student Portal',
    subtitle: 'Attended this session? Enter your reg code to access exclusive content',
    placeholder: 'Enter Registration Code',
    buttonText: 'Unlock Portal',
    supportText: "Haven't received your code? Contact support.",
  });

  // Prefill data for new masterclass
  const prefillData = () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);

    setFormData({
      title: 'UX for Founders – Live Masterclass',
      subtitle: 'Learn how to design user experiences that convert',
      description: 'Join us for an intensive masterclass where you\'ll learn the fundamental principles of UX design specifically tailored for founders and entrepreneurs. This hands-on session will cover user research, prototyping, design thinking, and how to create products that users love.',
      date: futureDate.toISOString().split('T')[0],
      time: '10:00 AM - 2:00 PM IST',
      category: 'BowerClass',
      videoThumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      level: 'Beginner',
      duration: '4 hours',
      prerequisites: 'Basic understanding of digital products and business fundamentals',
      maxStudents: 50,
      price: 2999,
      registrationOpen: true,
      registrationLink: 'https://example.com/register',
      registrationCode: 'BOWERUX2025',
      isPublished: true,
      isFeatured: true,
    });

    setLearningOutcomes([
      'Understanding user-centered design principles',
      'Conducting effective user research and interviews',
      'Creating user personas and journey maps',
      'Rapid prototyping techniques',
      'Design thinking methodology',
      'Building MVPs with great UX',
    ]);

    setGalleryImages([
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    ]);

    setInstructors([
      {
        name: 'Sarah Johnson',
        title: 'Head of Design, TechCorp',
        bio: '10+ years of experience in UX design',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      },
      {
        name: 'Michael Chen',
        title: 'Founder & CEO, DesignLab',
        bio: 'Serial entrepreneur and design expert',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      },
    ]);

    const assignmentDueDate = new Date();
    assignmentDueDate.setDate(assignmentDueDate.getDate() + 45);

    setAssignmentDetails({
      title: 'UX Design Project',
      subtitle: 'Apply your learnings to create a real-world UX solution',
      dueDate: assignmentDueDate.toISOString().split('T')[0],
      instructions: [
        'Choose a real-world problem to solve',
        'Conduct user research with at least 3 participants',
        'Create user personas and journey maps',
        'Design a prototype solution',
        'Document your design process and decisions',
        'Present your solution in a 5-minute video',
      ],
      fileFormats: 'PDF presentation and video file (mp4)',
      maxAttempts: 1,
    });

    setNetworkStats([
      {
        title: '100+ Builders in the Bower Network',
        description: 'From teen entrepreneurs to working professionals, our alumni are launching ventures, scaling ideas, and shaping the future of business and innovation.'
      },
      {
        title: 'Many Already Leading or Launching',
        description: 'Whether co-founding startups or taking charge of early projects, Bower alumni are stepping into entrepreneurial roles across sectors.'
      },
      {
        title: 'Dozens of Collaborations in Motion',
        description: 'From co-built ventures to peer mentoring and pitch teams, alumni continue to create with—and for—each other.'
      }
    ]);
  };

  const handleCreate = () => {
    setSelectedMasterclass(null);
    setIsModalOpen(true);
    prefillData();
  };

  const handleEdit = (masterclass: Masterclass) => {
    setSelectedMasterclass(masterclass);
    setFormData({
      title: masterclass.title,
      subtitle: masterclass.subtitle || '',
      description: masterclass.description,
      date: new Date(masterclass.date).toISOString().split('T')[0],
      time: '',
      category: masterclass.category,
      videoThumbnail: masterclass.videoThumbnail || '',
      videoUrl: masterclass.videoUrl || '',
      level: 'Beginner',
      duration: '',
      prerequisites: '',
      maxStudents: 100,
      price: 0,
      registrationOpen: true,
      registrationLink: '',
      registrationCode: masterclass.registrationCode || '',
      isPublished: masterclass.isPublished,
      isFeatured: masterclass.isFeatured,
    });

    setLearningOutcomes(masterclass.learningOutcomes || []);
    setGalleryImages(masterclass.galleryImages || []);
    setInstructors(masterclass.instructors || []);
    setAssignmentDetails(masterclass.assignmentDetails || assignmentDetails);
    setPortalConfig(masterclass.studentPortalConfig || portalConfig);
    setNetworkStats((masterclass as any).networkStats || []);

    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (!masterclassToDelete) return;

    try {
      const response = await fetch(`/api/masterclasses/${masterclassToDelete.slug}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        refetch();
        setIsDeleteConfirmOpen(false);
        setMasterclassToDelete(null);
      }
    } catch (error) {
      console.error('Error deleting masterclass:', error);
      alert('Failed to delete masterclass');
    }
  };

  const handleSave = async () => {
    try {
      const payload = {
        ...formData,
        learningOutcomes,
        galleryImages,
        instructors,
        assignmentDetails,
        studentPortalConfig: portalConfig,
        networkStats,
      };

      const url = selectedMasterclass
        ? `/api/masterclasses/${selectedMasterclass.slug}`
        : '/api/masterclasses';

      const method = selectedMasterclass ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        refetch();
        setIsModalOpen(false);
        resetForm();
      } else {
        const error = await response.json();
        alert(`Failed to save masterclass: ${error.details || error.error}`);
      }
    } catch (error) {
      console.error('Error saving masterclass:', error);
      alert('Failed to save masterclass');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      date: '',
      time: '',
      category: 'BowerClass',
      videoThumbnail: '',
      videoUrl: '',
      level: 'Beginner',
      duration: '',
      prerequisites: '',
      maxStudents: 100,
      price: 0,
      registrationOpen: true,
      registrationLink: '',
      registrationCode: '',
      isPublished: false,
      isFeatured: false,
    });
    setLearningOutcomes([]);
    setGalleryImages([]);
    setInstructors([]);
    setNetworkStats([]);
    setAssignmentDetails({
      title: 'Masterclass Project Overview',
      subtitle: 'Showcase Your Mastery and Reflect on Your Learning Journey',
      dueDate: '',
      instructions: [],
      fileFormats: 'PDF or Word format (.pdf / .docx)',
      maxAttempts: 1,
    });
    setActiveTab('basic');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Masterclasses Management</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <PlusCircleIcon className="w-5 h-5" />
          Create Masterclass
        </button>
      </div>

      {/* Masterclasses List */}
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {masterclasses?.map((masterclass) => (
              <tr key={masterclass.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{masterclass.title}</div>
                    <div className="text-sm text-gray-500">{masterclass.subtitle}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(masterclass.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {masterclass.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${masterclass.isPublished
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                    }`}>
                    {masterclass.isPublished ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${masterclass.isFeatured
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                    }`}>
                    {masterclass.isFeatured ? 'Featured' : 'Regular'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <a
                      href={`/events/masterclasses/${masterclass.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-900"
                      title="View Masterclass"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => handleEdit(masterclass)}
                      className="text-indigo-600 hover:text-indigo-900"
                      title="Edit Masterclass"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        setMasterclassToDelete(masterclass);
                        setIsDeleteConfirmOpen(true);
                      }}
                      className="text-red-600 hover:text-red-900"
                      title="Delete Masterclass"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500/50 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {selectedMasterclass ? 'Edit Masterclass' : 'Create Masterclass'}
              </h3>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-8 overflow-x-auto">
                  {['basic', 'content', 'portal', 'media', 'instructors', 'network'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              {activeTab === 'basic' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Subtitle</label>
                    <input
                      type="text"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description *</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date *</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Time</label>
                      <input
                        type="text"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        placeholder="10:00 AM - 2:00 PM IST"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Level</label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                      >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Duration</label>
                      <input
                        type="text"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        placeholder="4 hours"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">Max Students</label>
                      <input
                        type="number"
                        value={formData.maxStudents}
                        onChange={(e) => setFormData({ ...formData, maxStudents: parseInt(e.target.value) })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isPublished}
                        onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">Published</span>
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isFeatured}
                        onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                        className="rounded border-gray-300 text-blue-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">Featured</span>
                    </label>
                  </div>
                </div>
              )}

              {activeTab === 'content' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Learning Outcomes</label>
                    {learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={outcome}
                          onChange={(e) => {
                            const newOutcomes = [...learningOutcomes];
                            newOutcomes[index] = e.target.value;
                            setLearningOutcomes(newOutcomes);
                          }}
                          className="flex-1 border-gray-300 rounded-md shadow-sm text-gray-900"
                        />
                        <button
                          onClick={() => setLearningOutcomes(learningOutcomes.filter((_, i) => i !== index))}
                          className="text-red-600 hover:text-red-900"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setLearningOutcomes([...learningOutcomes, ''])}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      + Add Learning Outcome
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Prerequisites</label>
                    <textarea
                      value={formData.prerequisites}
                      onChange={(e) => setFormData({ ...formData, prerequisites: e.target.value })}
                      rows={3}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'portal' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Registration Code</label>
                    <input
                      type="text"
                      value={formData.registrationCode}
                      onChange={(e) => setFormData({ ...formData, registrationCode: e.target.value })}
                      placeholder="BOWERUX2025"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Portal Title</label>
                    <input
                      type="text"
                      value={portalConfig.title}
                      onChange={(e) => setPortalConfig({ ...portalConfig, title: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Portal Subtitle</label>
                    <input
                      type="text"
                      value={portalConfig.subtitle}
                      onChange={(e) => setPortalConfig({ ...portalConfig, subtitle: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                    />
                  </div>

                  <h4 className="font-medium text-gray-700 mt-6">Assignment Details</h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Assignment Title</label>
                    <input
                      type="text"
                      value={assignmentDetails.title}
                      onChange={(e) => setAssignmentDetails({ ...assignmentDetails, title: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Due Date</label>
                    <input
                      type="date"
                      value={assignmentDetails.dueDate}
                      onChange={(e) => setAssignmentDetails({ ...assignmentDetails, dueDate: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                    {assignmentDetails.instructions.map((instruction, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={instruction}
                          onChange={(e) => {
                            const newInstructions = [...assignmentDetails.instructions];
                            newInstructions[index] = e.target.value;
                            setAssignmentDetails({ ...assignmentDetails, instructions: newInstructions });
                          }}
                          className="flex-1 border-gray-300 rounded-md shadow-sm text-gray-900"
                        />
                        <button
                          onClick={() => {
                            const newInstructions = assignmentDetails.instructions.filter((_, i) => i !== index);
                            setAssignmentDetails({ ...assignmentDetails, instructions: newInstructions });
                          }}
                          className="text-red-600 hover:text-red-900"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setAssignmentDetails({
                        ...assignmentDetails,
                        instructions: [...assignmentDetails.instructions, '']
                      })}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      + Add Instruction
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'media' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Video Thumbnail URL</label>
                    <input
                      type="url"
                      value={formData.videoThumbnail}
                      onChange={(e) => setFormData({ ...formData, videoThumbnail: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Video URL</label>
                    <input
                      type="url"
                      value={formData.videoUrl}
                      onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
                    {galleryImages.map((image, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="url"
                          value={image}
                          onChange={(e) => {
                            const newImages = [...galleryImages];
                            newImages[index] = e.target.value;
                            setGalleryImages(newImages);
                          }}
                          className="flex-1 border-gray-300 rounded-md shadow-sm text-gray-900"
                          placeholder="Image URL"
                        />
                        <button
                          onClick={() => setGalleryImages(galleryImages.filter((_, i) => i !== index))}
                          className="text-red-600 hover:text-red-900"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => setGalleryImages([...galleryImages, ''])}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      + Add Gallery Image
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'instructors' && (
                <div className="space-y-4">
                  {instructors.map((instructor, index) => (
                    <div key={index} className="border p-4 rounded-md">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Name</label>
                          <input
                            type="text"
                            value={instructor.name}
                            onChange={(e) => {
                              const newInstructors = [...instructors];
                              newInstructors[index] = { ...instructor, name: e.target.value };
                              setInstructors(newInstructors);
                            }}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Title</label>
                          <input
                            type="text"
                            value={instructor.title}
                            onChange={(e) => {
                              const newInstructors = [...instructors];
                              newInstructors[index] = { ...instructor, title: e.target.value };
                              setInstructors(newInstructors);
                            }}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700">Bio</label>
                        <input
                          type="text"
                          value={instructor.bio}
                          onChange={(e) => {
                            const newInstructors = [...instructors];
                            newInstructors[index] = { ...instructor, bio: e.target.value };
                            setInstructors(newInstructors);
                          }}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                        />
                      </div>
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                          type="url"
                          value={instructor.image}
                          onChange={(e) => {
                            const newInstructors = [...instructors];
                            newInstructors[index] = { ...instructor, image: e.target.value };
                            setInstructors(newInstructors);
                          }}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                        />
                      </div>
                      <button
                        onClick={() => setInstructors(instructors.filter((_, i) => i !== index))}
                        className="mt-2 text-red-600 hover:text-red-900 text-sm"
                      >
                        Remove Instructor
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => setInstructors([...instructors, { name: '', title: '', bio: '', image: '' }])}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    + Add Instructor
                  </button>
                </div>
              )}

              {activeTab === 'network' && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      Configure the network statistics that will be displayed in the "Inside The Bower Network" section of this masterclass page.
                    </p>
                  </div>

                  {networkStats.map((stat, index) => (
                    <div key={index} className="border p-4 rounded-md bg-gray-50">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-sm font-semibold text-gray-700">Network Stat #{index + 1}</h4>
                        <button
                          onClick={() => setNetworkStats(networkStats.filter((_, i) => i !== index))}
                          className="text-red-600 hover:text-red-900 text-sm"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Title *</label>
                          <input
                            type="text"
                            value={stat.title}
                            onChange={(e) => {
                              const newStats = [...networkStats];
                              newStats[index] = { ...stat, title: e.target.value };
                              setNetworkStats(newStats);
                            }}
                            placeholder="e.g., 100+ Builders in the Bower Network"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">Description *</label>
                          <textarea
                            value={stat.description}
                            onChange={(e) => {
                              const newStats = [...networkStats];
                              newStats[index] = { ...stat, description: e.target.value };
                              setNetworkStats(newStats);
                            }}
                            placeholder="Describe this network statistic in detail..."
                            rows={3}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => setNetworkStats([...networkStats, { title: '', description: '' }])}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                  >
                    <span className="text-lg">+</span> Add Network Stat
                  </button>

                  {networkStats.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p className="mb-2">No network statistics added yet.</p>
                      <p className="text-sm">Click "Add Network Stat" to create your first one, or the section will use default stats.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {selectedMasterclass ? 'Update' : 'Create'} Masterclass
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteConfirmOpen && (
        <div className="fixed inset-0 bg-gray-500/50 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{masterclassToDelete?.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsDeleteConfirmOpen(false);
                  setMasterclassToDelete(null);
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}