import React, { Children, useEffect, useRef, useState } from "react"
import Styles from "./OtherElements.module.scss";
import { useDidUpdate } from "../Hooks/useDidUpdate";

const SWIPE_BORDER = 30;

export const ScrollableElement = ({ children }: React.ComponentProps<'div'>) => {
    const scrollElement = useRef<HTMLDivElement>();
    const [activeChild, setActiveChild] = useState(-1);
    const [scrollElementLeft, setLeft] = useState(0);
    const [movStartX, setMovStartX] = useState(0);
    const [idTouch, setIdTouch] = useState(-1);
    let childrenElements = [];
    for (let index = 0; index < Children.count(children); index++) {
        childrenElements.push(useRef());
    }

    const scrollToActiveElement = () => {
        const rect = childrenElements[activeChild].current.getBoundingClientRect();
        const scrollRect = scrollElement.current.getBoundingClientRect();
        setLeft(scrollRect.left - rect.left - rect.width / 2);
    }

    const scrollToIndex = (index: number) => {
        index = Math.min(Math.max(index, 0), Children.count(children) - 1);
        setActiveChild(index);
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setMovStartX(e.targetTouches[0].clientX);
        setIdTouch(e.targetTouches[0].identifier);
    }

    const handleTouch = (e: React.TouchEvent) => {
        if (idTouch !== -1) {
            if (e.touches[idTouch].clientX - movStartX > SWIPE_BORDER) {
                scrollToIndex(activeChild - 1);
                setIdTouch(-1);
            }
            if (e.touches[idTouch].clientX - movStartX < -SWIPE_BORDER) {
                scrollToIndex(activeChild + 1);
                setIdTouch(-1);
            }
        }
    }

    useDidUpdate(() => {
        scrollToActiveElement();
    }, [activeChild]);

    useEffect(() => {
        scrollToIndex(0);
    }, []);

    return (
        <div ref={scrollElement} className={Styles.scrollableElement}
            onTouchStart={handleTouchStart} onTouchMove={handleTouch}
            style={{ left: scrollElementLeft }}>
            {Children.map(children, (child, index) => {
                return (
                    <div ref={childrenElements[index]} onClick={() => scrollToIndex(index)}>
                        {child}
                    </div>
                )
            })}
        </div >
    )
}