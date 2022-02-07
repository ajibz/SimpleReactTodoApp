import React, { useState } from "react";

export default function Todo() {
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [check, setCheck] = useState();
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
                style={{
                  borderStyle: "solid",
                  borderColor: "orange",
                  borderWidth: 1,
                  borderRadius: 5,
                  fontSize: 21,
                  width: "80%"
                }}
              >
                <input
                  type="checkbox"
                  onChange={() => {
                    var index = todo.indexOf(e);

                    if (index !== -1) {
                      var newTodo = todo.splice(index, 1);
                      setTodo([newTodo]);
                    }

                    // setCheck(true);

                    // if(check === true){

                    // }
                  }}
                />{" "}
                {e}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
