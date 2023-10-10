import { z } from "zod"

export const ThreadSchema = z.object({
    id: z.string(),
    title: z.string().min(1),
    authorName: z.string().default("名無し"),
    createAt: z.coerce.date(),
    updateAt: z.coerce.date(),
})
export type Thread = z.infer<typeof ThreadSchema>

export const CreateThreadParamsSchema = ThreadSchema.pick({
    title: true,
    authorName: true,
})
export type CreateThreadParams = z.infer<typeof CreateThreadParamsSchema>
