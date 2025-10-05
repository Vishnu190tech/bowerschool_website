import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { error: 'Event slug is required' },
        { status: 400 }
      );
    }

    // Fetch the past event and increment view count
    const event = await prisma.pastEvent.update({
      where: { slug },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    // Parse JSON fields for easier consumption
    const formattedEvent = {
      ...event,
      speakers: event.speakers ? event.speakers : [],
      agenda: event.agenda ? event.agenda : {},
      testimonials: event.testimonials ? event.testimonials : [],
      stats: event.stats ? event.stats : {},
      resources: event.resources ? event.resources : [],
      galleryImages: event.galleryImages ? event.galleryImages : [],
    };

    return NextResponse.json({
      success: true,
      event: formattedEvent,
    });
  } catch (error: any) {
    // Handle case where event doesn't exist
    if (error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }

    console.error('Error fetching past event:', error);
    return NextResponse.json(
      { error: 'Failed to fetch past event' },
      { status: 500 }
    );
  }
}

// Update past event by ID (sent in body)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const body = await request.json();
    const { slug: idFromParams } = await params;

    // Generate base slug from title
    let baseSlug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    // Check if updating would create a slug conflict
    let slug = baseSlug;
    const existingEvent = await prisma.pastEvent.findUnique({ where: { slug } });

    // If slug exists and it's not the current event being updated, append number
    if (existingEvent && existingEvent.id !== idFromParams) {
      let counter = 1;
      do {
        slug = `${baseSlug}-${counter}`;
        counter++;
        const checkEvent = await prisma.pastEvent.findUnique({ where: { slug } });
        if (!checkEvent || checkEvent.id === idFromParams) break;
      } while (true);
    }

    // Convert date string to DateTime
    const eventDate = body.date ? new Date(body.date) : undefined;

    const event = await prisma.pastEvent.update({
      where: { id: idFromParams }, // Use ID from params for update
      data: {
        title: body.title,
        subtitle: body.subtitle,
        description: body.description,
        eventType: body.eventType,
        date: eventDate,
        time: body.time,
        location: body.location,
        venue: body.venue,
        category: body.category,
        tags: body.tags || [],
        imageUrl: body.imageUrl,
        thumbnailUrl: body.thumbnailUrl,
        videoUrl: body.videoUrl,
        size: body.size || 'medium',
        isPublished: body.isPublished ?? true,
        isFeatured: body.isFeatured ?? false,
        attendeeCount: body.attendeeCount,
        duration: body.duration,
        galleryImages: body.galleryImages || [],
        speakers: body.speakers || [],
        testimonials: body.testimonials || [],
        stats: body.stats || {},
        resources: body.resources || [],
        agenda: body.agenda || {},
        metaTitle: body.metaTitle,
        metaDescription: body.metaDescription,
        slug,
      },
    });

    return NextResponse.json({ event });
  } catch (error) {
    console.error('Error updating past event:', error);
    return NextResponse.json(
      { error: 'Failed to update past event' },
      { status: 500 }
    );
  }
}

// Delete past event by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug: id } = await params;

    await prisma.pastEvent.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting past event:', error);
    return NextResponse.json(
      { error: 'Failed to delete past event' },
      { status: 500 }
    );
  }
}