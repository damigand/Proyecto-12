import { memo } from "react";
import "./Cell.css";

const Cell = memo(({ bomb, index, handleClick }) => {
    console.log("Cell render: ", index);
    var text = "Cell";
    if (bomb.bomb && !bomb.isHidden) {
        text = "Bomb";
    }
    if (!bomb.bomb && !bomb.isHidden) {
        text = "Empty";
    }
    return (
        <div className="bomb" onClick={() => handleClick(index)}>
            {text}
        </div>
    );
});

export default Cell;
