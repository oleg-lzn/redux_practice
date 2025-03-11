import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

// compose();

// const makeLouder = (string) => string.toUpperCase();
// const repeatThreeTimes = (string) => string.repeat(3);
// const embolden = (string) => string.bold();

// const makeLouderRepeatThreeTimesAndEmbolden = (string) => {
//   embolden(repeatThreeTimes(makeLouder(string)));
// };

// const makeLouderRepeatThreeTimesAndEmboldenWithCompose = compose(
//   embolden,
//   repeatThreeTimes,
//   makeLouder
// );

// console.log(makeLouderRepeatThreeTimesAndEmboldenWithCompose("hello"));

//Initial State
const initialState = { value: 0 };

// Action Types Object / Template
const INCREMENT = "INCREMENT";
const ADD = "ADD";

//Action
const incrementAction = { type: INCREMENT, payload: 5 };

// Action Creator
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    const value = state.value + 1;
    return { value };
  }

  if (action.type == ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

const store = createStore(reducer);

const subscriber = () => console.log("SUBSCRIBER", store.getState());
const actions = bindActionCreators({ increment, add }, store.dispatch);

actions.add(1000);
actions.increment();
