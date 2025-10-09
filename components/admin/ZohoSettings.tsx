'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {
  KeyIcon,
  LinkIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

interface ConnectionStatus {
  isConnected: boolean;
  hasValidToken: boolean;
  tokenExpiresAt?: string;
  error?: string;
}

export default function ZohoSettings() {
  const router = useRouter();
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    checkConnectionStatus();
  }, []);

  const checkConnectionStatus = async () => {
    try {
      const response = await fetch('/api/admin/zoho/test');
      const data = await response.json();

      setConnectionStatus({
        isConnected: data.connected,
        hasValidToken: data.hasValidToken,
        tokenExpiresAt: data.tokenExpiresAt,
        error: data.error
      });
    } catch (error) {
      console.error('Failed to check connection status:', error);
    }
  };

  const handleConnect = async () => {
    if (!clientId || !clientSecret) {
      toast.error('Please enter both Client ID and Client Secret');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/zoho/auth/authorize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ clientId, clientSecret })
      });

      const data = await response.json();

      if (data.success && data.authUrl) {
        // Redirect to Zoho OAuth page
        window.location.href = data.authUrl;
      } else {
        toast.error(data.error || 'Failed to initialize OAuth');
      }
    } catch (error) {
      console.error('Connection error:', error);
      toast.error('Failed to connect to Zoho');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestConnection = async () => {
    setIsTesting(true);

    try {
      const response = await fetch('/api/admin/zoho/test');
      const data = await response.json();

      if (data.success) {
        toast.success('Connection test successful!');
        setConnectionStatus({
          isConnected: data.connected,
          hasValidToken: data.hasValidToken,
          tokenExpiresAt: data.tokenExpiresAt
        });
      } else {
        toast.error(data.message || 'Connection test failed');
      }
    } catch (error) {
      console.error('Test error:', error);
      toast.error('Failed to test connection');
    } finally {
      setIsTesting(false);
    }
  };

  const handleRefreshToken = async () => {
    setIsRefreshing(true);

    try {
      const response = await fetch('/api/admin/zoho/auth/refresh', {
        method: 'POST'
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Access token refreshed successfully');
        await checkConnectionStatus();
      } else {
        toast.error(data.error || 'Failed to refresh token');
      }
    } catch (error) {
      console.error('Refresh error:', error);
      toast.error('Failed to refresh token');
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleDisconnect = async () => {
    if (!confirm('Are you sure you want to disconnect Zoho CRM?')) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/admin/zoho/auth/revoke', {
        method: 'POST'
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Zoho CRM disconnected successfully');
        setConnectionStatus({
          isConnected: false,
          hasValidToken: false
        });
        setClientId('');
        setClientSecret('');
      } else {
        toast.error(data.error || 'Failed to disconnect');
      }
    } catch (error) {
      console.error('Disconnect error:', error);
      toast.error('Failed to disconnect');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Zoho CRM Settings</h2>
        <p className="text-sm text-gray-600">
          Configure your Zoho CRM integration to automatically sync leads from your website.
        </p>
      </div>

      {/* Connection Status */}
      <div className="mb-6 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-700">Connection Status</h3>
          <button
            onClick={handleTestConnection}
            disabled={isTesting}
            className="text-sm text-blue-600 hover:text-blue-500 flex items-center gap-1"
          >
            <ArrowPathIcon className={`w-4 h-4 ${isTesting ? 'animate-spin' : ''}`} />
            Test Connection
          </button>
        </div>

        {connectionStatus && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {connectionStatus.isConnected ? (
                <>
                  <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-700">Connected to Zoho CRM</span>
                </>
              ) : (
                <>
                  <XCircleIcon className="w-5 h-5 text-red-500" />
                  <span className="text-sm text-red-700">Not Connected</span>
                </>
              )}
            </div>

            {connectionStatus.isConnected && (
              <>
                <div className="flex items-center gap-2">
                  {connectionStatus.hasValidToken ? (
                    <>
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-green-700">Valid Access Token</span>
                    </>
                  ) : (
                    <>
                      <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm text-yellow-700">Token Expired</span>
                    </>
                  )}
                </div>

                {connectionStatus.tokenExpiresAt && (
                  <div className="text-sm text-gray-600">
                    Token expires: {formatDate(connectionStatus.tokenExpiresAt)}
                  </div>
                )}
              </>
            )}

            {connectionStatus.error && (
              <div className="text-sm text-red-600 mt-2">
                Error: {connectionStatus.error}
              </div>
            )}
          </div>
        )}
      </div>

      {/* OAuth Setup */}
      {!connectionStatus?.isConnected && (
        <div className="space-y-4">
          <div>
            <label htmlFor="clientId" className="block text-sm font-medium text-gray-700 mb-1">
              Client ID
            </label>
            <div className="relative">
              <input
                id="clientId"
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                placeholder="Enter your Zoho Client ID"
                className="w-full px-4 py-2 pl-10 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <KeyIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label htmlFor="clientSecret" className="block text-sm font-medium text-gray-700 mb-1">
              Client Secret
            </label>
            <div className="relative">
              <input
                id="clientSecret"
                type="password"
                value={clientSecret}
                onChange={(e) => setClientSecret(e.target.value)}
                placeholder="Enter your Zoho Client Secret"
                className="w-full px-4 py-2 pl-10 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <KeyIcon className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <InformationCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">How to get your Zoho credentials:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Go to <a href="https://api-console.zoho.com" target="_blank" rel="noopener noreferrer" className="underline">Zoho API Console</a></li>
                  <li>Create a new Client or use existing one</li>
                  <li>Set redirect URL to: <code className="bg-blue-100 px-1 rounded">{process.env.NEXT_PUBLIC_APP_URL}/api/admin/zoho/auth/callback</code></li>
                  <li>Copy your Client ID and Client Secret</li>
                </ol>
              </div>
            </div>
          </div>

          <button
            onClick={handleConnect}
            disabled={isLoading || !clientId || !clientSecret}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <ArrowPathIcon className="w-5 h-5 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <LinkIcon className="w-5 h-5" />
                Connect to Zoho CRM
              </>
            )}
          </button>
        </div>
      )}

      {/* Connected Actions */}
      {connectionStatus?.isConnected && (
        <div className="space-y-4">
          <div className="flex gap-3">
            {!connectionStatus.hasValidToken && (
              <button
                onClick={handleRefreshToken}
                disabled={isRefreshing}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isRefreshing ? (
                  <>
                    <ArrowPathIcon className="w-5 h-5 animate-spin" />
                    Refreshing...
                  </>
                ) : (
                  <>
                    <ArrowPathIcon className="w-5 h-5" />
                    Refresh Token
                  </>
                )}
              </button>
            )}

            <button
              onClick={handleDisconnect}
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Disconnect
            </button>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-600" />
              <p className="text-sm text-green-800">
                Your Zoho CRM is connected and ready to receive leads.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}