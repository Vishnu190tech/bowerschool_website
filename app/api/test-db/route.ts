import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    // Test database connection
    const adminCount = await prisma.admin.count();
    const admins = await prisma.admin.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        isActive: true,
      }
    });

    // Test password for the first admin
    let passwordTest = null;
    if (admins.length > 0) {
      const admin = await prisma.admin.findUnique({
        where: { email: 'admin@bowerschool.com' }
      });

      if (admin) {
        const isValid = await bcrypt.compare('admin123', admin.password);
        passwordTest = {
          email: admin.email,
          passwordValid: isValid
        };
      }
    }

    return NextResponse.json({
      success: true,
      adminCount,
      admins,
      passwordTest,
      databaseUrl: process.env.DATABASE_URL ? 'Set' : 'Not set',
    });
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}