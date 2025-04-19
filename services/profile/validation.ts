import { z } from "zod";

export const postProfilePayloadSchema = z.object({
  name: z.string({ message: "Harus diisi" }),
  telephone: z.string({ message: "Harus diisi" }),
  email: z.string({ message: "Harus diisi" }).email("Email tidak valid"),
  password: z.string({ message: "Harus diisi" }),
});
export type PostProfilePayload = z.infer<typeof postProfilePayloadSchema>;
