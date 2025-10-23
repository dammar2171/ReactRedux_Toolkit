import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByFive,
  decrementByFive,
  addAmount,
  subAmount,
} from "./store/counterSlice.js";
import { useRef } from "react";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const inputRef = useRef();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByFive());
  };

  const handleDecrementByAmount = () => {
    dispatch(decrementByFive());
  };

  const handleAdd = () => {
    const amount = Number(inputRef.current.value) || 0;
    // dispatch action to add amount
    dispatch(addAmount(amount));
    inputRef.current.value = "";
  };
  const handleSub = () => {
    const amount = Number(inputRef.current.value) || 0;
    // dispatch action to subtract amount
    dispatch(subAmount(amount));
    inputRef.current.value = "";
  };

  return (
    <>
      <div classNameName="container-fluid pt-5">
        <div classNameName="container pt-5">
          <div classNameName="row">
            <div classNameName="col-4"></div>
            <div classNameName="col-4 pt-5 pb-3 text-center border rounded shadow">
              <h1>Counter App</h1>
              <h3>Counter: {count}</h3>
              <button
                classNameName="btn btn-primary m-2"
                onClick={handleIncrement}
              >
                Increment
              </button>
              <button
                classNameName="btn btn-danger m-2"
                onClick={handleDecrement}
              >
                Decrement
              </button>
              <button
                classNameName="btn btn-secondary m-2"
                onClick={handleIncrementByAmount}
              >
                increment +5
              </button>
              <button
                classNameName="btn btn-secondary m-2"
                onClick={handleDecrementByAmount}
              >
                decrement -5
              </button>
              <br />
              <input
                type="text"
                placeholder="Enter number"
                classNameName="form-control"
                ref={inputRef}
              />
              <button classNameName="btn btn-info m-2" onClick={handleAdd}>
                Add
              </button>
              <button classNameName="btn btn-warning m-2" onClick={handleSub}>
                Subtract
              </button>
            </div>
            <div classNameName="col-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
