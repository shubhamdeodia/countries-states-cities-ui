import { useEffect, useRef } from 'react';

function useUnmountEffect(callback: () => void): void {
    const callbackRef = useRef(callback);
    callbackRef.current = callback;

    useEffect(
        () => () => {
            const callbackFunction = callbackRef.current;

            if (!callbackFunction) {
                return;
            }

            callbackFunction();
        },
        []
    );
}

export { useUnmountEffect };
