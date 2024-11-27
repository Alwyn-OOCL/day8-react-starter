import React, {useEffect, useState} from "react";
import Counter from "./Counter";

const CounterGroup = (props) => {
    const counters = [];
    const size = props.size;

    const [countersValue, setCountersValue] = useState(Array(size).fill(0));

    const handleValueChange = (index, newValue) => {
        const updatedCounters = [...counters];
        updatedCounters[index] = newValue;
        setCountersValue(updatedCounters);
        // 计算所有计数器的总和
        const total = countersValue.reduce((sum, count) => sum + count);
        props.onValueChange(total);
    };

    for (let i = 0; i < size; i++) {
        counters.push(
            <Counter
                key={i}
                onValueChange={(newCount) => handleValueChange(i, newCount)}
            />
        );
    }
    return (
        <div>
            {counters}
        </div>
    )
}

export default CounterGroup;