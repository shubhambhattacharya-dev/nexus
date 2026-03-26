import { PrismaClient } from '@prisma/client';
import { curriculum, projectLadder, graduationChecklist } from './src/data/seedData.ts';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const weeks = Array.from({ length: 38 }, (_, i) => {
    let title = `Week ${i}`;
    if (i === 0) title = "Week 0: Prerequisites";
    else if (i < 14) title = `Week ${i}: Internship Path`;
    else if (i === 14) title = "Week 14: Internship Capstone";
    else if (i < 24) title = `Week ${i}: Elite Product Eng`;
    else title = `Week ${i}: Elite Model Eng`;
    return { id: i, title: title };
});

async function main() {
  console.log('--- NEXUS v7.0 Final Seeding ---');

  try {
    // 1. Clean existing data (Optional but recommended for major v7.0 shift)
    console.log('Clearing old missions...');
    await prisma.topic.deleteMany({});
    await prisma.week.deleteMany({});
    await prisma.project.deleteMany({});
    await prisma.graduationChecklist.deleteMany({});

    // 2. Seed Weeks
    console.log(`Seeding ${weeks.length} Weeks...`);
    for (const week of weeks) {
      await prisma.week.create({ data: week });
    }

    // 3. Seed Topics
    console.log(`Seeding ${curriculum.length} Topics...`);
    for (const topic of curriculum) {
      await prisma.topic.create({ data: {
        ...topic,
        detailedSteps: topic.detailedSteps as any
      }});
    }

    // 4. Seed Projects
    console.log('Seeding Project Ladder...');
    for (const project of projectLadder) {
      await prisma.project.create({ data: project });
    }

    // 5. Seed Graduation Checklist
    console.log('Seeding Graduation Checklist...');
    for (const [category, items] of Object.entries(graduationChecklist)) {
      await prisma.graduationChecklist.create({
        data: { category, items }
      });
    }

    console.log('✅ NEXUS v7.0 Seeded Successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
