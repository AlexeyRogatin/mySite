import React from "react";
import Styles from "./Footer.module.scss";

import twitter from "../Assets/twitter.svg";
import vk from "../Assets/vk.svg";
import discord from "../Assets/discord.svg";

export const SocialMedia = () => {

    const medias = [
        {
            Logo: vk,
            href: 'https://vk.com/darthlordshad1',
        },
        {
            Logo: twitter,
            href: 'https://twitter.com/OrdPoP',
        },
        {
            Logo: discord,
            href: 'https://discordapp.com/users/ordpop',
        },
    ]

    return (
        <div className={Styles.socialMedia}>
            {medias.map((media) => {
                return (
                    <a href={media.href} key={media.href}>
                        <media.Logo className={Styles.logo}></media.Logo>
                    </a>
                )
            })}
        </div>
    )
}