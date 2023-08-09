import type { RenderFucntion } from "@components/Grid";
import Grid from "@components/Grid";
import Paginator from "@components/Paginator";
import type { Item } from "@prisma/client";
import trpc from "@utils/trpc";
import type { FC } from "react";
import { useState } from "react";

import ItemCard from "./Card";

const renderCardItem: RenderFucntion<Item> = (item) => <ItemCard item={item} />;

const ItemsGrid: FC = () => {
  const limit = 12;
  const [page, setPage] = useState<number>(0);
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
      <Grid<Item>
        elements={data?.pages[page].items ?? []}
        render={renderCardItem}
      />
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

export default ItemsGrid;
