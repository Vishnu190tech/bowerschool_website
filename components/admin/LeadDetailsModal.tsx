'use client';

import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import toast from 'react-hot-toast';
import {
  XMarkIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowPathIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { DuplicateInfo } from '@/lib/zoho/types';

interface SyncLog {
  id: string;
  action: string;
  status: string;
  request: any;
  response: any;
  error: string | null;
  httpStatus: number | null;
  createdAt: string;
}

interface LeadDetails {
  id: string;
  // Required fields
  firstName: string | null;
  lastName: string;
  email: string;
  phone: string | null;
  leadSource: string;
  programInterested: string | null;

  // Basic contact
  salutation: string | null;
  mobile: string | null;
  secondaryEmail: string | null;
  leadStatus: string;
  leadSubStatus: string | null;
  emailOptOut: boolean;
  whatsappOptOut: boolean;

  // Student information
  grade: string | null;
  board: string | null;
  academicStream: string | null;
  gender: string | null;
  birthday: string | null;
  schoolInstitution: string | null;

  // Parent/Guardian
  parentGuardianName: string | null;
  parentGuardianEmail: string | null;
  parentGuardianPhone: string | null;
  relationshipToStudent: string | null;
  occupation: string | null;

  // Address
  street: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  country: string | null;

  // Sales & Program
  salesDepartment: string | null;

  // Referral
  referrerName: string | null;
  referrerEmail: string | null;
  referrerPhone: string | null;
  referralCode: string | null;

  // Marketing/UTM
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  otherSource: string | null;

  // Description
  description: string | null;

  // Qualification
  qualificationScore: number | null;
  engagementScore: number | null;
  lastActivityTime: string | null;

  // Sync fields
  zohoLeadId: string | null;
  syncStatus: string;
  syncError: string | null;
  syncAttempts: number;
  lastSyncAt: string | null;
  createdAt: string;
  updatedAt: string;
  syncLogs: SyncLog[];
  duplicateInfo?: DuplicateInfo | null;
}

interface LeadDetailsModalProps {
  isOpen: boolean;
  leadId: string | null;
  onClose: () => void;
  onLeadUpdated?: () => void;
  onLeadDeleted?: () => void;
}

export default function LeadDetailsModal({
  isOpen,
  leadId,
  onClose,
  onLeadUpdated,
  onLeadDeleted
}: LeadDetailsModalProps) {
  const [lead, setLead] = useState<LeadDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isResolving, setIsResolving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [expandedLog, setExpandedLog] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && leadId) {
      fetchLeadDetails();
    }
  }, [isOpen, leadId]);

  const fetchLeadDetails = async () => {
    if (!leadId) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/leads/${leadId}`);
      const data = await response.json();

      if (data.success) {
        setLead(data.data);
      } else {
        toast.error('Failed to fetch lead details');
      }
    } catch (error) {
      console.error('Fetch lead details error:', error);
      toast.error('Failed to fetch lead details');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResolveDuplicate = async () => {
    if (!lead || !lead.duplicateInfo?.zohoLeadId) {
      toast.error('No Zoho Lead ID found in duplicate error');
      return;
    }

    setIsResolving(true);
    try {
      const response = await fetch(`/api/admin/leads/${lead.id}/resolve-duplicate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          zohoLeadId: lead.duplicateInfo.zohoLeadId
        })
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Duplicate resolved successfully!');
        fetchLeadDetails(); // Refresh lead details
        onLeadUpdated?.();
      } else {
        toast.error(data.error || 'Failed to resolve duplicate');
      }
    } catch (error) {
      console.error('Resolve duplicate error:', error);
      toast.error('Failed to resolve duplicate');
    } finally {
      setIsResolving(false);
    }
  };

  const handleDelete = async () => {
    if (!lead) return;

    if (!confirm(`Are you sure you want to delete lead "${lead.firstName} ${lead.lastName}"?`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/admin/leads?id=${lead.id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Lead deleted successfully');
        onLeadDeleted?.();
        onClose();
      } else {
        toast.error('Failed to delete lead');
      }
    } catch (error) {
      console.error('Delete lead error:', error);
      toast.error('Failed to delete lead');
    } finally {
      setIsDeleting(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'synced':
      case 'success':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      default:
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      synced: 'bg-green-100 text-green-800',
      success: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };

    return (
      <span className={`px-3 py-1 text-sm font-medium rounded-full ${statusClasses[status as keyof typeof statusClasses] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const getZohoCRMUrl = (zohoLeadId: string) => {
    // This will use the API domain from stored credentials
    // For now, we'll use a generic format
    return `https://crm.zoho.in/crm/org60033339930/tab/Leads/${zohoLeadId}`;
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                  <Dialog.Title className="text-xl font-semibold text-gray-900">
                    Lead Details
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="px-6 py-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <ArrowPathIcon className="w-8 h-8 animate-spin text-gray-400" />
                      <span className="ml-3 text-gray-600">Loading lead details...</span>
                    </div>
                  ) : lead ? (
                    <div className="space-y-6">
                      {/* Duplicate Warning */}
                      {lead.duplicateInfo?.isDuplicate && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-yellow-900 mb-2">
                                Duplicate Lead Detected in Zoho CRM
                              </h3>
                              <p className="text-sm text-yellow-800 mb-3">
                                {lead.duplicateInfo.message || 'This lead already exists in Zoho CRM with matching information.'}
                              </p>

                              {/* Show which fields are duplicated */}
                              <div className="bg-white rounded p-3 mb-3">
                                <p className="text-xs font-medium text-gray-700 mb-2">Matching Fields:</p>
                                <div className="space-y-2">
                                  <div className="flex items-start gap-2">
                                    <span className="text-xs font-semibold text-yellow-700 min-w-[80px]">Email:</span>
                                    <span className="text-xs text-gray-900">{lead.email}</span>
                                  </div>
                                  {lead.phone && (
                                    <div className="flex items-start gap-2">
                                      <span className="text-xs font-semibold text-yellow-700 min-w-[80px]">Phone:</span>
                                      <span className="text-xs text-gray-900">{lead.phone}</span>
                                    </div>
                                  )}
                                  {(lead.firstName || lead.lastName) && (
                                    <div className="flex items-start gap-2">
                                      <span className="text-xs font-semibold text-yellow-700 min-w-[80px]">Name:</span>
                                      <span className="text-xs text-gray-900">{lead.firstName} {lead.lastName}</span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {lead.duplicateInfo.zohoLeadId && (
                                <div className="bg-white rounded p-3 mb-3">
                                  <p className="text-xs text-gray-600 mb-1">Existing Zoho Lead ID:</p>
                                  <div className="flex items-center gap-2">
                                    <p className="font-mono text-sm font-semibold text-gray-900">
                                      {lead.duplicateInfo.zohoLeadId}
                                    </p>
                                    <a
                                      href={getZohoCRMUrl(lead.duplicateInfo.zohoLeadId)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 hover:text-blue-800 text-xs underline"
                                    >
                                      View in Zoho
                                    </a>
                                  </div>
                                </div>
                              )}
                              {lead.duplicateInfo.zohoLeadId && !lead.zohoLeadId && (
                                <button
                                  onClick={handleResolveDuplicate}
                                  disabled={isResolving}
                                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                                >
                                  {isResolving ? (
                                    <>
                                      <ArrowPathIcon className="w-4 h-4 animate-spin inline mr-2" />
                                      Resolving...
                                    </>
                                  ) : (
                                    'Link to Existing Zoho Lead'
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Basic Contact Information */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Contact Information</h3>
                        <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {lead.salutation && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Salutation</p>
                              <p className="text-sm font-medium text-gray-900">{lead.salutation}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Name</p>
                            <p className="text-sm font-medium text-gray-900">
                              {lead.firstName} {lead.lastName}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Email</p>
                            <p className="text-sm font-medium text-gray-900">{lead.email}</p>
                          </div>
                          {lead.secondaryEmail && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Secondary Email</p>
                              <p className="text-sm font-medium text-gray-900">{lead.secondaryEmail}</p>
                            </div>
                          )}
                          {lead.phone && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Phone</p>
                              <p className="text-sm font-medium text-gray-900">{lead.phone}</p>
                            </div>
                          )}
                          {lead.mobile && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Mobile</p>
                              <p className="text-sm font-medium text-gray-900">{lead.mobile}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Lead Source</p>
                            <p className="text-sm font-medium text-gray-900">{lead.leadSource}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Lead Status</p>
                            <p className="text-sm font-medium text-gray-900">{lead.leadStatus}</p>
                          </div>
                          {lead.leadSubStatus && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Lead Sub Status</p>
                              <p className="text-sm font-medium text-gray-900">{lead.leadSubStatus}</p>
                            </div>
                          )}
                          {lead.programInterested && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Program Interested</p>
                              <p className="text-sm font-medium text-gray-900">{lead.programInterested}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Communication Preferences</p>
                            <p className="text-sm font-medium text-gray-900">
                              {lead.emailOptOut ? '❌ Email Opt-out' : '✅ Email OK'}
                              {' • '}
                              {lead.whatsappOptOut ? '❌ WhatsApp Opt-out' : '✅ WhatsApp OK'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Student Information */}
                      {(lead.grade || lead.board || lead.academicStream || lead.gender || lead.birthday || lead.schoolInstitution) && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Information</h3>
                          <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {lead.grade && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Grade</p>
                                <p className="text-sm font-medium text-gray-900">{lead.grade}</p>
                              </div>
                            )}
                            {lead.board && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Board</p>
                                <p className="text-sm font-medium text-gray-900">{lead.board}</p>
                              </div>
                            )}
                            {lead.academicStream && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Academic Stream</p>
                                <p className="text-sm font-medium text-gray-900">{lead.academicStream}</p>
                              </div>
                            )}
                            {lead.gender && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Gender</p>
                                <p className="text-sm font-medium text-gray-900">{lead.gender}</p>
                              </div>
                            )}
                            {lead.birthday && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Date of Birth</p>
                                <p className="text-sm font-medium text-gray-900">
                                  {new Date(lead.birthday).toLocaleDateString()}
                                </p>
                              </div>
                            )}
                            {lead.schoolInstitution && (
                              <div className="md:col-span-2">
                                <p className="text-xs text-gray-500 mb-1">School/Institution</p>
                                <p className="text-sm font-medium text-gray-900">{lead.schoolInstitution}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Parent/Guardian Information */}
                      {(lead.parentGuardianName || lead.parentGuardianEmail || lead.parentGuardianPhone || lead.relationshipToStudent || lead.occupation) && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Parent/Guardian Information</h3>
                          <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {lead.parentGuardianName && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Name</p>
                                <p className="text-sm font-medium text-gray-900">{lead.parentGuardianName}</p>
                              </div>
                            )}
                            {lead.relationshipToStudent && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Relationship</p>
                                <p className="text-sm font-medium text-gray-900">{lead.relationshipToStudent}</p>
                              </div>
                            )}
                            {lead.parentGuardianEmail && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Email</p>
                                <p className="text-sm font-medium text-gray-900">{lead.parentGuardianEmail}</p>
                              </div>
                            )}
                            {lead.parentGuardianPhone && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Phone</p>
                                <p className="text-sm font-medium text-gray-900">{lead.parentGuardianPhone}</p>
                              </div>
                            )}
                            {lead.occupation && (
                              <div className="md:col-span-2">
                                <p className="text-xs text-gray-500 mb-1">Occupation</p>
                                <p className="text-sm font-medium text-gray-900">{lead.occupation}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Address Information */}
                      {(lead.street || lead.city || lead.state || lead.zipCode || lead.country) && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
                          <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {lead.street && (
                              <div className="md:col-span-2">
                                <p className="text-xs text-gray-500 mb-1">Street</p>
                                <p className="text-sm font-medium text-gray-900">{lead.street}</p>
                              </div>
                            )}
                            {lead.city && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">City</p>
                                <p className="text-sm font-medium text-gray-900">{lead.city}</p>
                              </div>
                            )}
                            {lead.state && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">State</p>
                                <p className="text-sm font-medium text-gray-900">{lead.state}</p>
                              </div>
                            )}
                            {lead.zipCode && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">ZIP/PIN Code</p>
                                <p className="text-sm font-medium text-gray-900">{lead.zipCode}</p>
                              </div>
                            )}
                            {lead.country && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Country</p>
                                <p className="text-sm font-medium text-gray-900">{lead.country}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Sales & Program Information */}
                      {lead.salesDepartment && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales & Program</h3>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Sales Department</p>
                              <p className="text-sm font-medium text-gray-900">{lead.salesDepartment}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Referral Information */}
                      {(lead.referrerName || lead.referrerEmail || lead.referrerPhone || lead.referralCode) && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Referral Information</h3>
                          <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {lead.referrerName && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Referrer Name</p>
                                <p className="text-sm font-medium text-gray-900">{lead.referrerName}</p>
                              </div>
                            )}
                            {lead.referralCode && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Referral Code</p>
                                <p className="text-sm font-medium text-gray-900">{lead.referralCode}</p>
                              </div>
                            )}
                            {lead.referrerEmail && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Referrer Email</p>
                                <p className="text-sm font-medium text-gray-900">{lead.referrerEmail}</p>
                              </div>
                            )}
                            {lead.referrerPhone && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Referrer Phone</p>
                                <p className="text-sm font-medium text-gray-900">{lead.referrerPhone}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Marketing/UTM Information */}
                      {(lead.utmSource || lead.utmMedium || lead.utmCampaign || lead.utmContent || lead.utmTerm || lead.otherSource) && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Marketing & UTM Tracking</h3>
                          <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {lead.utmSource && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">UTM Source</p>
                                <p className="text-sm font-medium text-gray-900">{lead.utmSource}</p>
                              </div>
                            )}
                            {lead.utmMedium && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">UTM Medium</p>
                                <p className="text-sm font-medium text-gray-900">{lead.utmMedium}</p>
                              </div>
                            )}
                            {lead.utmCampaign && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">UTM Campaign</p>
                                <p className="text-sm font-medium text-gray-900">{lead.utmCampaign}</p>
                              </div>
                            )}
                            {lead.utmContent && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">UTM Content</p>
                                <p className="text-sm font-medium text-gray-900">{lead.utmContent}</p>
                              </div>
                            )}
                            {lead.utmTerm && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">UTM Term</p>
                                <p className="text-sm font-medium text-gray-900">{lead.utmTerm}</p>
                              </div>
                            )}
                            {lead.otherSource && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Other Source</p>
                                <p className="text-sm font-medium text-gray-900">{lead.otherSource}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      {lead.description && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-900 whitespace-pre-wrap">{lead.description}</p>
                          </div>
                        </div>
                      )}

                      {/* Qualification Scores */}
                      {(lead.qualificationScore !== null || lead.engagementScore !== null || lead.lastActivityTime) && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Qualification</h3>
                          <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {lead.qualificationScore !== null && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Qualification Score</p>
                                <p className="text-sm font-medium text-gray-900">{lead.qualificationScore}/100</p>
                              </div>
                            )}
                            {lead.engagementScore !== null && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Engagement Score</p>
                                <p className="text-sm font-medium text-gray-900">{lead.engagementScore}/100</p>
                              </div>
                            )}
                            {lead.lastActivityTime && (
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Last Activity</p>
                                <p className="text-sm font-medium text-gray-900">
                                  {new Date(lead.lastActivityTime).toLocaleString()}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Sync Status */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sync Status</h3>
                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Current Status</span>
                            <div className="flex items-center gap-2">
                              {getStatusIcon(lead.syncStatus)}
                              {getStatusBadge(lead.syncStatus)}
                            </div>
                          </div>
                          {lead.zohoLeadId && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Zoho Lead ID</span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-sm font-medium text-gray-900">
                                  {lead.zohoLeadId}
                                </span>
                                <a
                                  href={getZohoCRMUrl(lead.zohoLeadId)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800"
                                  title="View in Zoho CRM"
                                >
                                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          )}
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Sync Attempts</span>
                            <span className="text-sm font-medium text-gray-900">{lead.syncAttempts}</span>
                          </div>
                          {lead.lastSyncAt && (
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Last Sync</span>
                              <span className="text-sm font-medium text-gray-900">
                                {new Date(lead.lastSyncAt).toLocaleString()}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Created</span>
                            <span className="text-sm font-medium text-gray-900">
                              {new Date(lead.createdAt).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Sync Logs */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Sync History ({lead.syncLogs.length})
                        </h3>
                        <div className="space-y-3">
                          {lead.syncLogs.length === 0 ? (
                            <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500 text-sm">
                              No sync history available
                            </div>
                          ) : (
                            lead.syncLogs.map((log) => (
                              <div key={log.id} className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-center gap-3">
                                    {getStatusIcon(log.status)}
                                    <div>
                                      <p className="text-sm font-medium text-gray-900 capitalize">
                                        {log.action.replace(/_/g, ' ')}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {new Date(log.createdAt).toLocaleString()}
                                      </p>
                                    </div>
                                  </div>
                                  {getStatusBadge(log.status)}
                                </div>
                                {log.error && (
                                  <div className="mt-2 bg-red-50 border border-red-200 rounded p-3">
                                    <p className="text-xs font-medium text-red-900 mb-1">Error:</p>
                                    <p className="text-xs text-red-800 font-mono whitespace-pre-wrap">
                                      {log.error}
                                    </p>
                                  </div>
                                )}
                                {(log.request || log.response) && (
                                  <button
                                    onClick={() => setExpandedLog(expandedLog === log.id ? null : log.id)}
                                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                                  >
                                    {expandedLog === log.id ? 'Hide' : 'Show'} Details
                                  </button>
                                )}
                                {expandedLog === log.id && (
                                  <div className="mt-3 space-y-2">
                                    {log.request && (
                                      <div>
                                        <p className="text-xs font-medium text-gray-700 mb-1">Request:</p>
                                        <pre className="text-xs bg-white p-2 rounded border border-gray-200 overflow-x-auto">
                                          {JSON.stringify(log.request, null, 2)}
                                        </pre>
                                      </div>
                                    )}
                                    {log.response && (
                                      <div>
                                        <p className="text-xs font-medium text-gray-700 mb-1">Response:</p>
                                        <pre className="text-xs bg-white p-2 rounded border border-gray-200 overflow-x-auto">
                                          {JSON.stringify(log.response, null, 2)}
                                        </pre>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      No lead details available
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
                  <button
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    {isDeleting ? (
                      <>
                        <ArrowPathIcon className="w-4 h-4 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <TrashIcon className="w-4 h-4" />
                        Delete Lead
                      </>
                    )}
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
