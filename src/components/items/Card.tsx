import Button from "@components/Button";
import type { Item } from "@prisma/client";
import Image from "next/image";
import type { FC } from "react";

export type ItemCardProps = { item: Item };

const ItemCard: FC<ItemCardProps> = ({
  item: { name, price, description },
}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <Image
      src="/custom_logo.png"
      alt="Sunset in the mountains"
      width={100}
      height={100}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <b>{price} USD</b>
    </div>
    <Button>Buy</Button>
    <Button className="form-input m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      👍
    </Button>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #tag
      </span>
    </div>
  </div>
);

export default ItemCard;
