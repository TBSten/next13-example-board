import { Anchor as MantineAnchor } from "@mantine/core"
import NextLink from "next/link"
import { FC, ReactNode } from "react"

interface LinkProps {
    href: string
    children: ReactNode
}
export const Link: FC<LinkProps> = ({ href, children }) => {
    return (
        <MantineAnchor component={NextLink} href={href}>
            {children}
        </MantineAnchor>
    )
}
