import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth } from '@/lib/adminAuth';
import { prisma } from '@/lib/prisma';

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// GET - Fetch all past events for admin
export async function GET(request: NextRequest) {
  try {
    // Check admin authentication
    const admin = await getAdminAuth(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search');
    const category = searchParams.get('category');

    // Build where clause
    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (category && category !== 'all') {
      where.category = category;
    }

    const events = await prisma.pastEvent.findMany({
      orderBy: { date: 'desc' },
      where,
    });

    return NextResponse.json({
      success: true,
      events,
    });
  } catch (error) {
    console.error('Error fetching past events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch past events' },
      { status: 500 }
    );
  }
}

// POST - Create new past event
export async function POST(request: NextRequest) {
  try {
    // Check admin authentication
    const admin = await getAdminAuth(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    // Generate slug if not provided
    const slug = body.slug || generateSlug(body.title);

    // Create the past event
    const event = await prisma.pastEvent.create({
      data: {
        slug,
        title: body.title,
        subtitle: body.subtitle,
        description: body.description,
        eventType: body.eventType,
        date: new Date(body.date),
        time: body.time,
        location: body.location,
        venue: body.venue,
        category: body.category,
        tags: body.tags || [],
        imageUrl: body.imageUrl,
        thumbnailUrl: body.thumbnailUrl,
        videoUrl: body.videoUrl,
        galleryImages: body.galleryImages || [],
        speakers: body.speakers || [],
        agenda: body.agenda || {},
        testimonials: body.testimonials || [],
        stats: body.stats || {},
        resources: body.resources || [],
        attendeeCount: body.attendeeCount,
        duration: body.duration,
        isPublished: body.isPublished || false,
        isFeatured: body.isFeatured || false,
        size: body.size || 'small',
        metaTitle: body.metaTitle,
        metaDescription: body.metaDescription,
      },
    });

    return NextResponse.json({
      success: true,
      event,
    });
  } catch (error: any) {
    console.error('Error creating past event:', error);

    // Handle unique constraint violation
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'An event with this slug already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create past event' },
      { status: 500 }
    );
  }
}

// PUT - Update past event
export async function PUT(request: NextRequest) {
  try {
    // Check admin authentication
    const admin = await getAdminAuth(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Event ID is required' },
        { status: 400 }
      );
    }

    // Format date if provided
    if (updateData.date) {
      updateData.date = new Date(updateData.date);
    }

    const event = await prisma.pastEvent.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      event,
    });
  } catch (error: any) {
    console.error('Error updating past event:', error);

    // Handle not found
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to update past event' },
      { status: 500 }
    );
  }
}

// DELETE - Delete past event
export async function DELETE(request: NextRequest) {
  try {
    // Check admin authentication
    const admin = await getAdminAuth(request);
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Event ID is required' },
        { status: 400 }
      );
    }

    await prisma.pastEvent.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: 'Event deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting past event:', error);

    // Handle not found
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to delete past event' },
      { status: 500 }
    );
  }
}