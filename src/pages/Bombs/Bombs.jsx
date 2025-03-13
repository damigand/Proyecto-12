import "./Bombs.css";
import CellsPanel from "../../components/CellsPanel/CellsPanel";
import BombsActions from "../../components/BombsActions/BombsActions";
import { useReducer } from "react";
import { reducer, initialState } from "./game";

const Bombs = () => {
    console.log("Bombs render.");

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    return (
        <div id="bombs">
            <CellsPanel
                gameState={state.gameState}
                isPlaying={state.isPlaying}
                dispatch={dispatch}
                isWin={state.win}
                isLoss={state.loss}
            />
            <BombsActions dispatch={dispatch} />
        </div>
    );
};

export default Bombs;
