import prisma from "@server/prismaClient";
import { publicProcedure, router } from "@server/trpc";
import { z } from "zod";

const handleAuthRouter = router({
  register: publicProcedure
    .input(
      z.object({
        email: z.string(),
        name: z.string(),
        nickname: z.string().optional(),
        givenName: z.string().optional(),
        familyName: z.string().optional(),
        picture: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });
      if (!user) {
        const newUser = await prisma.user.create({
          data: {
            ...input,
          },
        });
        return newUser;
      }
      return user;
    }),
});

export default handleAuthRouter;
