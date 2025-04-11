import { memo, useContext } from "react";
import "./NumberSection.css";
import { SettingsContext } from "../SettingsProvider/SettingsProvider.jsx";

//Se usa memo para evitar re-renders cuando el usuario tacha números.

const NumberSection = memo(({ current, previous, isPlaying, isFinished }) => {
    const { bingoTimer } = useContext(SettingsContext);

    return (
        <div className="bingo-number-section" style={{ "--animation-duration": `${bingoTimer}ms` }}>
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
            <div className={`bingo-section-timer${isPlaying && !isFinished ? " active" : ""}`}></div>
        </div>
    );
});

export default NumberSection;
