import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production'
);

export async function getAdminAuth(request: NextRequest) {
  try {
    // Get token from cookie
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return null;
    }

    // Verify token
    const { payload } = await jwtVerify(token, secret);

    // Check if user is admin
    if (payload.role !== 'admin') {
      return null;
    }

    return payload;
  } catch (error) {
    return null;
  }
}
