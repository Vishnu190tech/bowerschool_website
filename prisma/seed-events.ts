import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedEvents() {
  // Clear existing events
  await prisma.upcomingEvent.deleteMany();

  // Event data based on existing components
  const events = [
    {
      slug: 'innovations-and-tech-meetup',
      title: 'Innovations and Tech Meetup',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.',
      eventType: 'Events Type',
      date: new Date('2025-12-15'),
      time: '6:00 PM',
      location: 'Innovation Hub',
      venue: 'Tech Center, San Francisco',
      category: 'Meetups',
      tags: ['LPSA98', 'BXU', '8 Sept'],
      imageUrl: '/vr-event.jpg',
      thumbnailUrl: '/vr-event.jpg',
      height: 'tall',
      isPublished: true,
      isFeatured: true,
      capacity: 150,
      registeredCount: 45,
      price: 0,
      agenda: {
        schedule: [
          { time: '6:00 PM', activity: 'Registration & Networking' },
          { time: '6:30 PM', activity: 'Opening Keynote' },
          { time: '7:30 PM', activity: 'Panel Discussion' },
          { time: '8:30 PM', activity: 'Networking & Closing' }
        ]
      },
      speakers: [
        {
          id: '1',
          name: 'John Doe',
          title: 'CEO, TechCorp',
          bio: 'Leading innovator in AI and machine learning with 15+ years of experience.',
          imageUrl: '/events/speakers/speaker1.jpg',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        {
          id: '2',
          name: 'Jane Smith',
          title: 'CTO, InnovateLabs',
          bio: 'Expert in cloud infrastructure and distributed systems.',
          imageUrl: '/events/speakers/speaker2.jpg',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }
      ]
    },
    {
      slug: 'social-entrepreneurship-summit-webinar',
      title: 'Social Entrepreneurship Summit',
      description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
      eventType: 'Event Type',
      date: new Date('2025-12-20'),
      time: '8:00 PM',
      location: 'Online',
      venue: 'Zoom Webinar',
      category: 'Webinars',
      tags: ['SEI2023', 'ImpactHub', '8:00pm'],
      imageUrl: '/drone-event.jpg',
      thumbnailUrl: '/drone-event.jpg',
      height: 'medium',
      isPublished: true,
      isFeatured: false,
      capacity: 500,
      registeredCount: 123,
      price: 0
    },
    {
      slug: 'social-entrepreneurship-workshop',
      title: 'Social Entrepreneurship Summit',
      description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
      eventType: 'Event Type',
      date: new Date('2025-12-25'),
      time: '2:00 PM',
      location: 'Workshop Hall',
      venue: 'Community Center',
      category: 'Workshops',
      tags: ['SEI2023', 'ImpactHub', '8:00pm'],
      imageUrl: '/robot-event.jpg',
      thumbnailUrl: '/robot-event.jpg',
      height: 'short',
      isPublished: true,
      isFeatured: false,
      capacity: 30,
      registeredCount: 25,
      price: 50
    },
    {
      slug: 'gaming-tech-meetup',
      title: 'Social Entrepreneurship Summit',
      description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
      eventType: 'Event Type',
      date: new Date('2026-01-05'),
      time: '5:00 PM',
      location: 'Gaming Arena',
      venue: 'Tech Hub',
      category: 'Meetups',
      tags: ['SEI2023', 'ImpactHub', '8:00pm'],
      imageUrl: '/gaming-event.jpg',
      thumbnailUrl: '/gaming-event.jpg',
      height: 'medium',
      isPublished: true,
      isFeatured: false,
      capacity: 80,
      registeredCount: 60,
      price: 25
    },
    {
      slug: 'digital-transformation-webinar',
      title: 'Social Entrepreneurship Summit',
      description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
      eventType: 'Event Type',
      date: new Date('2025-12-15'),
      time: '7:00 PM',
      location: 'Online',
      venue: 'Virtual Platform',
      category: 'Webinars',
      tags: ['SEI2023', 'ImpactHub', '8:00pm'],
      imageUrl: '/laptop-event.jpg',
      thumbnailUrl: '/laptop-event.jpg',
      height: 'tall',
      isPublished: true,
      isFeatured: true,
      capacity: 1000,
      registeredCount: 342,
      price: 0
    },
    {
      slug: 'smarttech-workshop',
      title: 'Social Entrepreneurship Summit',
      description: 'Discuss the intersection of business and social impact at this summit. Learn from leaders in the field.',
      eventType: 'Event Type',
      date: new Date('2026-01-10'),
      time: '3:00 PM',
      location: 'Innovation Lab',
      venue: 'Tech Campus',
      category: 'Workshops',
      tags: ['SEI2023', 'ImpactHub', '8:00pm'],
      imageUrl: '/smartwatch-event.jpg',
      thumbnailUrl: '/smartwatch-event.jpg',
      height: 'medium',
      isPublished: true,
      isFeatured: false,
      capacity: 40,
      registeredCount: 35,
      price: 75
    }
  ];

  // Insert all events
  for (const event of events) {
    await prisma.upcomingEvent.create({
      data: event
    });
  }

  console.log(`✅ Seeded ${events.length} events successfully`);
}

seedEvents()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });