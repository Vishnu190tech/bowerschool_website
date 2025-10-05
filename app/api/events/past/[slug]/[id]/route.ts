import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Update past event
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { id } = params;

    // Generate slug from title if not provided
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const event = await prisma.pastEvent.update({
      where: { id },
      data: {
        ...body,
        slug,
        galleryImages: body.galleryImages || [],
        speakers: body.speakers || [],
        testimonials: body.testimonials || [],
        stats: body.stats || {},
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

// Delete past event
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

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