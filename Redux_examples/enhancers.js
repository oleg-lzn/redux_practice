import { initialize } from "esbuild";
import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

const reducer = (state) => state;

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = start - end;
    console.log(diff);

    return newState;
  };

  return createStore(monitoredReducer, initialState, enhancer);
};

const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const logReducer = (state, action) => {
    console.log("old state", state, action);
    const newState = reducer(state, action);
    console.log("new state", newState, action);

    return newState;
  };

  return createStore(logReducer, initialState, enhancer);
};

const combinedEnhancer = compose(monitorEnhancer, logEnhancer);

const store = configureStore(reducer, combinedEnhancer);

store.dispatch({ type: "hello" });
