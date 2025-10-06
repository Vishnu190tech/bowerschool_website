import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding masterclasses...');

  const masterclasses = [
    {
      slug: 'ux-for-founders',
      title: 'UX for Founders – Live Masterclass',
      subtitle: 'Learn how to design user experiences that convert',
      description: 'Join us for an intensive masterclass where you\'ll learn the fundamental principles of UX design specifically tailored for founders and entrepreneurs. This hands-on session will cover user research, prototyping, design thinking, and how to create products that users love.',
      date: new Date('2025-07-02'),
      time: '10:00 AM - 2:00 PM IST',
      category: 'BowerClass',
      videoThumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      level: 'Beginner',
      duration: '4 hours',
      prerequisites: 'Basic understanding of digital products and business fundamentals',
      maxStudents: 50,
      registeredCount: 23,
      price: 2999,
      registrationOpen: true,
      registrationLink: 'https://example.com/register/ux-for-founders',
      registrationCode: 'BOWERUX2025',
      isPublished: true,
      isFeatured: true,
      learningOutcomes: [
        'Understanding user-centered design principles',
        'Conducting effective user research and interviews',
        'Creating user personas and journey maps',
        'Rapid prototyping techniques',
        'Design thinking methodology',
        'Building MVPs with great UX',
      ],
      galleryImages: [
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
        'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      ],
      instructors: [
        {
          name: 'Sarah Johnson',
          title: 'Head of Design, TechCorp',
          bio: '10+ years of experience in UX design',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
        },
        {
          name: 'Michael Chen',
          title: 'Founder & CEO, DesignLab',
          bio: 'Serial entrepreneur and design expert',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        },
      ],
      studentPortalConfig: {
        title: 'Student Portal',
        subtitle: 'Attended this session? Enter your reg code to access exclusive content',
        placeholder: 'Enter Registration Code',
        buttonText: 'Unlock Portal',
        supportText: "Haven't received your code? Contact support.",
      },
      assignmentDetails: {
        title: 'UX Design Project',
        subtitle: 'Apply your learnings to create a real-world UX solution',
        dueDate: new Date('2025-08-15').toISOString(),
        instructions: [
          'Choose a real-world problem to solve',
          'Conduct user research with at least 3 participants',
          'Create user personas and journey maps',
          'Design a prototype solution',
          'Document your design process and decisions',
          'Present your solution in a 5-minute video',
        ],
        fileFormats: 'PDF presentation and video file (mp4)',
        maxAttempts: 1,
      },
    },
    {
      slug: 'growth-hacking',
      title: 'Growth Hacking Strategies',
      subtitle: 'Scale your startup with proven growth tactics',
      description: 'Discover the latest growth hacking techniques used by successful startups. Learn how to acquire users, increase retention, and scale your business without breaking the bank.',
      date: new Date('2025-08-15'),
      time: '2:00 PM - 6:00 PM IST',
      category: 'BowerClass',
      videoThumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      level: 'Intermediate',
      duration: '4 hours',
      prerequisites: 'Experience running a startup or online business',
      maxStudents: 40,
      registeredCount: 15,
      price: 3499,
      registrationOpen: true,
      registrationLink: 'https://example.com/register/growth-hacking',
      registrationCode: 'BOWERGROWTH2025',
      isPublished: true,
      isFeatured: false,
      learningOutcomes: [
        'Understanding growth metrics and KPIs',
        'User acquisition strategies',
        'Retention and engagement tactics',
        'Viral marketing techniques',
        'A/B testing and optimization',
        'Building growth teams',
      ],
      galleryImages: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
      ],
      instructors: [
        {
          name: 'Alex Kumar',
          title: 'Growth Lead, Unicorn Startup',
          bio: 'Scaled 3 startups from 0 to 1M users',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        },
      ],
      studentPortalConfig: {
        title: 'Growth Hacker Portal',
        subtitle: 'Access your growth toolkit and resources',
        placeholder: 'Enter Access Code',
        buttonText: 'Access Resources',
        supportText: 'Need help? Contact our support team.',
      },
      assignmentDetails: {
        title: 'Growth Experiment',
        subtitle: 'Design and execute a growth experiment',
        dueDate: new Date('2025-09-30').toISOString(),
        instructions: [
          'Define your growth hypothesis',
          'Design an experiment to test it',
          'Set up tracking and metrics',
          'Run the experiment for 2 weeks',
          'Analyze results and draw insights',
          'Present your findings',
        ],
        fileFormats: 'PDF or PowerPoint presentation',
        maxAttempts: 1,
      },
    },
    {
      slug: 'fundraising-101',
      title: 'Fundraising 101',
      subtitle: 'Master the art of raising capital',
      description: 'Learn everything you need to know about fundraising - from preparing your pitch deck to negotiating with investors. Get insights from successful founders and VCs.',
      date: new Date('2025-09-03'),
      time: '3:00 PM - 7:00 PM IST',
      category: 'BowerClass',
      videoThumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      level: 'Intermediate',
      duration: '4 hours',
      prerequisites: 'Have a startup idea or existing business',
      maxStudents: 35,
      registeredCount: 28,
      price: 4999,
      registrationOpen: true,
      registrationLink: 'https://example.com/register/fundraising-101',
      registrationCode: 'BOWERFUND2025',
      isPublished: true,
      isFeatured: true,
      learningOutcomes: [
        'Understanding different funding stages',
        'Creating compelling pitch decks',
        'Financial modeling and projections',
        'Investor outreach strategies',
        'Negotiation tactics',
        'Due diligence preparation',
      ],
      galleryImages: [
        'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800',
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800',
      ],
      instructors: [
        {
          name: 'David Miller',
          title: 'Partner at Venture Capital Firm',
          bio: 'Invested in 50+ startups',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
        },
        {
          name: 'Emily Zhang',
          title: 'Founder, Successfully Raised $10M',
          bio: 'Serial entrepreneur',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
        },
      ],
      studentPortalConfig: {
        title: 'Investor Resources',
        subtitle: 'Access templates, guides, and investor database',
        placeholder: 'Enter Your Code',
        buttonText: 'Access Materials',
        supportText: 'Questions? Reach out to support.',
      },
      assignmentDetails: {
        title: 'Pitch Deck Creation',
        subtitle: 'Create your investor-ready pitch deck',
        dueDate: new Date('2025-10-15').toISOString(),
        instructions: [
          'Create a 10-12 slide pitch deck',
          'Include problem, solution, market size, and business model',
          'Add financial projections for 3 years',
          'Include team and traction slides',
          'Practice your pitch (5 minutes)',
          'Submit deck and pitch video',
        ],
        fileFormats: 'PDF or PPT for deck, MP4 for video',
        maxAttempts: 2,
      },
    },
  ];

  for (const masterclass of masterclasses) {
    try {
      const created = await prisma.masterclass.create({
        data: masterclass,
      });
      console.log(`Created masterclass: ${created.title}`);
    } catch (error) {
      console.error(`Error creating masterclass ${masterclass.title}:`, error);
    }
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });