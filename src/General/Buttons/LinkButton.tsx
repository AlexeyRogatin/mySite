import React from "react";
import { Button } from "./Button";

type LinkButtonProps = {
    href?: string
} & React.ComponentProps<'div'>

export const LinkButton = ({ href, children, ...other }: LinkButtonProps) => {
    return (
        <a href={href} >
            <Button {...other}>
                {children}
            </Button>
        </a>
    )
}