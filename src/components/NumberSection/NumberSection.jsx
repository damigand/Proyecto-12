import { memo, useContext } from "react";
import "./NumberSection.css";
import { SettingsContext } from "../SettingsProvider/SettingsProvider.jsx";

//Se usa memo para evitar re-renders cuando el usuario tacha números.

const NumberSection = memo(({ current, previous, isPlaying }) => {
    console.log("NumberSection render.");

    const { bingoTimer } = useContext(SettingsContext);

    return (
        <div className="bingo-number-section">
            <div className="bingo-numbers">
                {previous != 0 && (
                    <div key={previous} className="bingo-previous-number">
                        {previous}
                    </div>
                )}
                {current != 0 && (
                    <div key={current} className="bingo-current-number">
                        {current}
                    </div>
                )}
            </div>
            <div
                className={`bingo-section-timer${isPlaying ? " active" : ""}`}
                style={{ "--animation-duration": `${bingoTimer}ms` }}></div>
        </div>
    );
});

export default NumberSection;
