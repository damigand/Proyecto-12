import "./Settings.css";

import { SettingsContext } from "../../components/SettingsProvider/SettingsProvider";
import { useContext } from "react";
import useMessage from "../../hooks/useMessages";

const Settings = () => {
    console.log("Settings render.");

    const context = useContext(SettingsContext);

    const [showMessage, changeMessage] = useMessage("Guardado.");

    const cambiar = () => {
        showMessage();
    };

    return (
        <div id="settings">
            <div className="settings-theme">
                <button onClick={() => context.setTheme(false)}>Light mode</button>
                <button onClick={() => context.setTheme(true)}>Dark mode</button>
                <div className="settings-bingo-timer">
                    <label htmlFor="bingoTimerSetting" id="bingo-setting">
                        Bingo timer per number (ms)
                        <input type="number" />
                        <button type="button" className="save-bingo-timer" onClick={cambiar}>
                            Guardar
                        </button>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Settings;
