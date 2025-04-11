import { memo } from "react";
import "./NumberHistoryNumber.css";

const NumberHistoryNumber = memo(({ number, seen }) => {
    return <div className={`bingo-history-number${seen ? " seen" : ""}`}>{number}</div>;
});

export default NumberHistoryNumber;
