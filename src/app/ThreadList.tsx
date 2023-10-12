import { Link } from "@/components/Link"
import { Thread } from "@/thread/type"
import { Box } from "@mantine/core"
import { FC } from "react"

interface ThreadListProps {
    threads: Thread[]
}
const ThreadList: FC<ThreadListProps> = ({ threads }) => {
    return (
        <div>
            {threads.map(thread =>
                <Box key={thread.id} p="sm">
                    <div>
                        <Link key={thread.id} href={`/thread/${thread.id}`}>
                            {thread.title}
                        </Link>
                    </div>
                    <div>
                        ({thread.authorName})
                    </div>
                </Box>
            )}
        </div>
    )
}

export default ThreadList