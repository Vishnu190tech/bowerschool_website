import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get all published events, including past ones for testing
    // In production, you may want to filter by date
    const events = await prisma.upcomingEvent.findMany({
      where: {
        isPublished: true,
        // Temporarily removed date filter to show all events
        // Uncomment the following lines to show only future events:
        // date: {
        //   gte: new Date()
        // }
      },
      orderBy: {
        date: 'desc' // Show most recent first
      },
      take: 9 // Increased limit for better grid display
    });

    return NextResponse.json({
      success: true,
      events
    });
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch upcoming events' },
      { status: 500 }
    );
  }
}