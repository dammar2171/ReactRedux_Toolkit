import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/TodosSlice";
import InputArea from "./InputArea";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (dueDate) => {
    dispatch(removeTodo(dueDate));
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <InputArea />
            <ul className="list-group">
              {todos.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                  {todo.text} {todo.dueDate && <em>(Due: {todo.dueDate})</em>}
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="btn btn-danger"
                    style={{ float: "right" }}
                  >
                    <MdDeleteForever />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
