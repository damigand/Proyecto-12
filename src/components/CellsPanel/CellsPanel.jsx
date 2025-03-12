import "./CellsPanel.css";
import Cell from "../Cell/Cell";
import { useCallback } from "react";

const CellsPanel = ({ gameState, isPlaying, dispatch }) => {
    console.log("Render BombsPanel.");

    const revealCell = useCallback((index) => {
        dispatch({
            type: "REVEAL_CELL",
            payload: {
                revealIndex: index
            }
        });
    }, []);

    return (
        <div className="bomb-panel">
            {isPlaying ? (
                <div className="current-bomb-game">
                    {gameState.map((bomb, index) => {
                        return <Cell key={index} bomb={bomb} index={index} handleClick={revealCell} />;
                    })}
                </div>
            ) : (
                <div className="empty-bomb-game">
                    <span>No hay bombas... ¡De momento!</span>
                </div>
            )}
        </div>
    );
};

export default CellsPanel;
