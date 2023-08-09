import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import trpc from "@utils/trpc";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Index: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || typeof id !== "string") {
    router.push("/500").catch(() => {});
    return null;
  }
  const item = trpc.items.byId.useQuery(id);
  return <div>{JSON.stringify(item)}</div>;
};

export default withPageAuthRequired(Index);
