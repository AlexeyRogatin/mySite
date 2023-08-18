import React, { useEffect, useState } from "react";

import Styles from "./Header.module.scss";
import Animation from "../../General/Animations/Animations.module.scss";

import Logo from "../Assets/Logo.svg";
import BurgerLogo from "../Assets/Burger.svg";
import Circle from "../Assets/Circle.svg";
import { ButtonList } from "../../General/Buttons/ButtonList";
import { NavigationMenu } from "./NavigationMenu";
import { useDisableMainScroll, useEnableMainScroll } from "../../General/Hooks/useScrolls";
import { Button } from "../../General/Buttons/Button";

const computeDiagonal = () => {
    return 2 * Math.sqrt(Math.pow(visualViewport.width, 2) + Math.pow(visualViewport.height, 2))
}

export const NavigationPanel = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [circleClass, setCircleClass] = useState(Animation.small);
    const [circleDiagonal, setCircleDiagonal] = useState(computeDiagonal());
    const [menuClass, setMenuClass] = useState(Animation.invisible);

    const handleBurgerClick = () => {
        if (!menuOpen) {
            setCircleClass(Animation.large);
            useDisableMainScroll();
        } else {
            setCircleClass(Animation.small);
            setMenuClass(Animation.invisible);
            useEnableMainScroll();
        }

        setMenuOpen((val) => !val);
    }

    useEffect(() => {
        const setDiagonalRadius = () => {
            setCircleDiagonal(computeDiagonal());
        }
        addEventListener('resize', () => setDiagonalRadius());

        return removeEventListener('resize', setDiagonalRadius);
    }, []);

    const handleTransitionEnd = () => {
        if (menuOpen) {
            setMenuClass(Animation.visible);
        }
    }

    return (
        <div className={Styles.navigationPanel}>
            <Logo className={Styles.logo} />
            <div className={Styles.burgerWrapper}>
                <Circle className={`${circleClass} ${Styles.circle}`} style={{ width: circleDiagonal, height: circleDiagonal }}
                    onTransitionEnd={handleTransitionEnd} />
                <NavigationMenu className={menuClass} />

                <Button className={Styles.burger} onClick={handleBurgerClick}>
                    <BurgerLogo className={Styles.burgerLogo} />
                </Button>
            </div>

            <ButtonList className={Styles.buttonListDesctop} />
        </div>
    )
}