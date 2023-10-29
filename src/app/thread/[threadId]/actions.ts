"use server"

import { addMessage } from "@/thread/message/add"
import { CreateMessageParams } from "@/thread/message/type"
import { revalidatePath } from "next/cache"

export const handleAddMessage = async (params: CreateMessageParams) => {
    const newMessage = await addMessage(params)
    revalidatePath(`/thread/${newMessage.threadId}`)
}
