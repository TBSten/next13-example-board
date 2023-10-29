import { loadJson, saveJson } from "@/local-db"
import { CreateMessageParams, CreateMessageParamsSchema, Message, MessageSchema } from "./type"

export const addMessage = async (params: CreateMessageParams) => {
    const validParams = CreateMessageParamsSchema.parse(params)
    const message: Message = {
        id: "message-" + Date.now(),
        ...validParams,
        createAt: new Date(),
        updateAt: new Date(),
    }
    // get messages
    const data = await loadJson(`messages-${params.threadId}`, [])
    const messages = MessageSchema.array().parse(data)
    messages.push(message)
    await saveJson(`messages-${params.threadId}`, messages)
    return message
}
