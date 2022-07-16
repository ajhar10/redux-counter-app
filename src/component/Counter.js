import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../Redux/action/counterAction';

const Counter = () => {
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch()
    const handleIncrement=()=>{
        dispatch(incrementCounter())
    }
    const handleReset=()=>{
        dispatch(resetCounter())
    }
    const handleIDecrement=()=>{
        dispatch(decrementCounter())
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increament</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIDecrement}>Decrement</button>
            {/* <button>Decrement</button>s */}
        </div>
    );
};

export default Counter;