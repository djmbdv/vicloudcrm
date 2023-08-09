import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import StoreForm from "@components/stores/Form";
import type { NextPage } from "next";

const Index: NextPage = () => <StoreForm />;

export default withPageAuthRequired(Index);
