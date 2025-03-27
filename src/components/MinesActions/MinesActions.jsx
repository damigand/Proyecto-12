import { memo, useCallback, useRef } from "react";
import "./MinesActions.css";

const MinesActions = memo(({ dispatch }) => {
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

    return (
        <div className="mines-actions">
            <label htmlFor="mine-number">
                <input type="number" id="mine-number" name="mine-number" ref={inputRef} />
            </label>
            <button type="button" onClick={setMines}>
                Jugar
            </button>
        </div>
    );
});

export default MinesActions;
