import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/TodosSlice";

const InputArea = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const dateRef = useRef();

  const handleAddTask = () => {
    const newTask = inputRef.current.value;
    const dueDate = dateRef.current.value;
    const id = Date.now();
    if (newTask) {
      // Dispatch the addTodo action with the new task
      dispatch(addTodo({ text: newTask, dueDate, id }));
      inputRef.current.value = "";
      dateRef.current.value = "";
    }
  };

  return (
    <div className="input-area text-center mb-4">
      <input
        type="text"
        ref={inputRef}
        className="form-control d-inline-block w-50"
        placeholder="Add a new task"
      />
      <input
        type="date"
        ref={dateRef}
        className="form-control d-inline-block w-50"
        placeholder="Add a due date"
      />
      <button
        className="btn btn-primary ms-2 mb-2"
        style={{ width: "30%", marginTop: "0.6rem" }}
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default InputArea;
