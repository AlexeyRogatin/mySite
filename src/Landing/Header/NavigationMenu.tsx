import React from "react";

import Styles from "./Header.module.scss";
import { ButtonList } from "../../General/Buttons/ButtonList";

export const NavigationMenu = ({ className, ...other }: React.ComponentProps<'div'>) => {
    return (
        <div className={`${className} ${Styles.navigationMenu}`}{...other}>
            <ButtonList className={Styles.buttonListMobile} />
        </div>
    )
}