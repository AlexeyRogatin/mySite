import React from "react";
import Styles from "./Sections.module.scss";
import { SectionsList } from "./SectionsList";

export const Sections = () => {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.sectionsHeading}>Sections</div>
            <SectionsList />
        </div>
    )
}