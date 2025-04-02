import "./Mines.css";
import CellsPanel from "../../components/CellsPanel/CellsPanel";
import MinesActions from "../../components/MinesActions/MinesActions";
import { useReducer } from "react";
import { reducer, initialState } from "./game";

const Mines = () => {
    console.log("Mines render.");

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    return (
        <div id="mines">
            <CellsPanel
                gameState={state.gameState}
                isPlaying={state.isPlaying}
                dispatch={dispatch}
                isFinished={state.isFinished}
            />
            <MinesActions
                dispatch={dispatch}
                isPlaying={state.isPlaying}
                squaresCleared={state.squaresCleared}
                squaresLeft={state.squaresLeft}
                isFinished={state.isFinished}
                isLoss={state.isLoss}
                isWin={state.isWin}
            />
        </div>
    );
};

export default Mines;
