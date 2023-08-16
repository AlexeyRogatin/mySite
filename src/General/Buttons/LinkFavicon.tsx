import React from "react";

import Styles from "./Buttons.module.scss";

import ArrowLink from "../../Landing/Assets/LinkArrow.svg";

export const LinkFavicon = () => {
    return (
        <div className={Styles.linkFavicon}>
            <ArrowLink />
        </div>
    )
}