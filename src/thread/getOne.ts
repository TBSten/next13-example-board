"use server"

import { loadJson } from "@/local-db"
import { ThreadSchema } from "./type"

export const getThread = async (threadId: string) => {
    const data = await loadJson(threadId)
    const thread = ThreadSchema.safeParse(data)
    return thread.success ? thread.data : null
}
