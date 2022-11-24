import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [inputVal,setInputVal]=useState(0);

  return (
    <div>
      <div>
        <input type="number"  value={inputVal} onChange={(event)=>{
          setInputVal(event.target.value);
        }}/>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(+inputVal))}
        >
          Increase By {inputVal}
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
