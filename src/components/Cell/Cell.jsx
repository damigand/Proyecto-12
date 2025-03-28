import { memo } from "react";
import "./Cell.css";

const Cell = memo(({ mine, index, handleClick }) => {
    console.log("Cell render: ", index);
    var text = "Cell";
    if (mine.mine && !mine.isHidden) {
        text = "Mine";
    }
    if (!mine.mine && !mine.isHidden) {
        text = "Empty";
    }
    return (
        <div
            className="mine"
            onClick={() => {
                handleClick(index, mine.mine);
            }}>
            {text}
        </div>
    );
});

export default Cell;
