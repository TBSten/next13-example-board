import { getThreadMessages } from "@/thread/message/getAll"
import { Skeleton } from "@mantine/core"
import { FC } from "react"

interface ThreadMessageListProps {
    threadId: string
}
const ThreadMessageList = async ({ threadId }: ThreadMessageListProps) => {
    const messages = await getThreadMessages(threadId)
    return (
        <div>
            {messages.map(message =>
                <div key={message.id}>
                    {message.message}({message.authorName})
                </div>
            )}
            {messages.length === 0 &&
                <div>
                    スレッドにメッセージがありません。
                </div>
            }
        </div>
    )
}
export default ThreadMessageList

interface ThreadMessageLoadingProps {
}
export const ThreadMessageLoading: FC<ThreadMessageLoadingProps> = () => {
    return (
        <>
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </>
    )
}
