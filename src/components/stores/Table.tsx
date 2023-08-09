import Button from "@components/Button";
import type { Column } from "@components/Table";
import Table from "@components/Table";
import type { Store } from "@server/prismaClient";
import trpc from "@utils/trpc";
import type { FC } from "react";

const columns: Column<Store>[] = [
  { title: "id", render: (item) => item.id.substring(0, 5) },
  { title: "name", render: ({ name }) => name },
  { title: "description", render: ({ description }) => description },
  {
    title: "actions",
    render: () => <Button>DELETE</Button>,
  },
];
const StoresTable: FC = () => {
  const stores = trpc.stores.all.useQuery()?.data ?? [];
  return <Table<Store> columns={columns} rows={stores} />;
};

export default StoresTable;
