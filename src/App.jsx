import { useEffect, useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import "./styles.css";
import { TodoList } from "./TodoList";
import { createTodo, updateTodo, deleteTodo } from "./api";

export default function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    async function cargarTareas() {
      try {
        const res = await fetch("http://localhost:5000/todos");
        const data = await res.json();

        const backtofront = data.map((t) => ({
          id: t._id,
          title: t.title,
          completed: t.completed,
        }));

        setTareas(backtofront);
      } catch (err) {
        console.error("Error al cargar tareas desde el backend:", err);
      }
    }

    cargarTareas();
  }, []);

  async function addTarea(title) {
    try {
      const nueva = await createTodo(title);

      setTareas((currentTareas) => [
        ...currentTareas,
        {
          id: nueva._id,
          title: nueva.title,
          completed: nueva.completed,
        },
      ]);
    } catch (err) {
      console.error("Error al crear tarea:", err);
    }
  }

  async function toggleTarea(id, completed) {
    try {
      await updateTodo(id, { completed });

      setTareas((currentTareas) =>
        currentTareas.map((tarea) =>
          tarea.id === id ? { ...tarea, completed } : tarea
        )
      );
    } catch (err) {
      console.error("Error al completar tarea:", err);
    }
  }

  async function deleteTarea(id) {
    try {
      await deleteTodo(id);

      setTareas((currentTareas) =>
        currentTareas.filter((tarea) => tarea.id !== id)
      );
    } catch (err) {
      console.error("Error al eliminar tarea:", err);
    }
  }

  async function updateTarea(id, updatedFields) {
    try {
      const actualizada = await updateTodo(id, updatedFields);

      setTareas((currentTareas) =>
        currentTareas.map((tarea) => {
          if (tarea.id === id) {
            const updated = {
              ...tarea,
              title: actualizada.title,
              completed: actualizada.completed,
            };
            console.log("Tarea actualizada:", tarea, "->", updated);
            return updated;
          }
          return tarea;
        })
      );
    } catch (err) {
      console.error("Error al editar tarea:", err);
    }
  }

  return (
    <>
      <AddTodoForm onSubmit={addTarea} />
      <h1 className="header">Lista de Tareas:</h1>
      <TodoList
        tareas={tareas}
        toggleTarea={toggleTarea}
        deleteTarea={deleteTarea}
        updateTarea={updateTarea}
      />
    </>
  );
}
