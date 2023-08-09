import type { AppRouter } from "@server/routers/_app";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import SuperJSON from "superjson";

function getBaseUrl(): string {
  if (typeof window !== "undefined") return "";

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}${
      process.env.PORT ? `:${process.env.PORT}` : ""
    }`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}
const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @link https://trpc.io/docs/ssr
           * */
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      transformer: SuperJSON,
      /**
       * @link https://tanstack.com/query/v4/docs/reference/QueryClient
       * */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   * */
  ssr: false,
});

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      /**
       * If you want to use SSR, you need to use the server's full URL
       * @link https://trpc.io/docs/ssr
       * */
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
  transformer: SuperJSON,
});

export default trpc;
