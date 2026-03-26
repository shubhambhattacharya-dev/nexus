export interface Topic {
    id: number;
    day: number;
    weekId: number;
    title: string;
    skill: string;
    hoursPerDay: string;
    difficulty: string;
    systemDesign: string;
    miniProject: string;
    mediumProject: string | null;
    bigProject: string | null;
    testing: string;
    audit: string;
    resource: string;
    redTeamTask: string;
    gapFixed: string | null;
    steps: string[];
    proTip: string | null;
    detailedSteps: { title: string; points: string[] }[] | null;
}

export interface Week {
    id: number;
    title: string;
    week: number;
}

// Dummy export for compatibility - actual data in seedData.ts
export const curriculum: Topic[] = [];

export const getWeeks = async (): Promise<Week[]> => {
    try {
        const response = await fetch('/api/curriculum/weeks');
        if (!response.ok) throw new Error('Failed to fetch weeks');
        return response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const getTopics = async (): Promise<Topic[]> => {
    try {
        const response = await fetch('/api/curriculum/topics');
        if (!response.ok) throw new Error('Failed to fetch topics');
        return response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
};