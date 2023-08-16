import React from "react";
import Style from "./Introduction.module.scss";

type StatProps = {
    number: number;
    text: string;
}

export const Stat = ({ number, text }: StatProps) => {
    return (
        <div className={Style.stat}>
            <div className={Style.statNumber}>{number}</div>
            <div className={Style.statText}>{text}</div>
        </div>
    )
}