import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function reset() {
  console.log('--- NEXUS System Reset Initiated ---');

  try {
    // Delete all child records first
    console.log('Deleting Chat Messages...');
    await prisma.chatMessage.deleteMany({});

    console.log('Deleting Chat Sessions...');
    await prisma.chatSession.deleteMany({});

    console.log('Deleting Topic Progress...');
    await prisma.topicProgress.deleteMany({});

    console.log('Deleting Curriculum Data (Topic, Week, Project, GraduationChecklist)...');
    await prisma.topic.deleteMany({});
    await prisma.week.deleteMany({});
    await prisma.project.deleteMany({});
    await prisma.graduationChecklist.deleteMany({});

    // Reset User stats
    console.log('Resetting User: Shubham...');
    const user = await prisma.user.updateMany({
      where: { name: 'Shubham' },
      data: {
        points: 0,
        streak: 0,
        currentWeek: 1,
        currentDay: 0
      }
    });

    if (user.count === 0) {
      // Create user if not exists
      await prisma.user.create({
        data: {
          name: 'Shubham',
          email: 'shubham@example.com', // Added required email
          points: 0,
          streak: 0,
          currentWeek: 1,
          currentDay: 0
        }
      });
      console.log('Created User: Shubham.');
    } else {
      console.log('User stats reset to zero.');
    }

    console.log('--- Reset Complete: Welcome to Day 1, Bhai! ---');
  } catch (err) {
    console.error('Reset Failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

reset();
