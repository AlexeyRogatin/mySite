import React from "react";
import Style from "./Introduction.module.scss";
import { Stat } from "./Stat";

export const Statistics = () => {
    const stats = [
        {
            text: 'Happy clients',
            number: 39,
        },
        {
            text: 'Sleek projects',
            number: 50,
        },
        {
            text: 'App designs',
            number: 24,
        },
    ]

    return (
        <div className={Style.statistics}>
            {stats.map((stat => <Stat key={stat.text} number={stat.number} text={stat.text} />))}
        </div>
    )
}