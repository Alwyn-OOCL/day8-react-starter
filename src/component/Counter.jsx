import {useState} from "react";
import './Counter.css';

const Counter = () => {
    const [status, setStatus] = useState(0);
    const increment = () => {
        setStatus(status + 1);
    };
    const decrement = () => {
        setStatus(status - 1)
    }
    return (
        <div>
            <div className="counter-wrapper">
                <button className='button' onClick={decrement}>-</button>
                <span>{status}</span>
                <button className='button' onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter;