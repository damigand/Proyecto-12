import { memo, useCallback, useRef } from "react";
import "./BombsActions.css";

const BombsActions = memo(({ dispatch }) => {
    console.log("Render BombsActions.");

    const inputRef = useRef(null);

    const setBombs = useCallback(() => {
        if (!inputRef.current || inputRef.current?.value < 1) return;
        dispatch({
            type: "START_GAME",
            payload: {
                bombs: Number(inputRef.current.value)
            }
        });
    });

    return (
        <div className="bombs-actions">
            <label htmlFor="bomb-number">
                <input type="number" id="bomb-number" name="bomb-number" ref={inputRef} />
            </label>
            <button type="button" onClick={setBombs}>
                Jugar
            </button>
        </div>
    );
});

export default BombsActions;
