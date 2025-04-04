import { memo, useCallback, useRef } from "react";
import "./MinesActions.css";

const maxMines = 24;

const MinesActions = memo(
    ({ dispatch, isPlaying, isFinished, isWin, isLoss, squaresLeft, squaresCleared }) => {
        console.log("Render MinesActions.");

        console.log("loss", isLoss, "win", isWin);

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
            if (e.target?.value > maxMines) {
                e.target.value = maxMines;
                e.target.classList.add("overload");
                setTimeout(() => {
                    e.target.classList.remove("overload");
                }, 1000);
            }
        };

        const playMinesAgain = () => {
            dispatch({
                type: "RESTART_MINES"
            });
        };

        return (
            <>
                {!isPlaying && (
                    <div className="mines-actions">
                        <label htmlFor="mine-number">
                            <span>Number of mines </span>
                            <span>(max. 24)</span>
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
                        <div className="squares-cleared">
                            <span className="squares-info-text">Squares cleared</span>
                            <div className="squares-info-container">
                                <span>{squaresCleared}</span>
                                <i className="bx bx-check"></i>
                            </div>
                        </div>
                        <div className="squares-left">
                            <span className="squares-info-text">Squares left</span>
                            <div className="squares-info-container">
                                <span>{squaresLeft}</span>
                                <i className="bx bx-question-mark"></i>
                            </div>
                        </div>
                        {isWin && (
                            <div className="mines-actions-win">
                                <h2>WIN</h2>
                            </div>
                        )}
                        {isLoss && (
                            <div className="mines-actions-loss">
                                <h2>LOSS</h2>
                            </div>
                        )}
                        {isFinished && (
                            <div className="mines-actions-finished">
                                <button className="mines-again-button" onClick={() => playMinesAgain()}>
                                    Play again
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </>
        );
    }
);

export default MinesActions;
