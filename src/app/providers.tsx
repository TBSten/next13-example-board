import { theme } from "@/style/theme"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import { FC, ReactNode } from "react"

interface ProvidersProps {
    children: ReactNode
}
const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
    )
}

export default Providers
