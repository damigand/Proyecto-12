import { memo } from "react";
import "./BingoUserNumber.css";

const BingoUserNumber = memo(({ number, crossNumber }) => {
    return (
        <li
            className={`bingo-user-number${number.seen && !number.crossed ? " can-cross" : ""}${
                number.crossed ? " crossed" : ""
            }`}
            onClick={() => {
                if (number.seen && !number.crossed) crossNumber(number.number);
            }}>
            {number.number}
        </li>
    );
});

export default BingoUserNumber;
