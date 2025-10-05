import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');
    const page = searchParams.get('page');

    // Build where clause
    const where: any = {};

    if (category && category !== 'all') {
      where.category = category;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { category: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Pagination
    const take = limit ? parseInt(limit) : 10;
    const skip = page ? (parseInt(page) - 1) * take : 0;

    // Fetch past events
    const [events, total] = await Promise.all([
      prisma.pastEvent.findMany({
        where,
        orderBy: {
          date: 'desc', // Most recent first
        },
        take,
        skip,
        select: {
          id: true,
          slug: true,
          title: true,
          subtitle: true,
          description: true,
          eventType: true,
          date: true,
          time: true,
          location: true,
          venue: true,
          category: true,
          tags: true,
          imageUrl: true,
          thumbnailUrl: true,
          videoUrl: true,
          viewCount: true,
          size: true,
          isFeatured: true,
          createdAt: true,
          updatedAt: true,
        },
      }),
      prisma.pastEvent.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      events,
      pagination: {
        total,
        page: page ? parseInt(page) : 1,
        limit: take,
        totalPages: Math.ceil(total / take),
      },
    });
  } catch (error) {
    console.error('Error fetching past events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch past events' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Generate base slug from title
    let baseSlug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    // Check if slug exists and append number if needed
    let slug = baseSlug;
    let counter = 1;
    while (await prisma.pastEvent.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    // Convert date string to DateTime
    const eventDate = body.date ? new Date(body.date) : new Date();

    const event = await prisma.pastEvent.create({
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

    return NextResponse.json({ success: true, event });
  } catch (error) {
    console.error('Error creating past event:', error);
    return NextResponse.json(
      { error: 'Failed to create past event' },
      { status: 500 }
    );
  }
}