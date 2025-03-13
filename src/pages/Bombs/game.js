const cellNumbers = 25;

export const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME":
            state.bombs = 0;
            state.win = false;
            state.loss = false;
            state.isPlaying = true;
            state.squaresCleared = 0;

            const { bombs } = action.payload;
            const newCells = calculateCells(bombs);

            //Si una celda está en el mismo estado que estaba en la anterior partida,
            //Su celda no se re-renderiza.
            return {
                ...state,
                bombs: bombs,
                isPlaying: true,
                squaresLeft: cellNumbers - bombs,
                gameState: state.gameState.map((cell, index) => {
                    if (cell.bomb == newCells[index].bomb && cell.isHidden == newCells[index].isHidden) {
                        return cell;
                    } else {
                        return { ...cell, ...newCells[index] };
                    }
                })
            };
        case "REVEAL_CELL":
            if (!state.isPlaying) return state;
            const { revealIndex } = action.payload;

            //Me guardo la celda clicada para identificar
            //Si ya estaba descubierta o no.
            let clickedCell;

            //Evitamos re-renders si la celda ya está descubierta, y descubrimos si no lo está.
            const newState = {
                ...state,
                gameState: state.gameState.map((cell, index) => {
                    if (index == revealIndex) {
                        clickedCell = cell;
                        if (clickedCell.isHidden) return { ...cell, isHidden: false };
                    }
                    return cell;
                })
            };

            console.log("clicked cell: ", clickedCell);

            //Si la casilla no estaba revelada cambiamos el estado.
            if (clickedCell.isHidden) {
                newState.squaresCleared = state.squaresCleared + 1;
                newState.squaresLeft = state.squaresLeft - 1;
            }

            if (newState.squaresLeft == 0) {
                newState.win = true;
                newState.isPlaying = false;
            }
            return newState;
        case "LOSE_GAME":
            if (!state.isPlaying) return state;

            const { bombIndex } = action.payload;

            const finalState = {
                ...state,
                gameState: state.gameState.map((cell, index) => {
                    if (index == bombIndex && cell.isHidden) return { ...cell, isHidden: false };
                    return cell;
                })
            };

            finalState.loss = true;
            finalState.isPlaying = false;

            return finalState;
        default:
            return state;
    }
};

const calculateCells = (bombs) => {
    let newCells = [];

    for (var row = 1; row < 6; row++) {
        for (var col = 1; col < 6; col++) {
            newCells.push({ row: row, col: col, bomb: false, isHidden: true });
        }
    }

    let currentBombs = [];
    for (var a = 0; a < bombs; a++) {
        const index = Math.floor(Math.random() * 25);
        if (currentBombs.includes(index)) {
            a--;
        } else {
            newCells[index].bomb = true;
            currentBombs.push(index);
        }
    }

    return newCells;
};

export const initialState = {
    isPlaying: false,
    bombs: 0,
    squaresCleared: 0,
    squaresLeft: 0,
    win: false,
    loss: false,
    gameState: [
        { row: 1, col: 1, bomb: false, isHidden: true },
        { row: 1, col: 2, bomb: false, isHidden: true },
        { row: 1, col: 3, bomb: false, isHidden: true },
        { row: 1, col: 4, bomb: false, isHidden: true },
        { row: 1, col: 5, bomb: false, isHidden: true },
        { row: 2, col: 1, bomb: false, isHidden: true },
        { row: 2, col: 2, bomb: false, isHidden: true },
        { row: 2, col: 3, bomb: false, isHidden: true },
        { row: 2, col: 4, bomb: false, isHidden: true },
        { row: 2, col: 5, bomb: false, isHidden: true },
        { row: 3, col: 1, bomb: false, isHidden: true },
        { row: 3, col: 2, bomb: false, isHidden: true },
        { row: 3, col: 3, bomb: false, isHidden: true },
        { row: 3, col: 4, bomb: false, isHidden: true },
        { row: 3, col: 5, bomb: false, isHidden: true },
        { row: 4, col: 1, bomb: false, isHidden: true },
        { row: 4, col: 2, bomb: false, isHidden: true },
        { row: 4, col: 3, bomb: false, isHidden: true },
        { row: 4, col: 4, bomb: false, isHidden: true },
        { row: 4, col: 5, bomb: false, isHidden: true },
        { row: 5, col: 1, bomb: false, isHidden: true },
        { row: 5, col: 2, bomb: false, isHidden: true },
        { row: 5, col: 3, bomb: false, isHidden: true },
        { row: 5, col: 4, bomb: false, isHidden: true },
        { row: 5, col: 5, bomb: false, isHidden: true }
    ]
};
