import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const items = [
  {
    description: 'Pay utility bill',
  },
  {
    description: 'Walk the dog',
  },
  {
    description: 'Wash the dishes',
  },
];

async function main() {
  for (const item of items) {
    prisma.todo.create({
      data: {
        description: item.description,
        // completedAt: null,
      },
    });
  }
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
