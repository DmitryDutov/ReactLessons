import { useCount } from "../counter/use-counter.js";
import { Counter } from "../counter/counter.jsx";

export const MenuCounter = () => {
    const {value, incr, decr } = useCount({minValue: 0, maxValue: 5, v: 0})

    return <Counter 
        value={value}
        onIncrease={incr}
        onDecrease={decr}
    />
}