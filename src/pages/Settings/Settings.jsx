import "./Settings.css";

import { SettingsContext } from "../../components/SettingsProvider/SettingsProvider";
import { useContext, useEffect, useRef, useState } from "react";

const Settings = () => {
    console.log("Settings render.");

    const [timerError, setTimerError] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if (saved) {
            setTimeout(() => {
                setSaved(false);
            }, 1000);
        }
    }, [saved]);

    const context = useContext(SettingsContext);

    const timerRef = useRef(null);

    const saveTimer = () => {
        if (!timerRef.current || timerRef.current.value < 500) {
            setTimerError(true);
            return;
        }

        setTimerError(false);
        context.setBingoTimer(timerRef.current.value);
        setSaved(true);
    };

    return (
        <div id="settings">
            <div className="settings-theme">
                <button onClick={() => context.setTheme(false)}>
                    <i className={`bx bx${!context.theme ? "s" : ""}-sun`}></i>Light mode
                </button>
                <button onClick={() => context.setTheme(true)}>
                    <i className={`bx bx${context.theme ? "s" : ""}-moon`}></i>Dark mode
                </button>
                <div className="settings-bingo-timer">
                    <label htmlFor="bingoInput" id="bingo-setting" className={timerError ? "error" : ""}>
                        Bingo timer per number (ms)
                        <input type="number" ref={timerRef} id="bingoInput" />
                        <span className={`input-error${timerError ? " active" : ""}`}>
                            No puede ser menor a 500 ms.
                        </span>
                        <button type="button" className="save-bingo-timer" onClick={saveTimer}>
                            {!saved && "Guardar"}
                            {saved && (
                                <span className="settings-saved">
                                    <i className="bx bx-check"></i>
                                    Guardado
                                </span>
                            )}
                        </button>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Settings;
