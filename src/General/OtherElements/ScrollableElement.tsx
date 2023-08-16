import React from "react"
import Styles from "./OtherElements.module.scss";

export const ScrollableElement = ({ children }: React.ComponentProps<'div'>) => {
    return (
        <div className={Styles.scrollableElement}>
            <div>
                {children}
            </div>
        </div>
    )
}