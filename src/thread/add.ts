import { saveJson } from '@/local-db';
import { CreateThreadParams, CreateThreadParamsSchema, Thread } from "./type";

export const addThread = async (params: CreateThreadParams) => {
    const validParams = CreateThreadParamsSchema.parse(params)
    const thread: Thread = {
        id: "thread-" + Date.now(),
        ...validParams,
        createAt: new Date(),
        updateAt: new Date(),
    }
    await saveJson(thread.id, thread)
    return thread
}

