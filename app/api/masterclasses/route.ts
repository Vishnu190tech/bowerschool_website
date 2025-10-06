import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all masterclasses
export async function GET() {
  try {
    const masterclasses = await prisma.masterclass.findMany({
      orderBy: { date: 'desc' },
    });

    return NextResponse.json(masterclasses);
  } catch (error) {
    console.error('Error fetching masterclasses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch masterclasses' },
      { status: 500 }
    );
  }
}

// POST - Create a new masterclass
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Generate slug from title if not provided
    let slug = body.slug || body.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Check if slug already exists and make it unique if needed
    let counter = 1;
    const baseSlug = slug;
    while (await prisma.masterclass.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    // Convert date string to Date object if needed
    const processedBody = {
      ...body,
      slug,
      date: new Date(body.date),
      learningOutcomes: body.learningOutcomes || [],
      galleryImages: body.galleryImages || [],
      studentPortalConfig: body.studentPortalConfig || {
        title: 'Student Portal',
        subtitle: 'Attended this session? Enter your reg code to access exclusive content',
        placeholder: 'Enter Registration Code',
        buttonText: 'Unlock Portal',
        supportText: "Haven't received your code? Contact support."
      },
      assignmentDetails: body.assignmentDetails || {
        title: 'Masterclass Project Overview',
        subtitle: 'Showcase Your Mastery and Reflect on Your Learning Journey',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
        instructions: [
          'Reflect on your leadership journey throughout this module.',
          'Think about how the concepts of vision crafting, teamwork, and strategic choices have influenced your leadership approach.',
          'Submit a 2-3 page document responding to the provided prompts.'
        ],
        fileFormats: 'PDF or Word format (.pdf / .docx)',
        maxAttempts: 1,
        resources: []
      },
      instructors: body.instructors || [],
      tags: body.tags || [],
      highlights: body.highlights || [],
      testimonials: body.testimonials || [],
      resources: body.resources || []
    };

    const masterclass = await prisma.masterclass.create({
      data: processedBody,
    });

    return NextResponse.json(masterclass);
  } catch (error) {
    console.error('Error creating masterclass:', error);
    return NextResponse.json(
      { error: 'Failed to create masterclass', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}