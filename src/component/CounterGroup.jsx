import React from "react";
import Counter from "./Counter";

const CounterGroup = (props) => {
    const counters = [];
    const size = props.size;

    console.log("groupSize", size);

    for (let i = 0; i < size; i++) {
        counters.push(
            <Counter key={i}/>
        );
    }
    return (
        <div>
            {counters}
        </div>
    )
}

export default CounterGroup;