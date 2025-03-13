import { useActions } from "./use-actions";
import { increment, decrement, set } from "./actions";
import { useSelector } from "react-redux";

export const useCounter = () => {
  const actions = useActions({ increment, decrement, set });
  const count = useSelector((state) => state.count);

  return { count, actions };
};

// optional
