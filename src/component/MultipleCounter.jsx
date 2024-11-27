import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";
import React, {useState} from "react";
import "./MultipleCounter.css";

const MultipleCounter = () => {
    const[counterSize, setCounterSize] = useState(0);

    const handleCounterSizeChange = (size) => {
        console.log(size);
        setCounterSize(size);
    }
    return (
        <div className={"multiple-counter-wrapper"}>
            <CounterGroupGenerator
                onCounterSizeChange={handleCounterSizeChange}
                counterSize={counterSize}
            />
            <CounterGroup size={counterSize}
            />
        </div>

    )
}

export default MultipleCounter;