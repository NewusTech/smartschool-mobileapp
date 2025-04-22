import { z } from 'zod';

export const postComplaintPayloadSchema = z.object({
  title: z.string({ message: 'Harus diisi' }),
  description: z.string({ message: 'Harus diisi' }),
  file: z.string({ message: 'Harus diisi' }),
});

export type PostComplaintPayload = z.infer<typeof postComplaintPayloadSchema>;
