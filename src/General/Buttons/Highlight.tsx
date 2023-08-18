import React from "react"
import Styles from "./Buttons.module.scss"
import { LinkFavicon } from "./LinkFavicon"
import { LinkButton } from "./LinkButton"

type highlightProps = {
    src: string,
    heading: string,
    text: string,
    href: string,
}

export const Highlight = ({ src, heading, text, href }: highlightProps) => {
    return (

        <div className={Styles.highlight}>
            <div className={Styles.imageWrapper}>
                <img src={src} className={Styles.highlightImage} />
                <LinkFavicon href={href} />
            </div>
            <div className={Styles.highlightHeading}>{heading}</div>
            <div className={Styles.highlightText}>{text}</div>
        </div >
    )
}