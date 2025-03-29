import "./CellsPanel.css";
import Cell from "../Cell/Cell";
import { useCallback } from "react";

const CellsPanel = ({ gameState, isPlaying, isWin, isLoss, dispatch }) => {
    console.log("Render MinesPanel.");

    const revealCell = useCallback((index, isMine) => {
        if (isMine) {
            dispatch({
                type: "LOSE_GAME",
                payload: {
                    mineIndex: index
                }
            });
        } else {
            dispatch({
                type: "REVEAL_CELL",
                payload: {
                    revealIndex: index
                }
            });
        }
    }, []);

    return (
        <div className={`mine-panel${isPlaying ? " playing" : ""}`}>
            {isPlaying && (
                <div className="current-mine-game">
                    {gameState.map((mine, index) => {
                        return (
                            <Cell
                                key={index}
                                mine={mine}
                                index={index}
                                handleClick={revealCell}
                                delay={(index + 1) * 20} //Delay de 20 por cada celda para una animación chula.
                            />
                        );
                    })}
                </div>
            )}

            {!isPlaying && (
                <div className="mine-overlay">
                    {!isWin && !isLoss && (
                        <div className="mine-empty-overlay">
                            <span>No hay minas... ¡De momento!</span>
                        </div>
                    )}
                    {isWin && (
                        <div className="mine-win-overlay">
                            <span>GANASTE!</span>
                        </div>
                    )}
                    {isLoss && (
                        <div className="mine-loss-overlay">
                            <span>PERDISTE!</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CellsPanel;
