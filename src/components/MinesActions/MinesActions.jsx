import { memo, useCallback, useRef } from "react";
import "./MinesActions.css";

const MinesActions = memo(({ dispatch, isPlaying, squaresLeft, squaresCleared }) => {
    console.log("Render MinesActions.");

    const inputRef = useRef(null);

    const setMines = useCallback(() => {
        if (!inputRef.current || inputRef.current?.value < 1) return;
        dispatch({
            type: "START_GAME",
            payload: {
                mines: Number(inputRef.current.value)
            }
        });
    });

    const checkNumber = (e) => {
        if (e.target?.value > 25) {
            e.target.value = 25;
            e.target.classList.add("overload");
            setTimeout(() => {
                e.target.classList.remove("overload");
            }, 1000);
        }
    };

    return (
        <>
            {!isPlaying && (
                <div className="mines-actions">
                    <label htmlFor="mine-number">
                        <span>Number of mines</span>
                        <input
                            type="number"
                            id="mine-number"
                            name="mine-number"
                            ref={inputRef}
                            onChange={(e) => checkNumber(e)}
                        />
                    </label>
                    <button type="button" className="play-mines-button" onClick={setMines}>
                        Jugar
                    </button>
                </div>
            )}
            {isPlaying && (
                <div className="squares-info">
                    <div className="squares-cleared">Cleared: {squaresCleared}</div>
                    <div className="squares-left">Left: {squaresLeft}</div>
                </div>
            )}
        </>
    );
});

export default MinesActions;
