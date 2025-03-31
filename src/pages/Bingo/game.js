export const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME": {
            const newUserNumbers = generateNumbers(state.userNumbers.length);

            return {
                ...state,
                userNumbers: state.userNumbers.map((number, index) => {
                    if (number.number == newUserNumbers[index] && !number.seen && !number.crossed)
                        return number;

                    return { ...number, number: newUserNumbers[index], seen: false, crossed: false };
                }),
                isPlaying: true,
                isBingo: false,
                isFinished: false,
                numbersLeft: Array.from({ length: 40 }, (_, i) => i + 1),
                currentNumber: 0,
                previousNumber: 0
            };
        }
        case "NEXT_NUMBER": {
            const numberIndex = Math.floor(Math.random() * state.numbersLeft.length);
            const newNumber = state.numbersLeft[numberIndex];
            const newNumbersLeft = state.numbersLeft.filter((number) => number != newNumber);

            const newState = {
                ...state,
                currentNumber: newNumber || state.currentNumber,
                previousNumber: state.currentNumber || state.previousNumber,
                userNumbers: state.userNumbers.map((number) => {
                    if (number.number == newNumber) return { ...number, seen: true };

                    return number;
                }),
                numbersLeft: newNumbersLeft,
                isFinished: newNumbersLeft.length < 1 ? true : false
            };

            return newState;
        }
        case "CROSS_NUMBER": {
            const { userNumber } = action.payload;

            const newState = {
                ...state,
                userNumbers: state.userNumbers.map((number, index) => {
                    if (number.number == userNumber) return { ...number, crossed: !number.crossed };

                    return number;
                })
            };

            newState.isBingo = checkBingo(newState);

            return newState;
        }
        case "BINGO": {
            return { ...state, isFinished: true };
        }
    }
};

const checkBingo = (state) => {
    const numbersLeft = state.numbersLeft;
    const userNumbers = state.userNumbers;

    return !userNumbers.some((number) => numbersLeft.includes(number.number) || !number.crossed);
};

const generateNumbers = (length) => {
    const numbers = new Set();
    while (numbers.size < length) {
        numbers.add(Math.round(Math.random() * 40));
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
    isFinished: false,
    gameNumbers: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    ],
    numbersLeft: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
        29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
    ]
};
