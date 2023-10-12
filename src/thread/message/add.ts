"use server"
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
    const data = await loadJson(`thread-messages-${params.threadId}`, [])
    const messages = MessageSchema.array().parse(data)
    messages.push(message)
    await saveJson(`thread-messages-${params.threadId}`, messages)
    return message
}
