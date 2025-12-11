// todoRoutes.js
const express = require("express");
const router = express.Router();

const {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("./todoController");

// Rutas CRUD
router.post("/todos", createTodo);
router.get("/todos", getAllTodos);
router.get("/todos/:id", getTodoById);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;
