import { memo } from "react";
import "./BingoUserNumber.css";

const BingoUserNumber = memo(({ number, crossNumber }) => {
    console.log("UserNumber render:", number.number);
    return (
        <li
            className={`bingo-user-number${number.seen && !number.crossed ? " can-cross" : ""}${
                number.crossed ? " crossed" : ""
            }`}
            onClick={() => crossNumber(number.number)}>
            {number.number}
        </li>
    );
});

export default BingoUserNumber;
