import React from "react"
import Style from "./Introduction.module.scss"
import { Statistics } from "./Statistics"

export const Introduction = () => {
    return (
        <div className={Style.wrapper}>
            <div className={Style.name}>Meet Aleksey Rogatin</div>

            <div className={Style.description}>You are a programmer? I'm something of a programmer myself</div>

            <Statistics />
        </div>
    )
}