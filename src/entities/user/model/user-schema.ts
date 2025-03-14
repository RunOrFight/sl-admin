import { z } from "zod";

export const UserSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export type User = z.infer<typeof UserSchema>;
