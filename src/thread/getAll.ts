"use server"

import { listJson } from "@/local-db"
import { getThread } from "./getOne"
import { Thread } from "./type"

export const getThreads = async () => {
    const files = await listJson()
    const threadIds = files.filter(file => file.startsWith("thread-"))
    const threads = await Promise.all(
        threadIds.map(id => getThread(id))
    )
    return threads.filter((thread): thread is Thread => !!thread)
}
