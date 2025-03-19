import { useCallback } from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";

const contextStructure = {
    theme: false, //false = light, true: dark
    bingoTimer: 0,
    primary: "",
    secondary: ""
};

export const SettingsContext = createContext(contextStructure);

const SettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || false);
    const [bingoTimer, setBingoTimer] = useState(() => localStorage.getItem("bingoTimer") || 1000);
    const [primary, setPrimary] = useState(() => localStorage.getItem("primary") || "primaryColor");
    const [secondary, setSecondary] = useState(() => localStorage.getItem("secondary") || "secondaryColor");

    //Values que actúa como "helper".
    const values = {
        theme: theme,
        bingoTimer: bingoTimer,
        primary: primary,
        secondary: secondary,
        setTheme: setTheme,
        setBingoTimer: setBingoTimer,
        setPrimary: setPrimary,
        setSecondary: setSecondary
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
