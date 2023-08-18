import React from "react";

import Styles from "./Buttons.module.scss";

import ArrowLink from "../../Landing/Assets/LinkArrow.svg";
import { Button } from "./Button";
import { LinkButton } from "./LinkButton";

export const LinkFavicon = ({ href, ...other }: React.ComponentProps<'a'>) => {
    return (
        <>
            {href !== '' ?
                <LinkButton className={Styles.linkFavicon} href={href}>
                    <ArrowLink />
                </LinkButton>
                : <></>}
        </>
    )
}