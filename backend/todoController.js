const Todo = require("./todoModel");

async function createTodo(req, res) {
  try {
    const { title, completed } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "El título es obligatorio." });
    }

    const todo = new Todo({
      title: title.trim(),
      completed: completed ?? false,
    });

    const savedTodo = await todo.save();

    res.status(201).json(savedTodo);
  } catch (error) {
    console.error("Error al crear tarea:", error);
    res.status(500).json({ message: "Error al crear la tarea." });
  }
}

async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    res.status(500).json({ message: "Error al obtener las tareas." });
  }
}

async function getTodoById(req, res) {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Tarea no encontrada." });
    }

    res.json(todo);
  } catch (error) {
    console.error("Error al obtener tarea:", error);
    res.status(500).json({ message: "Error al obtener la tarea." });
  }
}

async function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const updatedFields = {};

    if (typeof title === "string") {
      updatedFields.title = title;
    }

    if (typeof completed === "boolean") {
      updatedFields.completed = completed;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Tarea no encontrada." });
    }

    res.json(updatedTodo);
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    res.status(500).json({ message: "Error al actualizar la tarea." });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Tarea no encontrada." });
    }

    res.json({ message: "Tarea eliminada correctamente." });
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    res.status(500).json({ message: "Error al eliminar la tarea." });
  }
}

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
