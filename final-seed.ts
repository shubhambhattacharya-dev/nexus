import { PrismaClient } from '@prisma/client';
import { curriculum, projectLadder, graduationChecklist } from './src/data/seedData';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

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
  console.log('--- NEXUS Final Seeding ---');

  try {
    console.log('Seeding Weeks...');
    for (const week of weeks) {
      await prisma.week.upsert({
        where: { id: week.id },
        update: { title: week.title },
        create: { id: week.id, title: week.title },
      });
    }

    console.log(`Seeding ${curriculum.length} Topics...`);
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
          detailedSteps: topic.detailedSteps as any,
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
          detailedSteps: topic.detailedSteps as any,
        },
      });
    }

    console.log('Seeding Project Ladder...');
    for (const [milestone, project] of Object.entries(projectLadder) as [string, { mini: string, medium: string, big: string }][]) {
      const milestoneNum = parseInt(milestone.replace('milestone', ''));
      await prisma.project.upsert({
        where: { milestone: milestoneNum },
        update: { mini: project.mini, medium: project.medium, big: project.big },
        create: { id: milestoneNum, milestone: milestoneNum, mini: project.mini, medium: project.medium, big: project.big },
      });
    }

    console.log('Seeding Graduation Checklist...');
    for (const [category, items] of Object.entries(graduationChecklist) as [string, string[]][]) {
      await prisma.graduationChecklist.upsert({
        where: { category: category },
        update: { items: items },
        create: { category: category, items: items },
      });
    }

    console.log('--- Seeding Complete: NEXUS is Ready! ---');
  } catch (err) {
    console.error('Seeding Failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
