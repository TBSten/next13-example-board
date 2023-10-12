import { getThreads } from "@/thread/getAll";
import { Container } from "@mantine/core";
import NewThread from "./NewThread";
import ThreadList from "./ThreadList";

export default async function Home() {
  const threads = await getThreads()
  return (
    <Container my="md">
      <NewThread />
      <ThreadList threads={threads} />
    </Container>
  )
}
