"use client"

import { addThread } from "@/thread/add"
import { Box, Button, Flex, TextInput, Title } from "@mantine/core"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"

interface NewThreadProps {
}
const NewThread: FC<NewThreadProps> = () => {
    const [title, setTitle] = useState("")
    const [authorName, setAuthorName] = useState("名無し")
    const router = useRouter()
    const handleAdd = async () => {
        const newThread = await addThread({ title, authorName })
        router.push(`/thread/${newThread.id}`)
    }
    return (
        <Box>
            <Title>
                新しいスレッド
            </Title>
            <TextInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                label="スレッドのタイトル"
                required
            />
            <Flex align="flex-end" gap="xs">
                <TextInput
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)}
                    label="あなたの名前"
                    style={{ flexGrow: 1 }}
                />
                <Button onClick={handleAdd}>
                    new thread
                </Button>
            </Flex>
        </Box>
    )
}

export default NewThread
