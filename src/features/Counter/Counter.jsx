import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Counter.scss";
import { decrement, increment, reset } from "./CounterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h2 className="text-center">Counter app</h2>
          <div className="counter_area text-center">
            <h1>{count}</h1>
            <hr />
            <button
              className="btn btn-danger me-2"
              onClick={() => dispatch(decrement())}
            >
              --
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={() => dispatch(increment())}
            >
              ++
            </button>
            <button
              className="btn btn-warning me-2"
              onClick={() => dispatch(reset())}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
