import { memo } from "react";
import "./BingoUserPanel.css";

const UserNumbers = memo(({ dispatch }) => {
    console.log("UserNumbers render.");

    const toggle = () => {
        dispatch({
            type: "START_GAME"
        });
    };
    return (
        <div className="bingo-user-numbers">
            <button onClick={toggle}>toggle</button>
        </div>
    );
});

export default UserNumbers;
