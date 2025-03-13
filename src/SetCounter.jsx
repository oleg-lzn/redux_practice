import React from "react";
import { set } from "./actions";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const SetCounter = ({ dispatch }) => {
  const countFromStore = useSelector((state) => state.count);
  const [count, setCount] = useState(countFromStore);

  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore]);

  const handleChange = (e) => setCount(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(set(count));
  };

  const handleChange1 = (e) => dispatch(set(e.target.value));

  return (
    <section className="controls">
      <form onSubmit={handleSubmit}>
        <label htmlFor="set-to"> Set Count </label>
        <input
          id="set-to"
          type="number"
          value={countFromStore}
          onChange={handleChange1}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
