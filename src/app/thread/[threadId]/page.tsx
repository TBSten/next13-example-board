import { getThread } from "@/thread/getOne"
import { Container, Divider, Title } from "@mantine/core"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { NewMessage } from "./NewMessage"
import ThreadMessageList, { ThreadMessageLoading } from "./ThreadMessageList"

const ThreadPage = async ({ params: { threadId } }: { params: { threadId: string } }) => {
    const thread = await getThread(threadId)
    if (!thread) return notFound()
    return (
        <Container>
            <Title>
                {thread.title}
            </Title>
            created by {thread.authorName}
            <Divider my="md" />
            <Suspense fallback={<ThreadMessageLoading />}>
                <ThreadMessageList
                    threadId={thread.id}
                />
            </Suspense>
            <Divider my="md" />
            <NewMessage
                threadId={thread.id}
            />
        </Container>
    )
}
export default ThreadPage
