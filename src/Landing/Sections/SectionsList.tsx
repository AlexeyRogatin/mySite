import React from "react";
import Styles from "./Sections.module.scss";
import { Section } from "./Section";

import image from "../Assets/TestImage.gif";
import logo from "../Assets/Logo.svg";

export const SectionsList = () => {

    const data = [
        {
            href: '',
            image: image,
            Logo: logo,
        },
        {
            href: '',
            image: image,
            Logo: logo,
        },
        {
            href: '',
            image: image,
            Logo: logo,
        },
    ]

    return (
        <div className={Styles.sectionsList}>
            {data.map((data, index) => {
                return (
                    <Section key={index} href={data.href} image={data.image} Logo={data.Logo} />
                )
            })}
        </div>
    )
}