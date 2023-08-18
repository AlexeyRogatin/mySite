import React from "react";
import Styles from "./Buttons.module.scss";

export const Button = ({ className, ...other }: React.ComponentProps<'a'>) => {
    return (
        <a className={`${className} ${Styles.button} `} {...other} />
    )
}