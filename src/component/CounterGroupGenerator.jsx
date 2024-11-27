import Counter from "./Counter";
import {useState} from "react";

const CounterGroupGenerator = () => {
    const [size, setSize] = useState(0);

    const handleSizeChange = (event) => {
        console.log("enter handleSizeChange")
        if (event.target.value >= 0 && event.target.value <= 20) {
            setSize(event.target.value);
        }
    };

    const handleReset = () => {
        setSize(0);
    };


    return (
        <div className="input-container">
            <font>Size:</font>
            <input
                min={0}
                max={20}
                type="number"
                value={size}
                onChange={handleSizeChange}
            />
            <button onClick={handleReset}>Reset</button>
        </div>
)
}

export default CounterGroupGenerator;