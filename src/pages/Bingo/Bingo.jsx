import "./Bingo.css";
import NumberSection from "../../components/NumberSection/NumberSection";
import NumberHistory from "../../components/NumberHistory/NumberHistory";
import BingoUserPanel from "../../components/BingoUserPanel/BingoUserPanel";
import { useReducer, useEffect } from "react";
import { initialState, reducer } from "./game";
import useBingoTimer from "../../hooks/useBingoTimer";

const Bingo = () => {
    console.log("Bingo render.");

    const [state, dispatch] = useReducer(reducer, initialState);
    const [startBingoTimer, stopBingoTimer] = useBingoTimer(dispatch);

    console.log(state);

    useEffect(() => {
        if (state.isPlaying) {
            startBingoTimer();
        }

        if (state.isFinished || !state.isPlaying) {
            stopBingoTimer();
        }

        if (state.isBingo) {
            dispatch({
                type: "BINGO"
            });
        }
    }, [state.isPlaying, state.isBingo, state.isFinished]);

    return (
        <div id="bingo">
            <NumberSection
                current={state.currentNumber}
                previous={state.previousNumber}
                isPlaying={state.isPlaying}
                isFinished={state.isFinished}
            />
            <NumberHistory gameNumbers={state.gameNumbers} numbersLeft={state.numbersLeft} />
            <BingoUserPanel
                dispatch={dispatch}
                isPlaying={state.isPlaying}
                userNumbers={state.userNumbers}
                isBingo={state.isBingo}
            />
        </div>
    );
};

export default Bingo;
