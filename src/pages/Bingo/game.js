export const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME":
            const newUserNumbers = generateNumbers(state.userNumbers.length);

            return {
                ...state,
                userNumbers: state.userNumbers.map((number, index) => {
                    if (number.number == newUserNumbers[index] && !number.seen && !number.crossed)
                        return number;

                    return { ...number, number: newUserNumbers[index], seen: false, crossed: false };
                }),
                isPlaying: true
            };
        case "NEXT_NUMBER":
            return state;
        case "CROSS_NUMBER":
            const { userNumber } = action.payload;

            return {
                ...state,
                userNumbers: state.userNumbers.map((number, index) => {
                    if (number.number == userNumber) return { ...number, crossed: !number.crossed };

                    return number;
                })
            };
        case "BINGO":
            return state;
    }
};

const generateNumbers = (length) => {
    const numbers = new Set();
    while (numbers.size < length) {
        numbers.add(Math.floor(Math.random() * 41));
    }

    return Array.from(numbers);
};

export const initialState = {
    currentNumber: 0,
    previousNumber: 0,
    userNumbers: [
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
    gameNumbers: [
        { number: 1, seen: false },
        { number: 2, seen: false },
        { number: 3, seen: false },
        { number: 4, seen: false },
        { number: 5, seen: false },
        { number: 6, seen: false },
        { number: 7, seen: false },
        { number: 8, seen: false },
        { number: 9, seen: false },
        { number: 10, seen: false },
        { number: 11, seen: false },
        { number: 12, seen: false },
        { number: 13, seen: false },
        { number: 14, seen: false },
        { number: 15, seen: false },
        { number: 16, seen: false },
        { number: 17, seen: false },
        { number: 18, seen: false },
        { number: 19, seen: false },
        { number: 20, seen: false },
        { number: 21, seen: false },
        { number: 22, seen: false },
        { number: 23, seen: false },
        { number: 24, seen: false },
        { number: 25, seen: false },
        { number: 26, seen: false },
        { number: 27, seen: false },
        { number: 28, seen: false },
        { number: 29, seen: false },
        { number: 30, seen: false },
        { number: 31, seen: false },
        { number: 32, seen: false },
        { number: 33, seen: false },
        { number: 34, seen: false },
        { number: 35, seen: false },
        { number: 36, seen: false },
        { number: 37, seen: false },
        { number: 38, seen: false },
        { number: 39, seen: false },
        { number: 50, seen: false }
    ]
};
