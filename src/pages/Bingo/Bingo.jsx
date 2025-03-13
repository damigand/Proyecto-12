import "./Bingo.css";
import NumberSection from "../../components/NumberSection/NumberSection";
import NumberHistory from "../../components/NumberHistory/NumberHistory";
import UserNumbers from "../../components/BingoUserPanel/BingoUserPanel";
import { useReducer, useEffect, useCallback, useMemo } from "react";
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
        } else {
            stopBingoTimer();
        }
    }, [state?.isPlaying]);

    return (
        <div id="bingo">
            <NumberSection current={state.currentNumber} previous={state.previousNumber} />
            <NumberHistory />
            <UserNumbers dispatch={dispatch} />
        </div>
    );
};

export default Bingo;
