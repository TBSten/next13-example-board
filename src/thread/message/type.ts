import { z } from "zod"

export const MessageSchema = z.object({
    threadId: z.string(),
    id: z.string(),
    message: z.string(),
    authorName: z.string(),
    createAt: z.coerce.date(),
    updateAt: z.coerce.date(),
})
export type Message = z.infer<typeof MessageSchema>

export const CreateMessageParamsSchema = MessageSchema.pick({
    threadId: true,
    message: true,
    authorName: true,
})
export type CreateMessageParams = z.infer<typeof CreateMessageParamsSchema>
