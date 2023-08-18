import React, { useEffect } from "react"
import { Introduction } from "./Introduction/Introduction"
import Styles from "./App.module.scss"
import { Highlights } from "./Highlights/Highlights"
import { Header } from "./Header/Header"
import { Sections } from "./Sections/Sections"
import { Qwote } from "./Qwote/Qwote"
import { Footer } from "./Footer/Footer"

export const App = () => {
    useEffect(() => {
        const setClientWidthVariable = () => {
            document.documentElement.style.setProperty('--clientWidth', document.body.clientWidth + 'px');
        }

        setClientWidthVariable();

        addEventListener('resize', () => setClientWidthVariable());

        return removeEventListener('resize', () => setClientWidthVariable());
    }, []);

    return (
        <div className={Styles.appStyle}>
            <Header />
            <Introduction />
            <Highlights />
            <Sections />
            <Qwote />
            <Footer />
        </div>
    )
}