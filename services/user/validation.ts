import { z } from "zod";

export const postLoginPayloadSchema = z.object({
  email: z.string({ message: "Harus diisi" }).email("Email tidak valid"),
  password: z.string({ message: "Harus diisi" }),
});
export type PostLoginPayload = z.infer<typeof postLoginPayloadSchema>;

export const postRegisterPayloadSchema = z.object({
  email: z.string({ message: "Harus diisi" }).email("Email tidak valid"),
  name: z.string({ message: "Harus diisi" }),
  password: z.string({ message: "Harus diisi" }),
});

export type PostRegisterPayload = z.infer<typeof postRegisterPayloadSchema>;
export type PostRegisterResponseError = {
  error: string;
};