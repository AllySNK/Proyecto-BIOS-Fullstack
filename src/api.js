const API_URL = import.meta.env.VITE_API_URL;
console.log("🌐 API_URL ES:", API_URL); // 👈 AGREGA ESTO

// GET /todos → leer todas las tareas
export async function fetchTodos() {
  const res = await fetch(`${API_URL}/todos`);
  if (!res.ok) throw new Error("Error al obtener tareas");
  return res.json();
}

// POST /todos → crear tarea
export async function createTodo(title) {
  const res = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("Error al crear tarea");
  return res.json();
}

// PUT /todos/:id → actualizar (texto o completed)
export async function updateTodo(id, updatedFields) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) throw new Error("Error al actualizar tarea");
  return res.json();
}

// DELETE /todos/:id → eliminar
export async function deleteTodo(id) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar tarea");
}
