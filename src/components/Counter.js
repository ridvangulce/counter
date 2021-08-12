import {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount} from "../redux/counter/counterSlice"

const Counter = () => {
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch()
    const countValue = useSelector((state) => state.counter.value)
    return (
        <div>
            {countValue}
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br/><br/>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Amount</button>
        </div>
    );
}

export default Counter;