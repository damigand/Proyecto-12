import { useState } from "react";
import { createContext, useEffect } from "react";

const contextStructure = {
    theme: null,
    bingoTimer: 0,
    setTheme: () => null,
    setBingoTimer: () => null
};

export const SettingsContext = createContext(contextStructure);

const SettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") === "true" || false);
    const [bingoTimer, setBingoTimer] = useState(() => localStorage.getItem("bingoTimer") || 1000);

    //Values que actúa como "helper".
    const values = {
        theme: theme,
        bingoTimer: bingoTimer,
        setTheme: setTheme,
        setBingoTimer: setBingoTimer
    };

    //useEffect que guarda en localStorage los ajustes gracias a values.
    useEffect(() => {
        for (const key in contextStructure) {
            localStorage.setItem(key, values[key]);
        }
    }, [theme]);

    return <SettingsContext.Provider value={{ ...values }}>{children}</SettingsContext.Provider>;
};

export default SettingsProvider;
