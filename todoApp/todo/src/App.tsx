import "./App.css";
import type { RootState } from "../src/redux/store/Store";

import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "./redux/slices/Todo";
import { setTodos } from "./redux/slices/Todos";
function App() {
  const Todo = useSelector((state: RootState) => state.todo.value);
  const Todos = useSelector((state: RootState) => state.todos.value);

  const dispatch = useDispatch();
  return (
    <>
      <h1>Todo</h1>
      <form action="">
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(setTodo(e.target.value));
          }}
        />
        <button
          className="add"
          onClick={(e) => {
            e.preventDefault();
            dispatch(setTodos(Todo));
          }}
        >
          Add
        </button>
        <ul>
          {Todos.map((elem) => (
            <li>{elem}</li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
