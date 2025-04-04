import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, set } from "./actions";
import { SetCounter } from "./SetCounter";

export const Counter = () => {
  const incident = "Incident";
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(set(0))}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </section>
      <SetCounter dispatch={dispatch} />
    </main>
  );
};

export default Counter;
