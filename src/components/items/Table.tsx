import Button from "@components/Button";
import Paginator from "@components/Paginator";
import type { Column } from "@components/Table";
import Table from "@components/Table";
import { TrashIcon } from "@heroicons/react/24/solid";
import type { Item } from "@server/prismaClient";
import trpc from "@utils/trpc";
import type { FC } from "react";
import { useState } from "react";

const columns: Column<Item>[] = [
  { title: "id", render: (item) => item.id.substring(0, 5) },
  { title: "name", render: ({ name }) => name },
  { title: "price", render: ({ price }) => price.toFixed(2) },
  {
    title: "actions",
    render: () => (
      <Button>
        <TrashIcon className="h-6 w-6 text-white" />
      </Button>
    ),
  },
];
const ItemsTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const limit = 12;
  const { data, fetchNextPage, fetchPreviousPage, hasNextPage } =
    trpc.items.all.useInfiniteQuery(
      { limit },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor?.id,
      }
    );

  const toNextPage = async (): Promise<void> => {
    if (!data?.pages[page + 1] && hasNextPage) await fetchNextPage();
    setPage(page + 1);
  };
  const toPreviousPage = async (): Promise<void> => {
    await fetchPreviousPage();
    setPage(page - 1);
  };
  return (
    <>
      <Table<Item> columns={columns} rows={data?.pages[page]?.items ?? []} />
      <Paginator
        pagesCount={Math.ceil((data?.pages[page]?.count ?? 0) / limit)}
        onForwardPage={
          data?.pages[page + 1] || hasNextPage ? toNextPage : undefined
        }
        onPreviousPage={page > 0 ? toPreviousPage : undefined}
        currentPage={page + 1}
      />
    </>
  );
};

export default ItemsTable;