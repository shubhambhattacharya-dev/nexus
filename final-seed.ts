import { PrismaClient } from '@prisma/client';
import { curriculum, projectLadder, graduationChecklist } from './src/data/seedData.ts';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const weeks = [
  { id: 0, title: "Week 0: Prerequisites" },
  { id: 1, title: "Week 1: Foundations & RAG" },
  { id: 2, title: "Week 2: Advanced Retrieval" },
  { id: 3, title: "Week 3: Agentic RAG" },
  { id: 4, title: "Week 4: AI Product Eng I" },
  { id: 5, title: "Week 5: AI Product Eng II" },
  { id: 6, title: "Week 6: AI Product Eng III" },
  { id: 7, title: "Week 7: Red Teaming I" },
  { id: 8, title: "Week 8: Red Teaming II" },
  { id: 9, title: "Week 9: Red Teaming III" },
  { id: 10, title: "Week 10: Model Eng I" },
  { id: 11, title: "Week 11: Model Eng II" },
  { id: 12, title: "Week 12: Model Eng III" },
  { id: 13, title: "Week 13: LLMOps" },
  { id: 14, title: "Week 14: Global Capstone" },
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
