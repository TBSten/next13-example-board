"use client"

import { Anchor, Box, Button, Flex, TextInput, Textarea } from "@mantine/core"
import { FC, useState } from "react"
import { handleAddMessage } from "./actions"

interface NewMessageProps {
    threadId: string
}
export const NewMessage: FC<NewMessageProps> = ({ threadId }) => {
    const [message, setMessage] = useState("")
    const [isEditAuthorName, setIsEditAuthorName] = useState(false)
    const [authorName, setAuthorName] = useState("名無し")
    const handleAdd = async () => {
        await handleAddMessage({
            threadId,
            message,
            authorName,
        })
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
