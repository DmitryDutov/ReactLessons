import { useCount } from "./use-counter";

export const Counter = ({min, max}) => {
    const { value, increment, decrement } = useCount({minValue: min, maxValue: max});

    return (
        <div>
            <button onClick={increment}>+</button>
            {value}
            <button onClick={decrement}>-</button>
        </div>
    );
};
