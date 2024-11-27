import {useState} from "react";

const CounterGroupGenerator = (props) => {
    const [size, setSize] = useState(0);

    const handleSizeChange = (event) => {
        const changedSize = event.target.value;
        if (changedSize >= 0 && changedSize <= 20) {
            setSize(changedSize);
            props.onCounterSizeChange(changedSize);
        }
    };

    const handleReset = () => {
        setSize(0);
        props.onCounterSizeChange(0);
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