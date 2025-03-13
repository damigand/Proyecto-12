import "./CellsPanel.css";
import Cell from "../Cell/Cell";
import { useCallback } from "react";

const CellsPanel = ({ gameState, isPlaying, isWin, isLoss, dispatch }) => {
    console.log("Render BombsPanel.");

    const revealCell = useCallback((index, isBomb) => {
        if (isBomb) {
            dispatch({
                type: "LOSE_GAME",
                payload: {
                    bombIndex: index
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

    console.log(typeof isWin, typeof isLoss);

    return (
        <div className="bomb-panel">
            <div className="current-bomb-game">
                {gameState.map((bomb, index) => {
                    return <Cell key={index} bomb={bomb} index={index} handleClick={revealCell} />;
                })}
            </div>
            {!isPlaying && (
                <div className="bomb-overlay">
                    {!isWin && !isLoss && (
                        <div className="bomb-empty-overlay">
                            <span>No hay bombas... ¡De momento!</span>
                        </div>
                    )}
                    {isWin && (
                        <div className="bomb-win-overlay">
                            <span>GANASTE!</span>
                        </div>
                    )}
                    {isLoss && (
                        <div className="bomb-loss-overlay">
                            <span>PERDISTE!</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CellsPanel;
