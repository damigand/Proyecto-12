import { memo } from "react";
import "./NumberHistoryNumber.css";

const NumberHistoryNumber = memo(({ number, seen }) => {
    console.log("NumberHistoryNumber render:", number);
    return <div className={`bingo-history-number${seen ? " seen" : ""}`}>{number}</div>;
});

export default NumberHistoryNumber;
