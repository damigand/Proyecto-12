import { useState, useEffect } from "react";

const ms = 2000;

export default function useBingoTimer(dispatch) {
    const [playing, setPlaying] = useState(false);

    //Use effect que pone en marcha o para el intervalo de tiempo
    //De los números en función del estado de la partida.
    useEffect(() => {
        if (!playing) return;

        const interval = setInterval(() => {
            dispatch({
                type: "NEXT_NUMBER"
            });
        }, ms);

        return () => clearInterval(interval);
    }, [playing]);

    const startBingoTimer = () => {
        setPlaying(true);
    };

    const stopBingoTimer = () => {
        setPlaying(false);
    };

    return [startBingoTimer, stopBingoTimer];
}
