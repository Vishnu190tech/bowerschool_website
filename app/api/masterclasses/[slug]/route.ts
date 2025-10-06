import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch a single masterclass by slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const masterclass = await prisma.masterclass.findUnique({
      where: { slug },
    });

    if (!masterclass) {
      return NextResponse.json(
        { error: 'Masterclass not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(masterclass);
  } catch (error) {
    console.error('Error fetching masterclass:', error);
    return NextResponse.json(
      { error: 'Failed to fetch masterclass' },
      { status: 500 }
    );
  }
}

// PUT - Update a masterclass
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();

    // Process the date if it's a string
    const processedBody = {
      ...body,
      date: body.date ? new Date(body.date) : undefined,
    };

    const masterclass = await prisma.masterclass.update({
      where: { slug },
      data: processedBody,
    });

    return NextResponse.json(masterclass);
  } catch (error) {
    console.error('Error updating masterclass:', error);
    return NextResponse.json(
      { error: 'Failed to update masterclass', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a masterclass
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    await prisma.masterclass.delete({
      where: { slug },
    });

    return NextResponse.json({ message: 'Masterclass deleted successfully' });
  } catch (error) {
    console.error('Error deleting masterclass:', error);
    return NextResponse.json(
      { error: 'Failed to delete masterclass' },
      { status: 500 }
    );
  }
}