"use client"

import { addMessage } from "@/thread/message/add"
import { Anchor, Box, Button, Flex, TextInput, Textarea } from "@mantine/core"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"

interface NewMessageProps {
    threadId: string
}
export const NewMessage: FC<NewMessageProps> = ({ threadId }) => {
    const [message, setMessage] = useState("")
    const [isEditAuthorName, setIsEditAuthorName] = useState(false)
    const [authorName, setAuthorName] = useState("名無し")
    const router = useRouter()
    const handleAdd = async () => {
        await addMessage({ message, authorName, threadId })
        router.refresh()
        setMessage("")
    }
    return (
        <Flex gap="xs" align="center">

            <Box style={{ flexGrow: 1 }}>
                <Textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                {isEditAuthorName
                    ? <TextInput
                        value={authorName}
                        onChange={e => setAuthorName(e.target.value)}
                    />
                    : <>
                        投稿者名:
                        <Anchor underline="always" onClick={() => setIsEditAuthorName(true)}>
                            {authorName}
                        </Anchor>
                    </>
                }
            </Box>
            <Button onClick={handleAdd}>
                投稿
            </Button>
        </Flex>
    )
}
