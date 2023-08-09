import { deleteCommonInput } from "@inputs/common";
import { z } from "zod";

export const updateUserInput = z.object({
  name: z.string().min(3, "Name too short"),
  storeId: z.string().uuid(),
  price: z.number().positive(),
  description: z.string().max(255),
});

export { deleteCommonInput as deleteUserInput };
