import {useState} from "react";
import './Counter.css';

const Counter = (props) => {
    const [number, setNumber] = useState(0);
    const { onValueChange } = props;
    const increment = () => {
        const newNumber = number + 1;
        setNumber(newNumber);
        onValueChange(newNumber);
    };
    const decrement = () => {
        const newNumber = number - 1;
        setNumber(newNumber);
        onValueChange(newNumber);
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