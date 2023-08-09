import { z } from "zod";

export const deleteCommonInput = z.string().uuid();
export const byIdCommonInput = z.string().uuid();
export const infinityQueryAllInput = z.object({
  cursor: z.string().uuid().nullish(),
  limit: z.number().nonnegative().default(15),
});
