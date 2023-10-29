"use client"

import { Box, Button, Flex, TextInput, Title } from "@mantine/core"
import { FC, useState } from "react"
import { handleAddThread } from "./actions"

interface NewThreadProps {
}
const NewThread: FC<NewThreadProps> = () => {
    const [title, setTitle] = useState("")
    const [authorName, setAuthorName] = useState("名無し")
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
                <Button
                    onClick={() => handleAddThread({ title, authorName })}
                >
                    new thread
                </Button>
            </Flex>
        </Box>
    )
}

export default NewThread
