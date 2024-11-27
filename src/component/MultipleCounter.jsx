import CounterGroupGenerator from "./CounterGroupGenerator";
import CounterGroup from "./CounterGroup";
import React from "react";

const MultipleCounter = () => {
    return (
        <div>
            <CounterGroupGenerator/>
            <CounterGroup/>
        </div>

    )
}

export default MultipleCounter;