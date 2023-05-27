import { useDispatch, useSelector } from "react-redux";
import "./ToDo.scss";
import { addNewToDo, deleteToDo, todoState } from "./ToDoSlice";
import { useState } from "react";

const ToDo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector(todoState);
  const [input, setInput] = useState("");

  // handleInutChange.
  const handleInutChange = (e) => {
    setInput(([e.target.name] = e.target.value));
  };

  // handleAddToDo.
  const handleAddToDo = (input) => {
    dispatch(addNewToDo(input));
    setInput("");
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="todo_area">
            <h2>Our Todos.</h2>
            <hr />
            <input
              type="text"
              placeholder="Do"
              name="input"
              value={input}
              onChange={handleInutChange}
            />
            <button onClick={() => handleAddToDo(input)}>Add</button>
            <hr />
            <ul>
              {todos.length > 0
                ? todos.map((item, index) => {
                    return (
                      <li key={index}>
                        {item}{" "}
                        <button onClick={() => dispatch(deleteToDo(item))}>
                          x
                        </button>
                      </li>
                    );
                  })
                : "No todos found"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
