import { allUserInput } from "@inputs/user";
import prisma from "@server/prismaClient";
import { publicProcedure, router } from "@server/trpc";

const usersRouter = router({
  /*   add: protectedProcedure.input(addItemInput).mutation(async ({ input }) => {
    const createdItem = await prisma.user.create({
      data: {
        ...input,
      },
      select: {
        id: true,
      },
    });
    return createdItem;
  }),
  byId: publicProcedure.input(deleteItemInput).query(async ({ input }) => {
    const id = input;
    return id ? prisma.user.findUnique({ where: { id } }) : null;
  }), */
  all: publicProcedure
    .input(allUserInput)
    .query(async ({ input: { limit, cursor } }) => {
      const users = await prisma.user.findMany({
        take: limit + 1,
        ...(cursor && { cursor: { id: cursor } }),
        where: { deletedAt: null },
      });
      const count = await prisma.user.count({ where: { deletedAt: null } });
      return {
        nextCursor: users.length > limit ? users.pop() : null,
        count,
        users,
      };
    }),
});

export default usersRouter;
