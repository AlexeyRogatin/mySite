import React from "react";

import Styles from "./Header.module.scss";
import { NavigationPanel } from "./NavigationPanel";

export const Header = () => {
    return (
        <div className={Styles.wrapper}>
            <NavigationPanel />
            <div className={Styles.mainHeading}>Welcome to LexSite!</div>
        </div>
    )
}