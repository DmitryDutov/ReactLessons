import { useState } from "react";

export const useCount = ({minValue, maxValue, v}) => {
    const [value, setValue] = useState(v);

    const increment = () => {
        if (value >= maxValue)
            return;

        setValue(value + 1);
    }

    const decrement = () => {
        if (value <= minValue)
            return;

        setValue(value - 1);
    }

    return {
        value,
        increment,
        decrement,
    };
};
