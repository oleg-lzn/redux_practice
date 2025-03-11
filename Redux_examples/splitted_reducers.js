import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const initialState = {
  users: [
    { id: 1, name: "Steve," },
    { id: 2, name: "Peter" },
  ],
  tasks: [
    { title: "File the TPS Reports" },
    { title: "Order more energy drinks " },
  ],
};

const ADD_TASK = "ADD_TASK";
const ADD_USER = "ADD_USER";

const addTask = (title) => ({ type: ADD_TASK, payload: title });
const addUser = (name) => ({ type: ADD_USER, payload: name });

// поговорить с Ильей про сплиттед редюсеры

// splitted reducers
const userReducer = (state = initialState.users, action) => {
  return action.type === ADD_USER ? [...state.users, action.payload] : users;
};

const taskReducer = (state = initialState.tasks, action) => {
  return action.type === ADD_TASK ? [...state.tasks, action.payload] : tasks;
};

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

// mixed reducer

const combinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case ADD_USER: {
      return { ...state, users: [...state.users, action.payload] };
    }

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
