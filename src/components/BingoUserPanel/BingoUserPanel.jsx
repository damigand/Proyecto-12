import { memo, useCallback } from "react";
import "./BingoUserPanel.css";
import BingoUserNumber from "../BingoUserNumber/BingoUserNumber";

const BingoUserPanel = memo(({ dispatch, isPlaying, isBingo, userNumbers }) => {
    const toggle = () => {
        dispatch({
            type: "START_GAME"
        });
    };

    const crossNumber = useCallback((number) => {
        dispatch({
            type: "CROSS_NUMBER",
            payload: {
                userNumber: number
            }
        });
    }, []);

    const playAgain = useCallback(() => {
        dispatch({
            type: "START_GAME"
        });
    }, []);

    return (
        <div className={`bingo-user-panel${isPlaying ? " playing" : ""}`}>
            {!isPlaying && (
                <button onClick={toggle} className="start-bingo-button">
                    Start bingo
                </button>
            )}
            {isPlaying && !isBingo && (
                <ul className="bingo-user-numbers">
                    {userNumbers.map((number, index) => {
                        return <BingoUserNumber key={index} number={number} crossNumber={crossNumber} />;
                    })}
                </ul>
            )}
            {isPlaying && isBingo && (
                <div className="bingo-user-finished">
                    <h3>BINGO!</h3>
                    <div className="bingo-winning-numbers">
                        <span>Winning numbers:</span>
                        <ul>
                            {userNumbers.map((number, index) => {
                                return <li key={index}>{number.number}</li>;
                            })}
                        </ul>
                    </div>
                    <button className="bingo-again-button" onClick={playAgain}>
                        Play again
                    </button>
                </div>
            )}
        </div>
    );
});

export default BingoUserPanel;
