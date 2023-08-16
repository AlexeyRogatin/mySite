import Styles from "./Hooks.module.scss";

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40, 32, 33, 34, 35, 36];

const preventDefault = (e: Event) => {
    e.preventDefault();
}

const preventDefaultForScrollKeys = (e: KeyboardEvent) => {
    if (keys.includes(e.keyCode)) {
        preventDefault(e);
    }
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } as EventListenerOptions : false;

export const useDisableScroll = () => {
    window.addEventListener('wheel', preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    const body = document.body;
    body.style.setProperty('overflow-y', 'scroll');
    body.style.setProperty('inline-size', '100%');
    body.style.setProperty('top', -(document.documentElement.scrollTop) + "px");
    body.style.setProperty('position', 'fixed');
}

export const useEnableScroll = () => {
    window.removeEventListener('wheel', preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    const body = document.body;
    body.style.removeProperty('overflow-y');
    body.style.removeProperty('inline-size');
    body.style.removeProperty('top');
    body.style.removeProperty('position');
}