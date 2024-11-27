import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";
import React, {useState} from "react";

const MultipleCounter = () => {
    const[counterSize, setCounterSize] = useState(0);

    const handleCounterSizeChange = (size) => {
        console.log(size);
        setCounterSize(size);
    }
    return (
        <div>
            <CounterGroupGenerator onCounterSizeChange={handleCounterSizeChange}/>
            <CounterGroup size={counterSize}
            />
        </div>

    )
}

export default MultipleCounter;