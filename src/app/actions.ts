"use server"
import { addThread } from "@/thread/add"
import { CreateThreadParams } from "@/thread/type"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const handleAddThread = async (params: CreateThreadParams) => {
    const newThread = await addThread(params)
    console.log("cookies", cookies().getAll())
    redirect(`/thread/${newThread.id}`)
}
