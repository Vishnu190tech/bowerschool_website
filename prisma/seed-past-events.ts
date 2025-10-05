import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedPastEvents() {
  console.log('Seeding past events...');

  const pastEvents = [
    {
      slug: 'lights-camera-startup',
      title: 'Lights. Camera. Startup: Fireside Chat b/w Tharun Bhascker & Pavan Allena',
      description: 'Understanding the often missed but starking similarities between the world of entrepreneurship & filmmaking.',
      eventType: 'Fireside Chat',
      date: new Date('2024-09-15'),
      time: '6:00 PM',
      location: 'Hyderabad',
      venue: 'Bower School of Entrepreneurship',
      category: 'Fireside Chat',
      tags: ['entrepreneurship', 'filmmaking', 'startup', 'creativity'],
      imageUrl: '/a13ce9267499b27267124e56d44f45aac94e5d09.png',
      thumbnailUrl: '/a13ce9267499b27267124e56d44f45aac94e5d09.png',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      size: 'large',
      isPublished: true,
      isFeatured: true,
      viewCount: 1250,
      attendeeCount: 150,
      duration: '2 hours',
      galleryImages: [
        '/a13ce9267499b27267124e56d44f45aac94e5d09.png',
        '/d00c2b026538ec823982f0fddf18eb71a1a85e81.png',
        '/60ec8723919ebf312f295e9e1de778c186975152.png'
      ],
      speakers: [
        {
          name: 'Tharun Bhascker',
          title: 'Film Director & Entrepreneur',
          bio: 'Acclaimed filmmaker known for hits like Pelli Choopulu and Ee Nagaraniki Emaindi.',
          imageUrl: '/speakers/tharun.jpg'
        },
        {
          name: 'Pavan Allena',
          title: 'Founder, Bower School',
          bio: 'Serial entrepreneur and educator passionate about fostering innovation.',
          imageUrl: '/speakers/pavan.jpg'
        }
      ],
      testimonials: [
        {
          quote: 'An amazing crossover of two worlds - cinema and startups. Eye-opening insights!',
          author: 'Priya Sharma',
          role: 'Startup Founder',
          imageUrl: '/testimonials/priya.jpg'
        },
        {
          quote: 'The parallels drawn between filmmaking and entrepreneurship were brilliant.',
          author: 'Rahul Verma',
          role: 'Film Student',
          imageUrl: '/testimonials/rahul.jpg'
        }
      ],
      stats: {
        attendees: 150,
        speakers: 2,
        sessions: 1,
        satisfaction: '98%'
      }
    },
    {
      slug: 'building-global-startups',
      title: 'Building Global Startups From Local Ideas: Masterclass with Robert Schultz',
      description: 'Unravel how local expertise and skills can become the fulcrum of startups that reshape the global industries.',
      eventType: 'Masterclass',
      date: new Date('2024-08-20'),
      time: '10:00 AM',
      location: 'Hyderabad',
      venue: 'Bower School of Entrepreneurship',
      category: 'Masterclass',
      tags: ['global', 'startup', 'scaling', 'innovation'],
      imageUrl: '/d00c2b026538ec823982f0fddf18eb71a1a85e81.png',
      thumbnailUrl: '/d00c2b026538ec823982f0fddf18eb71a1a85e81.png',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      size: 'small',
      isPublished: true,
      isFeatured: false,
      viewCount: 890,
      attendeeCount: 200,
      duration: '3 hours',
      galleryImages: [
        '/d00c2b026538ec823982f0fddf18eb71a1a85e81.png',
        '/60ec8723919ebf312f295e9e1de778c186975152.png'
      ],
      speakers: [
        {
          name: 'Robert Schultz',
          title: 'Global Innovation Expert',
          bio: 'Helped 50+ startups scale globally from local markets.',
          imageUrl: '/speakers/robert.jpg',
          linkedIn: 'https://linkedin.com/in/robertschultz'
        }
      ],
      testimonials: [
        {
          quote: 'Robert\'s insights on scaling locally-rooted ideas globally were game-changing.',
          author: 'Amit Patel',
          role: 'Tech Entrepreneur',
          imageUrl: '/testimonials/amit.jpg'
        }
      ],
      stats: {
        attendees: 200,
        speakers: 1,
        sessions: 3,
        satisfaction: '96%'
      }
    },
    {
      slug: 'schools-for-profit',
      title: 'Can Schools Be For Profit: Fireside Chat b/w Aisshwarya DKS Hegde & Pavan Allena',
      description: 'How schools can turn into startups and inspire their students to think entrepreneurially & teachers to contribute deeply.',
      eventType: 'Fireside Chat',
      date: new Date('2024-07-10'),
      time: '5:00 PM',
      location: 'Hyderabad',
      venue: 'Bower School of Entrepreneurship',
      category: 'Fireside Chat',
      tags: ['education', 'edtech', 'innovation', 'entrepreneurship'],
      imageUrl: '/60ec8723919ebf312f295e9e1de778c186975152.png',
      thumbnailUrl: '/60ec8723919ebf312f295e9e1de778c186975152.png',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      size: 'small',
      isPublished: true,
      isFeatured: false,
      viewCount: 1100,
      attendeeCount: 180,
      duration: '1.5 hours',
      galleryImages: [
        '/60ec8723919ebf312f295e9e1de778c186975152.png',
        '/a13ce9267499b27267124e56d44f45aac94e5d09.png'
      ],
      speakers: [
        {
          name: 'Aisshwarya DKS Hegde',
          title: 'Education Innovator',
          bio: 'Pioneer in reimagining education through entrepreneurial thinking.',
          imageUrl: '/speakers/aisshwarya.jpg'
        },
        {
          name: 'Pavan Allena',
          title: 'Founder, Bower School',
          bio: 'Serial entrepreneur and educator passionate about fostering innovation.',
          imageUrl: '/speakers/pavan.jpg'
        }
      ],
      testimonials: [
        {
          quote: 'A thought-provoking discussion on the future of education.',
          author: 'Sneha Reddy',
          role: 'Educator',
          imageUrl: '/testimonials/sneha.jpg'
        },
        {
          quote: 'Finally, someone addressing the elephant in the room about education and profit.',
          author: 'Karthik Kumar',
          role: 'EdTech Founder',
          imageUrl: '/testimonials/karthik.jpg'
        }
      ],
      stats: {
        attendees: 180,
        speakers: 2,
        sessions: 1,
        satisfaction: '97%'
      }
    }
  ];

  for (const event of pastEvents) {
    try {
      const created = await prisma.pastEvent.upsert({
        where: { slug: event.slug },
        update: event as any,
        create: event as any,
      });
      console.log(`✓ Created/Updated past event: ${created.title}`);
    } catch (error) {
      console.error(`Error creating past event ${event.title}:`, error);
    }
  }

  console.log('Past events seeding completed!');
}

// Run the seed function
seedPastEvents()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });