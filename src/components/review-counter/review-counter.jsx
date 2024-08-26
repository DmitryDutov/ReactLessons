import { Counter } from "../counter/counter.jsx";

export const ReviewCounter = ({rating, onRateChange}) => {
    
    const handleIncr = () => {
        if (rating < 5) {
            onRateChange(rating + 1)
        }
    };

    const handleDecr = () => {
        if (rating > 1) {
            onRateChange(rating - 1)
        }
    };

    return(
        <div>
            <Counter 
                value={rating}
                onIncrease={onRateChange}
                onDecrease={onRateChange} />
        </div>
    )
}
