import type { RootState } from "../../src/redux/store/Store";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const todo = useSelector((state: RootState) => state.todos.value);

  console.log(todo);
  // const todos=[]
  return (
    <>
      <ul className="Todos">
        <li>{todo}</li>
      </ul>
    </>
  );
}

export default Todos;
