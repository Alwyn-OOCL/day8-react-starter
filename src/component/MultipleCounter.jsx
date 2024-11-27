import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";
import React, {useState} from "react";
import "./MultipleCounter.css";
import CounterGroupSum from "./CounterGroupSum";

const MultipleCounter = () => {
    const [counterSize, setCounterSize] = useState(0);
    const [totalCounts, setTotalCounts] = useState(0);

    const handleCounterSizeChange = (size) => {
        setCounterSize(size);
    }

    const handleCounterValuesChange = (newValues) => {
        setTotalCounts(newValues);
    };

    return (
        <div className={"multiple-counter-wrapper"}>
            <CounterGroupGenerator
                onCounterSizeChange={handleCounterSizeChange}
                onReset={handleCounterValuesChange}
                counterSize={counterSize}
            />
            <CounterGroupSum
                sum={totalCounts}
            />
            <CounterGroup
                size={counterSize}
                onValueChange={handleCounterValuesChange}
            />
        </div>

    )
}

export default MultipleCounter;