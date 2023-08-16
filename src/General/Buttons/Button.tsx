import React from "react";
import Styles from "./Buttons.module.scss";

export const Button = ({ className, ...other }: React.ComponentProps<'div'>) => {
    return (
        <div className={`${Styles.button} ${className}`} {...other} />
    )
}