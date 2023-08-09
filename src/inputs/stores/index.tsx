import { byIdCommonInput, deleteCommonInput } from "@inputs/common";
import { z } from "zod";

export const addStoreInput = z.object({
  name: z.string().min(3, "Name too short"),
  description: z.string().max(255),
});

export { byIdCommonInput as byIdItemInput };

export { deleteCommonInput as deleteStoreInput };
