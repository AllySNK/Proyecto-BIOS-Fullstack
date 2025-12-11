import { useState } from "react";

export function AddTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function taskSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={taskSubmit} className="new-task">
      <div className="form-row">
        <label htmlFor="item">🌸¡Ingresa una tarea para comenzar!~</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="bttn">Agregar</button>
    </form>
  );
}
