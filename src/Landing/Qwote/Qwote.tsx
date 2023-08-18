import React from "react";
import Style from "./Qwote.module.scss";

import image from "../Assets/TestImage.gif";

export const Qwote = () => {
    return (
        <div className={Style.wrapper}>
            <img src={image} className={Style.backImage} />
            <div className={Style.qwoteText}>“And you walk and go like... IIUAIEUEUAIIAI. And they are like "What the ****".”</div>
        </div>
    )
}