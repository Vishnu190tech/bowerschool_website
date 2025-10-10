'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  TrashIcon,
  CloudArrowUpIcon,
  FunnelIcon,
  ExclamationTriangleIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import LeadDetailsModal from './LeadDetailsModal';
import { isDuplicateError } from '@/lib/zoho/duplicate-utils';

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string | null;
  source: string;
  leadSource: string | null;
  zohoLeadId: string | null;
  syncStatus: string;
  syncError: string | null;
  syncAttempts: number;
  lastSyncAt: string | null;
  createdAt: string;
  updatedAt: string;
  syncLogs: any[];
}

interface LeadPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default function LeadManagement() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pagination, setPagination] = useState<LeadPagination>({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  useEffect(() => {
    fetchLeads();
  }, [pagination.page, filterStatus]);

  const fetchLeads = async () => {
    setIsLoading(true);

    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        status: filterStatus,
        search: searchTerm
      });

      const response = await fetch(`/api/admin/leads?${params}`);
      const data = await response.json();

      if (data.success) {
        setLeads(data.data.leads);
        setPagination(data.data.pagination);
      } else {
        toast.error('Failed to fetch leads');
      }
    } catch (error) {
      console.error('Fetch leads error:', error);
      toast.error('Failed to fetch leads');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPagination({ ...pagination, page: 1 });
    fetchLeads();
  };

  const handleSyncPending = async () => {
    setIsSyncing(true);

    try {
      const response = await fetch('/api/admin/leads/sync', {
        method: 'POST'
      });

      const data = await response.json();

      if (data.success) {
        toast.success(`Synced ${data.data.synced} leads, ${data.data.failed} failed`);
        fetchLeads();
      } else {
        toast.error(data.error || 'Sync failed');
      }
    } catch (error) {
      console.error('Sync error:', error);
      toast.error('Failed to sync leads');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleDeleteLead = async (leadId: string, event?: React.MouseEvent) => {
    // Prevent row click when clicking delete button
    if (event) {
      event.stopPropagation();
    }

    if (!confirm('Are you sure you want to delete this lead?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/leads?id=${leadId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Lead deleted successfully');
        fetchLeads();
      } else {
        toast.error('Failed to delete lead');
      }
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete lead');
    }
  };

  const handleRowClick = (leadId: string) => {
    setSelectedLeadId(leadId);
    setIsDetailsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedLeadId(null);
  };

  const handleLeadUpdated = () => {
    fetchLeads();
  };

  const handleLeadDeleted = () => {
    fetchLeads();
  };

  const getSyncStatusIcon = (status: string) => {
    switch (status) {
      case 'synced':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      default:
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getSyncStatusBadge = (status: string) => {
    const statusClasses = {
      synced: 'bg-green-100 text-green-800',
      failed: 'bg-red-100 text-red-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };

    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusClasses[status as keyof typeof statusClasses]}`}>
        {status}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Lead Management</h2>
            {/* <button
              onClick={handleSyncPending}
              disabled={isSyncing}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSyncing ? (
                <>
                  <ArrowPathIcon className="w-5 h-5 animate-spin" />
                  Syncing...
                </>
              ) : (
                <>
                  <CloudArrowUpIcon className="w-5 h-5" />
                  Sync Pending Leads
                </>
              )}
            </button> */}
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, email, or company..."
                  className="w-full text-black px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </form>

            <div className="flex items-center gap-2">
              <FunnelIcon className="w-5 h-5 text-gray-500" />
              <select
                value={filterStatus}
                onChange={(e) => {
                  setFilterStatus(e.target.value);
                  setPagination({ ...pagination, page: 1 });
                }}
                className="px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="synced">Synced</option>
                <option value="failed">Failed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lead Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sync Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    <ArrowPathIcon className="w-8 h-8 animate-spin mx-auto mb-2" />
                    Loading leads...
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No leads found
                  </td>
                </tr>
              ) : (
                leads.map((lead) => {
                  const hasDuplicate = isDuplicateError(lead.syncError);
                  return (
                    <tr
                      key={lead.id}
                      onClick={() => handleRowClick(lead.id)}
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {lead.firstName} {lead.lastName}
                          </div>
                          {lead.company && (
                            <div className="text-sm text-gray-500">{lead.company}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">{lead.email}</div>
                          {lead.phone && (
                            <div className="text-sm text-gray-500">{lead.phone}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">{lead.source}</div>
                          {lead.leadSource && (
                            <div className="text-sm text-gray-500">{lead.leadSource}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {getSyncStatusIcon(lead.syncStatus)}
                          {getSyncStatusBadge(lead.syncStatus)}
                        </div>
                        {hasDuplicate && (
                          <div className="flex items-center gap-1 mt-2">
                            <ExclamationTriangleIcon className="w-4 h-4 text-yellow-600" />
                            <span className="text-xs font-medium text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded">
                              Duplicate
                            </span>
                          </div>
                        )}
                        {lead.zohoLeadId && (
                          <div className="text-xs text-gray-500 mt-1">
                            Zoho ID: {lead.zohoLeadId}
                          </div>
                        )}
                        {lead.syncError && !hasDuplicate && (
                          <div className="text-xs text-red-500 mt-1" title={lead.syncError}>
                            {lead.syncError.substring(0, 50)}...
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {formatDate(lead.createdAt)}
                        </div>
                        {lead.lastSyncAt && (
                          <div className="text-xs text-gray-500">
                            Synced: {formatDate(lead.lastSyncAt)}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRowClick(lead.id);
                            }}
                            className="text-blue-600 hover:text-blue-900 transition-colors"
                            title="View Details"
                          >
                            <EyeIcon className="w-5 h-5" />
                          </button>
                          <button
                            onClick={(e) => handleDeleteLead(lead.id, e)}
                            className="text-red-600 hover:text-red-900 transition-colors"
                            title="Delete Lead"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {((pagination.page - 1) * pagination.limit) + 1} to{' '}
              {Math.min(pagination.page * pagination.limit, pagination.total)} of{' '}
              {pagination.total} results
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                disabled={pagination.page === 1}
                className="px-3 py-1 border text-black border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setPagination({ ...pagination, page })}
                  className={`px-3 py-1 border rounded-md ${pagination.page === page
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 text-black hover:bg-gray-50'
                    }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                disabled={pagination.page === pagination.totalPages}
                className="px-3 py-1 border text-black border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Lead Details Modal */}
      <LeadDetailsModal
        isOpen={isDetailsModalOpen}
        leadId={selectedLeadId}
        onClose={handleCloseModal}
        onLeadUpdated={handleLeadUpdated}
        onLeadDeleted={handleLeadDeleted}
      />
    </>
  );
}