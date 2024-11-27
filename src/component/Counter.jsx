import {useState} from "react";
import './Counter.css';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const increment = () => {
        setNumber(number + 1);
    };
    const decrement = () => {
        setNumber(number - 1)
    }
    return (
        <div>
            <div>
                <button className='button' onClick={decrement}>-</button>
                <span>{number}</span>
                <button className='button' onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Counter;