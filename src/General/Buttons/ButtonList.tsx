import React from "react";

import Styles from "./Buttons.module.scss";
import TextStyles from "../Text/TextStyles.module.scss";

import { LinkButton } from "./LinkButton";
import ContactLogo from "../../Landing/Assets/ContactLogo.svg";
import PortfolioLogo from "../../Landing/Assets/PortfolioLogo.svg";
import ResumeLogo from "../../Landing/Assets/ResumeLogo.svg";
import TestimonialsLogo from "../../Landing/Assets/TestimonialsLogo.svg";

export const ButtonList = ({ ...other }: React.ComponentProps<'div'>) => {
    const buttons = [
        {
            logo: PortfolioLogo,
            text: 'Portfolio',
            link: '',
        },
        {
            logo: ResumeLogo,
            text: 'Resume',
            link: '',
        },
        {
            logo: TestimonialsLogo,
            text: 'Testimonials',
            link: '',
        },
        {
            logo: ContactLogo,
            text: 'Contact',
            link: '',
        }
    ]

    return (
        <div {...other}>
            {buttons.map(button => (
                <LinkButton key={button.text}>
                    <div className={Styles.buttonGroup}>
                        <button.logo />
                        <div className={TextStyles.defaultText}>
                            {button.text}
                        </div>
                    </div>
                </LinkButton>
            ))}
        </div>
    )
}