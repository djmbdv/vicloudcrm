import { addStoreInput } from "@inputs/stores";
import prisma from "@server/prismaClient";
import { protectedProcedure, publicProcedure, router } from "@server/trpc";

const storesRouter = router({
  add: protectedProcedure
    .input(addStoreInput)
    .mutation(async ({ input, ctx }) => {
      const createdStore = await prisma.store.create({
        data: {
          ...input,
          ownerId: ctx.userId,
          creatorId: ctx.userId,
        },
        select: {
          id: true,
        },
      });
      return createdStore;
    }),
  all: publicProcedure.query(async () => {
    const stores = await prisma.store.findMany({
      where: {
        deletedAt: null,
      },
    });
    return stores;
  }),
});

export default storesRouter;
