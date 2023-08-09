import { PrismaClient } from "@prisma/client";

import softDeletes from "./middlewares/softDeletes";

const prisma = new PrismaClient();

prisma.$use(softDeletes);

export * from "@prisma/client";
export default prisma;
