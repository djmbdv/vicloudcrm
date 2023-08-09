import {
  byIdCommonInput,
  deleteCommonInput,
  infinityQueryAllInput,
} from "@inputs/common";
import { z } from "zod";

export const addItemInput = z.object({
  name: z.string().min(3, "Name too short"),
  storeId: z.string().uuid(),
  price: z.number().positive(),
  description: z.string().max(255),
});

export { byIdCommonInput as byIdItemInput };

export { deleteCommonInput as deleteItemInput };

export { infinityQueryAllInput as allItemInput };
