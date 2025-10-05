import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

// GET - List all events (admin view)
export async function GET(request: Request) {
  try {
    // Check if user is admin
    const session = await getSession();
    if (!session || session.type !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const category = searchParams.get('category');

    // Build query
    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (category) {
      where.category = category;
    }

    const events = await prisma.upcomingEvent.findMany({
      where,
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({
      success: true,
      events
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

// POST - Create new event
export async function POST(request: Request) {
  try {
    // Check if user is admin
    const session = await getSession();
    if (!session || session.type !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Generate slug from title if not provided
    const slug = body.slug || body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    // Ensure unique slug
    const existingEvent = await prisma.upcomingEvent.findUnique({
      where: { slug }
    });

    const finalSlug = existingEvent ? `${slug}-${Date.now()}` : slug;

    const event = await prisma.upcomingEvent.create({
      data: {
        ...body,
        slug: finalSlug,
        date: new Date(body.date),
        tags: body.tags || [],
        agenda: body.agenda || null,
        speakers: body.speakers || null,
        sponsors: body.sponsors || null
      }
    });

    return NextResponse.json({
      success: true,
      event
    });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Failed to create event' },
      { status: 500 }
    );
  }
}