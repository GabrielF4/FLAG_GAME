import { useEffect } from "react";

export function useKeyboardShortcut(key, callback) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === key) callback();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [key, callback]);
}
