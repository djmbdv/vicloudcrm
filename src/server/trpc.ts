import { initTRPC, TRPCError } from "@trpc/server";
import SuperJSON from "superjson";

import type { Context } from "./context";

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
});

const isAuthed = t.middleware(({ next, ctx }) => {
  if (typeof ctx.session?.user?.localId !== "string") {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  return next({
    ctx: {
      session: ctx.session,
      userId: ctx.session.user.localId,
    },
  });
});
export const { middleware } = t;
export const { router } = t;

export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(isAuthed);
