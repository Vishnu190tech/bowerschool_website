'use client';

import { useState, useEffect } from 'react';
import LeadCaptureForm from '@/components/forms/LeadCaptureForm';
import { Toaster } from 'react-hot-toast';
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  CloudIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface ConnectionStatus {
  connected: boolean;
  hasValidToken: boolean;
  tokenExpiresAt?: string;
  message?: string;
  error?: string;
  details?: any;
}

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  syncStatus: string;
  zohoLeadId?: string;
  createdAt: string;
}

export default function LeadCaptureTestPage() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus | null>(null);
  const [isCheckingConnection, setIsCheckingConnection] = useState(false);
  const [submittedLeads, setSubmittedLeads] = useState<Lead[]>([]);
  const [showDebugMode, setShowDebugMode] = useState(true);
  const [lastSubmission, setLastSubmission] = useState<any>(null);

  useEffect(() => {
    checkConnection();
    fetchRecentLeads();
  }, []);

  const checkConnection = async () => {
    setIsCheckingConnection(true);
    try {
      const response = await fetch('/api/admin/zoho/test');
      const data = await response.json();
      setConnectionStatus(data);
    } catch (error) {
      console.error('Failed to check connection:', error);
      setConnectionStatus({
        connected: false,
        hasValidToken: false,
        error: 'Failed to check connection'
      });
    } finally {
      setIsCheckingConnection(false);
    }
  };

  const fetchRecentLeads = async () => {
    try {
      const response = await fetch('/api/admin/leads?limit=5&page=1');
      const data = await response.json();

      if (data.success && data.data?.leads) {
        setSubmittedLeads(data.data.leads);
      }
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    }
  };

  const handleFormSuccess = (data: any) => {
    setLastSubmission(data);
    fetchRecentLeads(); // Refresh the leads list
  };

  const getSyncStatusBadge = (status: string) => {
    const statusConfig = {
      synced: { color: 'bg-green-100 text-green-800', icon: CheckCircleIcon },
      failed: { color: 'bg-red-100 text-red-800', icon: XCircleIcon },
      pending: { color: 'bg-yellow-100 text-yellow-800', icon: ExclamationTriangleIcon }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${config.color}`}>
        <Icon className="w-3 h-3" />
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lead Capture Test Page
          </h1>
          <p className="text-lg text-gray-600">
            Test your Zoho CRM integration and lead capture functionality
          </p>
        </div>

        {/* Connection Status Card */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <CloudIcon className="w-5 h-5" />
              Zoho CRM Connection Status
            </h2>
            <button
              onClick={checkConnection}
              disabled={isCheckingConnection}
              className="text-sm text-blue-600 hover:text-blue-500 flex items-center gap-1"
            >
              <ArrowPathIcon className={`w-4 h-4 ${isCheckingConnection ? 'animate-spin' : ''}`} />
              Check Connection
            </button>
          </div>

          {connectionStatus && (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {connectionStatus.connected ? (
                  <>
                    <CheckCircleIcon className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="font-medium text-green-700">Zoho CRM Connected</p>
                      {connectionStatus.hasValidToken ? (
                        <p className="text-sm text-green-600">Access token is valid</p>
                      ) : (
                        <p className="text-sm text-yellow-600">Access token needs refresh</p>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <XCircleIcon className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="font-medium text-red-700">Zoho CRM Not Connected</p>
                      <p className="text-sm text-red-600">{connectionStatus.error || 'Please configure Zoho CRM in admin panel'}</p>
                    </div>
                  </>
                )}
              </div>

              {connectionStatus.tokenExpiresAt && (
                <p className="text-sm text-gray-600">
                  Token expires: {new Date(connectionStatus.tokenExpiresAt).toLocaleString()}
                </p>
              )}

              {connectionStatus.details?.modules && (
                <div className="mt-3 p-3 bg-gray-50 rounded">
                  <p className="text-sm font-medium text-gray-700">Available Modules:</p>
                  <p className="text-sm text-gray-600">{connectionStatus.details.modules.join(', ')}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lead Capture Form */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Lead Capture Form
            </h2>

            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <InformationCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p>This form will:</p>
                  <ul className="list-disc list-inside mt-1">
                    <li>Save lead data to local database</li>
                    <li>Attempt to sync with Zoho CRM if connected</li>
                    <li>Show debug information when enabled</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={showDebugMode}
                  onChange={(e) => setShowDebugMode(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Show debug information</span>
              </label>
            </div>

            <LeadCaptureForm
              source="Test Page"
              leadSource="lead-capture-test"
              onSuccess={handleFormSuccess}
              showDebug={showDebugMode}
            />
          </div>

          {/* Recent Submissions */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Recent Lead Submissions
            </h2>

            {/* Last Submission Result */}
            {lastSubmission && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-medium text-green-900 mb-2">Last Submission Result:</h3>
                <pre className="text-xs text-green-800 overflow-x-auto">
                  {JSON.stringify(lastSubmission, null, 2)}
                </pre>
              </div>
            )}

            {/* Leads Table */}
            <div className="space-y-3">
              {submittedLeads.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No leads submitted yet</p>
              ) : (
                submittedLeads.map((lead) => (
                  <div key={lead.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-900">
                          {lead.firstName} {lead.lastName}
                        </p>
                        <p className="text-sm text-gray-600">{lead.email}</p>
                        {lead.company && (
                          <p className="text-sm text-gray-500">{lead.company}</p>
                        )}
                      </div>
                      {getSyncStatusBadge(lead.syncStatus)}
                    </div>

                    {lead.zohoLeadId && (
                      <p className="text-xs text-gray-500 mt-2">
                        Zoho ID: {lead.zohoLeadId}
                      </p>
                    )}

                    <p className="text-xs text-gray-400 mt-1">
                      Submitted: {new Date(lead.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Testing Instructions
          </h2>

          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">1. Setup Zoho Integration</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Go to Admin Dashboard → Zoho CRM</li>
                <li>Enter your Client ID and Client Secret</li>
                <li>Complete OAuth authorization</li>
                <li>Verify connection status shows "Connected"</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">2. Test Lead Submission</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Fill out the lead capture form</li>
                <li>Enable debug mode to see API responses</li>
                <li>Submit the form</li>
                <li>Check if lead appears in recent submissions</li>
                <li>Verify sync status (synced/pending/failed)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">3. Verify in Zoho CRM</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Log into your Zoho CRM account</li>
                <li>Navigate to the Leads module</li>
                <li>Search for the submitted lead by email</li>
                <li>Verify all data was transferred correctly</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-2">4. Test Sync Recovery</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Disconnect Zoho CRM</li>
                <li>Submit a new lead (should be marked as pending)</li>
                <li>Reconnect Zoho CRM</li>
                <li>Go to Admin Dashboard → Leads</li>
                <li>Click "Sync Pending Leads"</li>
                <li>Verify pending leads are synced</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}