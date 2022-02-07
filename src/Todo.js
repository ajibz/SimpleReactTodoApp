import React, { useState } from "react";

export default function Todo() {
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div>
      {todo.map((e) => {
        return (
          <ul>
            <li>{e}</li>
          </ul>
        );
      })}
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
    </div>
  );
}
