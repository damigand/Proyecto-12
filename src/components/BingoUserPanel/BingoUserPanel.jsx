import { memo, useCallback } from "react";
import "./BingoUserPanel.css";
import BingoUserNumber from "../BingoUserNumber/BingoUserNumber";

const BingoUserPanel = memo(({ dispatch, isPlaying, userNumbers }) => {
    console.log("BingoUserPanel render.");

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

    return (
        <div className="bingo-user-panel">
            {!isPlaying && <button onClick={toggle}>Start bingo</button>}
            {isPlaying && (
                <ul className="bingo-user-numbers">
                    {userNumbers.map((number, index) => {
                        return <BingoUserNumber key={index} number={number} crossNumber={crossNumber} />;
                    })}
                </ul>
            )}
        </div>
    );
});

export default BingoUserPanel;
