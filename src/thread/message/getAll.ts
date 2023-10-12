"use server"
import { loadJson } from "@/local-db";
import { MessageSchema } from './type';

export const getThreadMessages = async (threadId: string) => {
    await sleep(500)
    try {
        const data = await loadJson(`thread-messages-${threadId}`)
        const messages = MessageSchema.array().parse(data)
        return messages
    } catch (error) {
        return []
    }
}

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))
