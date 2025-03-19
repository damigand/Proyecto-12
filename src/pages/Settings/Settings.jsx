import { useRef } from "react";
import "./Settings.css";

import { SettingsContext } from "../../components/SettingsProvider/SettingsProvider";
import { useContext } from "react";

const Settings = () => {
    console.log("Settings render.");

    const context = useContext(SettingsContext);

    const themeRef = useRef(context.theme);
    const bingoRef = useRef(context.bingoTimer);
    const primaryRef = useRef(context.primary);
    const secondaryRef = useRef(context.secondary);

    return (
        <div id="settings">
            <div className="settings-theme">
                <button onClick={() => context.setTheme(false)}>Set light</button>
                <button onClick={() => context.setTheme(true)}>Set dark</button>
            </div>
        </div>
    );
};

export default Settings;
