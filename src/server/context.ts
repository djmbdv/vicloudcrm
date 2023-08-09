import type { Session } from "@auth0/nextjs-auth0";
import { getSession } from "@auth0/nextjs-auth0";
import type { inferAsyncReturnType } from "@trpc/server";
import type * as trpcNext from "@trpc/server/adapters/next";

export function createContext(opts: trpcNext.CreateNextContextOptions): {
  session: Session | null | undefined;
} {
  const session = getSession(opts.req, opts.res);
  return {
    session,
  };
}
export type Context = inferAsyncReturnType<typeof createContext>;
