interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    description: string
    status: string
    createdAt: number
}

export const seedData: SeedData = {
    entries: [
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum porro hic officiis vitae fuga',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'En-Progreso: quasi accusamus voluptates eos in?',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'Terminados: Lorem ipsum dolor sit amet',
            status: 'finished',
            createdAt: Date.now() - 100000
        },
    ]
}