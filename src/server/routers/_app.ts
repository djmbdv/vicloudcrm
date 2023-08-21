import { router } from "@server/trpc";

import handleAuthRouter from "./session";
import usersRouter from "./users";

export const appRouter = router({
  users: usersRouter,
  session: handleAuthRouter,
});

export type AppRouter = typeof appRouter;
