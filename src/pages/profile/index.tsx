import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";

const Index: NextPage = () => {
  const { user } = useUser();

  return <div>{JSON.stringify(user)}</div>;
};

export default withPageAuthRequired(Index);
