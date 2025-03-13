export const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME":
            return state;
        case "NEXT_NUMBER":
            return state;
        case "CROSS_NUMBER":
            return state;
        case "BINGO":
            return state;
    }
};

export const initialState = {
    currentNumber: 0,
    previousNumber: 0,
    playerNumbers: [
        { number: 0, seen: false, crossed: false },
        { number: 0, seen: false, crossed: false },
        { number: 0, seen: false, crossed: false },
        { number: 0, seen: false, crossed: false },
        { number: 0, seen: false, crossed: false },
        { number: 0, seen: false, crossed: false },
        { number: 0, seen: false, crossed: false },
        { number: 0, seen: false, crossed: false },
        { number: 0, seen: false, crossed: false },
        { number: 0, seen: false, crossed: false }
    ],
    isBingo: false,
    isPlaying: false,
    gameNumbers: [],
    numbersLeft: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    ]
};
