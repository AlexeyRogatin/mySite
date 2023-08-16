import React, { useEffect, useRef } from 'react';

export const useDidUpdate = (func: React.EffectCallback, dependancies: React.DependencyList) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, dependancies);
}