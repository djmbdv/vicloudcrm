import { addItemInput, allItemInput, deleteItemInput } from "@inputs/items";
import prisma from "@server/prismaClient";
import { protectedProcedure, publicProcedure, router } from "@server/trpc";

const itemsRouter = router({
  add: protectedProcedure
    .input(addItemInput)
    .mutation(async ({ input, ctx }) => {
      const createdItem = await prisma.item.create({
        data: {
          ...input,
          creatorId: ctx.userId,
        },
        select: {
          id: true,
        },
      });
      return createdItem;
    }),
  byId: publicProcedure.input(deleteItemInput).query(async ({ input }) => {
    const id = input;
    return id ? prisma.item.findUnique({ where: { id } }) : null;
  }),
  all: publicProcedure
    .input(allItemInput)
    .query(async ({ input: { limit, cursor } }) => {
      const items = await prisma.item.findMany({
        take: limit + 1,
        ...(cursor && { cursor: { id: cursor } }),
        where: { deletedAt: null },
      });
      const count = await prisma.item.count({ where: { deletedAt: null } });
      return {
        nextCursor: items.length > limit ? items.pop() : null,
        count,
        items,
      };
    }),
});

export default itemsRouter;
