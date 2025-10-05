import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

// POST - Toggle publish status
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    if (!session || session.type !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get current event
    const currentEvent = await prisma.upcomingEvent.findUnique({
      where: { id: params.id }
    });

    if (!currentEvent) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    // Toggle publish status
    const event = await prisma.upcomingEvent.update({
      where: { id: params.id },
      data: {
        isPublished: !currentEvent.isPublished
      }
    });

    return NextResponse.json({
      success: true,
      event,
      message: event.isPublished ? 'Event published' : 'Event unpublished'
    });
  } catch (error) {
    console.error('Error toggling publish status:', error);
    return NextResponse.json(
      { error: 'Failed to toggle publish status' },
      { status: 500 }
    );
  }
}