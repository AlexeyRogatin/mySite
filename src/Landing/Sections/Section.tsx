import React from "react";
import Styles from "./Sections.module.scss";

type SectionProps = {
    href: string,
    image: string,
    Logo: React.SVGFactory
}

export const Section = ({ href, image, Logo }: SectionProps) => {
    return (
        <a className={Styles.section} href={href}>
            <img src={image} className={Styles.sectionImage}></img>
            <Logo className={Styles.sectionLogo} />
        </a>
    )
}