import React, { useState } from "react";

export default function Todo() {
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [updateDisplay, setUpdateDisplay] = useState("none");
  const [display, setDisplay] = useState("none");
  return (
    <div style={{ marginTop: 20 }}>
      <label style={{ fontSize: 23, fontWeight: "bold" }}>Enter Todo: </label>
      <input
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
        type="text"
        placeholder="Enter Todo Item"
        style={{
          marginTop: 20,
          width: 300,
          height: 40,
          borderRadius: 7,
          fontSize: 20,
          fontWeight: "bold",
          color: "cadetblue"
        }}
      />
      <div>
        <input
          type="submit"
          onClick={() => {
            setTodo([...todo, todoInput]);
            setTodoInput("");
          }}
        />
      </div>

      <div style={{ marginTop: 50 }}>
        {todo.map((e) => {
          return (
            <ul style={{ listStyle: "none" }}>
              <li
                onClick={() => {
                  display === "none" ? setDisplay("block") : setDisplay("none");
                }}
                style={{
                  borderStyle: "solid",
                  borderColor: "orange",
                  borderWidth: 1,
                  borderRadius: 5,
                  fontSize: 21,
                  width: "80%",
                  cursor: "pointer"
                }}
              >
                <input
                  type="checkbox"
                  onChange={() => {
                    display === "none"
                      ? setDisplay("block")
                      : setDisplay("none");
                  }}
                />{" "}
                {e}
              </li>
              <div style={{ display: display }}>
                <input
                  value="Edit"
                  type="submit"
                  onClick={() => {
                    updateDisplay === "none"
                      ? setUpdateDisplay("block")
                      : setUpdateDisplay("none");
                  }}
                />
                <input
                  type="submit"
                  value="Delete"
                  onClick={() => {
                    // var index = todo.indexOf(e);

                    setTodo(
                      todo.filter((item) => {
                        return item !== e;
                      })
                    );
                  }}
                />
              </div>
              <div style={{ display: updateDisplay }}>
                <input
                  onChange={(e) => {
                    setTodoInput(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Todo Item"
                  style={{
                    marginTop: 20,
                    width: 300,
                    height: 40,
                    borderRadius: 7,
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "cadetblue"
                  }}
                />
                <input
                  value="Update Todo"
                  type="submit"
                  onClick={() => {
                    var index = todo.indexOf(e);
                    todo[index] = todoInput;
                    setTodo(todo);
                    setTodoInput("");
                    setUpdateDisplay("none");
                  }}
                />
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
