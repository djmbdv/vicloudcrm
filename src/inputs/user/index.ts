import { deleteCommonInput, infinityQueryAllInput } from "@inputs/common";
import { z } from "zod";

export const updateUserInput = z.object({
  name: z.string().min(3, "Name too short"),
});

export { deleteCommonInput as deleteUserInput };
export { infinityQueryAllInput as allUserInput };
