import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import ItemForm from "@components/items/Form";
import ItemsGrid from "@components/items/Grid";
import type { NextPage } from "next";

const Index: NextPage = () => (
  <>
    <ItemForm />
    <div className="py-2 px-auto">
      <ItemsGrid />
    </div>
  </>
);

export default withPageAuthRequired(Index);
