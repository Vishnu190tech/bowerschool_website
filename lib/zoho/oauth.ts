import axios from 'axios';
import { encrypt, decrypt } from '@/lib/encryption';
import { prisma } from '@/lib/prisma';
import {
  ZohoOAuthTokenResponse,
  ZohoCredentialData,
  StoredZohoCredential,
  OAuthState,
  ZOHO_SCOPES
} from './types';

/**
 * Generate a random state parameter for OAuth security
 */
export function generateOAuthState(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let state = '';

  for (let i = 0; i < 32; i++) {
    state += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return state;
}

/**
 * Generate the Zoho OAuth authorization URL
 */
export function getAuthorizationUrl(state: string): string {
  const params = new URLSearchParams({
    scope: ZOHO_SCOPES.join(','),
    client_id: process.env.ZOHO_CLIENT_ID!,
    response_type: 'code',
    access_type: 'offline',
    redirect_uri: process.env.ZOHO_REDIRECT_URI!,
    state: state,
    prompt: 'consent'
  });

  return `${process.env.ZOHO_ACCOUNTS_URL}/oauth/v2/auth?${params.toString()}`;
}

/**
 * Exchange authorization code for access and refresh tokens
 */
export async function exchangeCodeForTokens(code: string): Promise<ZohoOAuthTokenResponse> {
  try {
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      redirect_uri: process.env.ZOHO_REDIRECT_URI!,
      code: code
    });

    const response = await axios.post(
      `${process.env.ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    return response.data as ZohoOAuthTokenResponse;
  } catch (error) {
    console.error('Token exchange error:', error);
    throw new Error('Failed to exchange authorization code for tokens');
  }
}

/**
 * Refresh the access token using the refresh token
 */
export async function refreshAccessToken(refreshToken: string): Promise<ZohoOAuthTokenResponse> {
  try {
    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      refresh_token: refreshToken
    });

    const response = await axios.post(
      `${process.env.ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    if (response.data.error) {
      throw new Error(response.data.error);
    }

    return response.data as ZohoOAuthTokenResponse;
  } catch (error) {
    console.error('Token refresh error:', error);
    throw new Error('Failed to refresh access token');
  }
}

/**
 * Revoke the refresh token
 */
export async function revokeToken(refreshToken: string): Promise<boolean> {
  try {
    const params = new URLSearchParams({
      token: refreshToken
    });

    await axios.post(
      `${process.env.ZOHO_ACCOUNTS_URL}/oauth/v2/token/revoke`,
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return true;
  } catch (error) {
    console.error('Token revoke error:', error);
    return false;
  }
}

/**
 * Store or update Zoho credentials in the database
 */
export async function storeZohoCredentials(
  tokens: ZohoOAuthTokenResponse,
  clientId: string,
  clientSecret: string
): Promise<StoredZohoCredential> {
  try {
    // Calculate token expiry time
    const tokenExpiresAt = new Date(Date.now() + tokens.expires_in * 1000);

    // Check if credentials already exist
    const existingCredential = await prisma.zohoCredential.findFirst();

    if (existingCredential) {
      // Update existing credentials
      const updated = await prisma.zohoCredential.update({
        where: { id: existingCredential.id },
        data: {
          clientId: encrypt(clientId),
          clientSecret: encrypt(clientSecret),
          accessToken: encrypt(tokens.access_token),
          refreshToken: tokens.refresh_token ? encrypt(tokens.refresh_token) : existingCredential.refreshToken,
          tokenExpiresAt,
          apiDomain: tokens.api_domain,
          isActive: true,
          updatedAt: new Date()
        }
      });

      return {
        ...updated,
        clientId: decrypt(updated.clientId),
        clientSecret: decrypt(updated.clientSecret),
        accessToken: updated.accessToken ? decrypt(updated.accessToken) : null,
        refreshToken: updated.refreshToken ? decrypt(updated.refreshToken) : null
      } as StoredZohoCredential;
    } else {
      // Create new credentials
      const created = await prisma.zohoCredential.create({
        data: {
          clientId: encrypt(clientId),
          clientSecret: encrypt(clientSecret),
          accessToken: encrypt(tokens.access_token),
          refreshToken: tokens.refresh_token ? encrypt(tokens.refresh_token) : null,
          tokenExpiresAt,
          redirectUri: process.env.ZOHO_REDIRECT_URI!,
          scope: ZOHO_SCOPES as string[],
          accountsUrl: process.env.ZOHO_ACCOUNTS_URL!,
          apiDomain: tokens.api_domain,
          isActive: true
        }
      });

      return {
        ...created,
        clientId: decrypt(created.clientId),
        clientSecret: decrypt(created.clientSecret),
        accessToken: created.accessToken ? decrypt(created.accessToken) : null,
        refreshToken: created.refreshToken ? decrypt(created.refreshToken) : null
      } as StoredZohoCredential;
    }
  } catch (error) {
    console.error('Store credentials error:', error);
    throw new Error('Failed to store Zoho credentials');
  }
}

/**
 * Get stored Zoho credentials from the database
 */
export async function getZohoCredentials(): Promise<StoredZohoCredential | null> {
  try {
    const credential = await prisma.zohoCredential.findFirst({
      where: { isActive: true }
    });

    if (!credential) {
      return null;
    }

    return {
      ...credential,
      clientId: decrypt(credential.clientId),
      clientSecret: decrypt(credential.clientSecret),
      accessToken: credential.accessToken ? decrypt(credential.accessToken) : null,
      refreshToken: credential.refreshToken ? decrypt(credential.refreshToken) : null
    } as StoredZohoCredential;
  } catch (error) {
    console.error('Get credentials error:', error);
    return null;
  }
}

/**
 * Get a valid access token, refreshing if necessary
 */
export async function getValidAccessToken(): Promise<string | null> {
  try {
    const credentials = await getZohoCredentials();

    if (!credentials || !credentials.accessToken) {
      console.error('No credentials found');
      return null;
    }

    // Check if token is expired or about to expire (5 minutes buffer)
    const now = new Date();
    const expiryBuffer = new Date(now.getTime() + 5 * 60 * 1000);

    if (credentials.tokenExpiresAt && credentials.tokenExpiresAt > expiryBuffer) {
      // Token is still valid
      return credentials.accessToken;
    }

    // Token needs refresh
    if (!credentials.refreshToken) {
      console.error('No refresh token available');
      return null;
    }

    // Refresh the token
    const newTokens = await refreshAccessToken(credentials.refreshToken);

    // Update stored credentials with new access token
    await storeZohoCredentials(
      newTokens,
      credentials.clientId,
      credentials.clientSecret
    );

    return newTokens.access_token;
  } catch (error) {
    console.error('Get valid token error:', error);
    return null;
  }
}

/**
 * Check if Zoho integration is properly configured and connected
 */
export async function checkZohoConnection(): Promise<{
  isConnected: boolean;
  hasValidToken: boolean;
  tokenExpiresAt?: Date;
  error?: string;
}> {
  try {
    const credentials = await getZohoCredentials();

    if (!credentials) {
      return {
        isConnected: false,
        hasValidToken: false,
        error: 'No credentials found'
      };
    }

    const now = new Date();
    const hasValidToken = !!(
      credentials.accessToken &&
      credentials.tokenExpiresAt &&
      credentials.tokenExpiresAt > now
    );

    return {
      isConnected: true,
      hasValidToken,
      tokenExpiresAt: credentials.tokenExpiresAt || undefined
    };
  } catch (error) {
    console.error('Check connection error:', error);
    return {
      isConnected: false,
      hasValidToken: false,
      error: 'Failed to check connection'
    };
  }
}

/**
 * Clear all Zoho credentials from the database
 */
export async function clearZohoCredentials(): Promise<boolean> {
  try {
    const credentials = await getZohoCredentials();

    if (credentials && credentials.refreshToken) {
      // Revoke the token with Zoho
      await revokeToken(credentials.refreshToken);
    }

    // Delete from database
    await prisma.zohoCredential.deleteMany({});

    return true;
  } catch (error) {
    console.error('Clear credentials error:', error);
    return false;
  }
}