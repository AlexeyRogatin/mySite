import React from "react";
import Styles from "./Footer.module.scss";

import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
    return (
        <div className={Styles.wrapper}>
            <SocialMedia />
            <div className={Styles.footerText}>LexSite</div>
        </div>
    )
}