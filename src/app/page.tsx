import { Container } from "@mantine/core";
import NewThread from "./NewThread";
import ThreadList from "./ThreadList";

export default function Home() {
  return (
    <Container my="md">
      <NewThread />
      <ThreadList />
    </Container>
  )
}
