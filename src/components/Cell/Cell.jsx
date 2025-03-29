import { memo } from "react";
import "./Cell.css";

const Cell = memo(({ mine, index, handleClick, delay }) => {
    console.log("Cell render: ", index);
    var iconClass = "Cell";
    if (mine.mine && !mine.isHidden) {
        iconClass = "Mine";
    }
    if (!mine.mine && !mine.isHidden) {
        iconClass = "Empty";
    }
    return (
        <div
            style={{ animationDelay: `${delay}ms` }}
            className="mine"
            onClick={() => {
                handleClick(index, mine.mine);
            }}></div>
    );
});

export default Cell;
