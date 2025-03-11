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

// MiddleWare logger
const logMiddleware = (store) => (next) => (action) => {
  console.log("old state", store.getState(), action);
  next(action);
  console.log("new state", store.getState(), action);
};

// MiddleWare monitor
const monitorMiddleware = (store) => (next) => (action) => {
  const start = performance.now();
  next(action);
  const end = performance.now();
  const diff = start - end;
  console.log(diff);
};

const store = configureStore(
  reducer,
  applyMiddleware(logMiddleware, monitorMiddleware)
);

store.dispatch({ type: "hello" });
