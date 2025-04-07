import { memo } from "react";
import "./Cell.css";

const Cell = memo(({ mine, index, handleClick, delay, isFinished }) => {
    console.log("Cell render: ", index);
    var icon = <i className="bx bx-question-mark icon"></i>;

    if (!mine.isHidden) {
        icon = <i className={`bx bx${mine.mine ? "s-bomb icon bomb" : "-check icon empty"}`}></i>;
    }

    if (mine.isHidden && isFinished) {
        icon = <i className={`bx bx${mine.mine ? "s-bomb revealed bomb" : "-check revealed"}`}></i>;
    }

    return (
        <div
            style={{ animationDelay: `${delay}ms` }}
            className="mine"
            onClick={() => {
                if (!isFinished) handleClick(index, mine.mine);
            }}>
            {icon}
        </div>
    );
});

export default Cell;
