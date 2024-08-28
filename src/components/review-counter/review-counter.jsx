import { Counter } from "../counter/counter.jsx"

export const ReviewCounter = ({ rating, onRatingChange }) => {

    const handleIncrease = () => {
        if (rating < 5) {
            onRatingChange(rating + 1);
        }
    };

    const handleDecrease = () => {
        if (rating > 1) {
            onRatingChange(rating - 1);
        }
    };

    return (
        <div>
            <Counter
                value={rating}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease} />
        </div>
    )
}

//import { useCount } from "../counter/use-counter.js";
//import { Counter } from "../counter/counter.jsx";

//export const ReviewCounter = ({ initialRating }) => {
//  const { value, increment, decrement } = useCount({
//    max: 5,
//    min: 1,
//    v: initialRating,
//  });

//  return (
//    <div>
//      <Counter value={value} onIncrease={increment} onDecrease={decrement} />
//    </div>
//  );
//};

