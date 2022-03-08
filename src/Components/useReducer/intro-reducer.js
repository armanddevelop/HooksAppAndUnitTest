const initialState = [
  {
    id: 1,
    todo: "comprar carne",
    done: false,
  },
];

const todoReducer = (state, action) => {
  state = initialState;
  if (action?.type === "add") {
    return [...state, action.payload];
  }
  return state;
};
const newTodo = {
  id: 2,
  todo: "comprar servilletas",
  done: false,
};

const newTodo2 = {
  id: 3,
  todo: "comprar leche",
  done: false,
};

const action = {
  type: "add",
  payload: newTodo2,
};

let todos = todoReducer();
todos = todoReducer(todos, action);

//let todos2 = todoReducer(todos, action);
console.log("esto vale todos ", todos);
