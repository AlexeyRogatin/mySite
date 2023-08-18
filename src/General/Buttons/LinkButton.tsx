import React from "react";
import { Button } from "./Button";

type LinkButtonProps = {
    href?: string
} & React.ComponentProps<'a'>

export const LinkButton = ({ href, children, ...other }: LinkButtonProps) => {
    return (
        <Button {...other} href={href}>
            {children}
        </Button>
    )
}