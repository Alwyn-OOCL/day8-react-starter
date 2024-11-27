import {useState} from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0);

    const handleSizeChange = (event) => {
        const size = event.target.value
        if (size >= 0 && size <= 20) {
            setSize(size);
            props.onCounterSizeChange(size);
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