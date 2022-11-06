import "./styles.css";
import { useState } from "react";

const ToDoElement = ({ value, idx, onCompleteToDo, removeToDoItem }) => {
  return (
    <li
      style={{
        textAlign: "left",
        margin: 20,
        backgroundColor: value.isCompleted ? "#5ae31982" : "#e3251982"
      }}
    >
      {value.todo}
      <button onClick={() => onCompleteToDo(idx)}>
        {!value.isCompleted ? "complete task" : "uncomplete task"}
      </button>
      <button onClick={() => removeToDoItem(idx)}>remove to do item</button>
    </li>
  );
};

export default function App() {
  const [inputValue, setToDo] = useState({
    todo: "",
    isCompleted: false
  });

  const [todos, updateToDosList] = useState([]);

  //todo ekle
  addToDo = () => {
    if (inputValue.todo) {
      updateToDosList([...todos, inputValue]);
      setToDo({
        todo: "",
        isCompleted: false
      });
    }
  };

  onCompleteToDo = (idx) => {
    const ourItem = todos[idx];
    const mTodos = [...todos];
    //change object property isCompleted
    const updatedItem = {
      ...ourItem,
      isCompleted: !ourItem.isCompleted
    };
    mTodos[idx] = updatedItem;
    updateToDosList(mTodos);
  };

  // todo sil
  removeToDoItem = (idx) => {
    const mTodos = [...todos];
    mTodos.splice(idx, 1);
    //update todos list
    updateToDosList(mTodos);
  };

  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>Basic To Do List</h1>
      <input
        className="inputField"
        type="text"
        value={inputValue.todo}
        placeholder="Add To Do item"
        onChange={(e) =>
          setToDo({
            todo: e.target.value,
            isCompleted: false
          })
        }
      />
      <button onClick={addToDo}>Add To Do</button>
      <ul>
        {todos.length > 0 &&
          todos.map((value, idx) => {
            return (
              <ToDoElement
                key={value.todo + idx}
                value={value}
                idx={idx}
                onCompleteToDo={onCompleteToDo}
                removeToDoItem={removeToDoItem}
              />
            );
          })}
      </ul>
    </div>
  );
}
