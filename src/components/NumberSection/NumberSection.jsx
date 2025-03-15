import { memo } from "react";
import "./NumberSection.css";

//Se usa memo para evitar re-renders cuando el usuario tacha números.

const NumberSection = memo(({ current, previous }) => {
    console.log("NumberSection render.");
    return (
        <div className="bingo-number-section">
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
    );
});

export default NumberSection;
