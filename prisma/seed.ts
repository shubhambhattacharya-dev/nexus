import { PrismaClient } from '@prisma/client';
import { curriculum, projectLadder, graduationChecklist } from '../src/data/seedData';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

// Load .env from root
dotenv.config({ path: path.join(__dirname, '../.env') });

const weeks = [
  { id: 1, title: "Foundations" },
  { id: 2, title: "Engineering" },
  { id: 3, title: "Embeddings" },
  { id: 4, title: "RAG Pipeline" },
  { id: 5, title: "Agents & Tools" },
  { id: 6, title: "Fine-tuning" },
  { id: 7, title: "Security" },
  { id: 8, title: "Red Teaming" },
  { id: 9, title: "Strategy" },
  { id: 10, title: "Capstone" },
  { id: 11, title: "Internship Ready" },
  { id: 12, title: "Job Ready" },
];

async function main() {
  console.log('Start seeding ...');

  for (const week of weeks) {
    await prisma.week.upsert({
      where: { id: week.id },
      update: { title: week.title },
      create: {
        id: week.id,
        title: week.title,
      },
    });
  }

  console.log(`Seeding ${curriculum.length} topics...`);
  if (curriculum.length > 0) {
    console.log('Sample topic:', JSON.stringify(curriculum[0]));
  }

  for (const topic of curriculum) {
    // @ts-ignore
    const topicId = topic.id || topic.day;
    await prisma.topic.upsert({
      where: { day: topic.day },
      update: {
        title: topic.title,
        skill: topic.skill,
        steps: topic.steps,
        proTip: topic.proTip,
        difficulty: topic.difficulty,
        systemDesign: topic.systemDesign,
        miniProject: topic.miniProject,
        mediumProject: topic.mediumProject,
        bigProject: topic.bigProject,
        testing: topic.testing,
        audit: topic.audit,
        resource: topic.resource,
        redTeamTask: topic.redTeamTask,
        gapFixed: topic.gapFixed,
      },
      create: {
        id: topicId,
        day: topic.day,
        weekId: topic.weekId,
        title: topic.title,
        skill: topic.skill,
        hoursPerDay: topic.hoursPerDay,
        difficulty: topic.difficulty,
        systemDesign: topic.systemDesign,
        miniProject: topic.miniProject,
        mediumProject: topic.mediumProject,
        bigProject: topic.bigProject,
        testing: topic.testing,
        audit: topic.audit,
        resource: topic.resource,
        redTeamTask: topic.redTeamTask,
        gapFixed: topic.gapFixed,
        steps: topic.steps,
        proTip: topic.proTip,
      },
    });
  }

  for (const [milestone, project] of Object.entries(projectLadder) as [string, { mini: string, medium: string, big: string }][]) {
    const milestoneNum = parseInt(milestone.replace('milestone', ''));
    await prisma.project.upsert({
      where: { milestone: milestoneNum },
      update: {},
      create: {
        id: milestoneNum,
        milestone: milestoneNum,
        mini: project.mini,
        medium: project.medium,
        big: project.big,
      },
    });
  }

  for (const [category, items] of Object.entries(graduationChecklist) as [string, string[]][]) {
    await prisma.graduationChecklist.upsert({
      where: { category: category },
      update: {},
      create: {
        category: category,
        items: items,
      },
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
