import { router } from "@server/trpc";

import itemsRouter from "./items";
import handleAuthRouter from "./session";
import storesRouter from "./stores";

export const appRouter = router({
  items: itemsRouter,
  session: handleAuthRouter,
  stores: storesRouter,
});

export type AppRouter = typeof appRouter;
