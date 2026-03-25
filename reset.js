import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function reset() {
  console.log('--- NEXUS System Reset (ESM) ---');

  try {
    console.log('Purging Chat, Progress, and Reports...');
    
    // Deleting sequentially if TRUNCATE CASCADE is not preferred
    await prisma.chatMessage.deleteMany({});
    await prisma.chatSession.deleteMany({});
    await prisma.topicProgress.deleteMany({});
    await prisma.redTeamReport.deleteMany({});

    // Reset User
    console.log('Resetting User: Shubham...');
    await prisma.user.upsert({
      where: { name: 'Shubham' },
      update: {
        xp: 0,
        level: 1,
        streak: 0,
        currentWeek: 1,
        currentDay: 1
      },
      create: {
        name: 'Shubham',
        xp: 0,
        level: 1,
        streak: 0,
        currentWeek: 1,
        currentDay: 1
      }
    });

    console.log('--- Reset Complete: System at 0. Start Build! ---');
  } catch (err) {
    console.error('Reset Failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

reset();
