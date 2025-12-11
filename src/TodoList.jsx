import { TodoItem } from "./TodoItem";

export function TodoList({ tareas, toggleTarea, deleteTarea, updateTarea }) {
  return (
    <ul className="list">
      {tareas.length === 0 && "Aún no has ingresado una tarea."}
      {tareas.map((tarea) => {
        return (
          <TodoItem
            {...tarea}
            key={tarea.id}
            toggleTarea={toggleTarea}
            deleteTarea={deleteTarea}
            updateTarea={updateTarea}
          />
        );
      })}
    </ul>
  );
}
