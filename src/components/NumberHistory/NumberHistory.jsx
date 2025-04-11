import NumberHistoryNumber from "../NumberHistoryNumber/NumberHistoryNumber";
import "./NumberHistory.css";

const NumberHistory = ({ gameNumbers, numbersLeft }) => {
    return (
        <div className="bingo-number-history">
            {gameNumbers.map((number, index) => {
                return (
                    <NumberHistoryNumber key={index} number={number} seen={!numbersLeft.includes(number)} />
                );
            })}
        </div>
    );
};

export default NumberHistory;
