import { memo } from "react";
import "./Cell.css";

const Cell = memo(({ mine, index, handleClick, delay, isFinished }) => {
    console.log("Cell render: ", index);
    var icon = <i className="bx bx-question-mark icon"></i>;
    if (mine.mine && !mine.isHidden) {
        icon = <i className="bx bxs-bomb icon bomb"></i>;
    }
    if (!mine.mine && !mine.isHidden) {
        icon = <i className="bx bx-check icon empty"></i>;
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
