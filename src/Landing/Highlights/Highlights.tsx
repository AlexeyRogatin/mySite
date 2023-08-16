import React from "react";
import testImage from "../Assets/TestImage.gif";
import sideImage from "../Assets/AnimatedImage.gif";
import { Highlight } from "../../General/Buttons/Highlight";
import Styles from "./Highlights.module.scss";
import { ScrollableElement } from "../../General/OtherElements/ScrollableElement";

export const Highlights = () => {
    return (
        <div className={Styles.wrapper}>
            <Highlight src={testImage} heading="Kek" text="It's really painful to fall, so don't do it" href="https://twitter.com/AzuraJayfox" />
            <ScrollableElement>
                <Highlight src={sideImage} heading="Lul" text="It's really painful to fall, so don't do it" href="https://twitter.com/AzuraJayfox" />
                <Highlight src={testImage} heading="Kek" text="It's really painful to fall, so don't do it" href="https://twitter.com/AzuraJayfox" />
                <Highlight src={sideImage} heading="Lul" text="It's really painful to fall, so don't do it" href="https://twitter.com/AzuraJayfox" />
                <Highlight src={testImage} heading="Kek" text="It's really painful to fall, so don't do it" href="https://twitter.com/AzuraJayfox" />
                <Highlight src={sideImage} heading="Lul" text="It's really painful to fall, so don't do it" href="https://twitter.com/AzuraJayfox" />
                <Highlight src={testImage} heading="Kek" text="It's really painful to fall, so don't do it" href="https://twitter.com/AzuraJayfox" />
            </ScrollableElement>
        </div>
    )
}