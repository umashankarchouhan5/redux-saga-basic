import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="counter">
      <button onClick={() => dispatch(increment())}>increment</button>
      <div>{counter}</div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default Counter;
