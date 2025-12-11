export function TodoItem({
  completed,
  id,
  title,
  toggleTarea,
  deleteTarea,
  updateTarea,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTarea(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTarea(id)} className="bttn bttn-delete">
        Borrar
      </button>

      <button
        onClick={() => {
          const nuevaTarea = prompt("Actualizar tarea:", title);
          if (nuevaTarea) updateTarea(id, { title: nuevaTarea });
        }}
        className="bttn bttn-edit"
      >
        Editar
      </button>
    </li>
  );
}
