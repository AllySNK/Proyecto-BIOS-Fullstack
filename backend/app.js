const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = require("./todoRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/", todoRoutes);

const MONGO_URI = "mongodb://127.0.0.1:27017/todolist";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Conectada a MongoDB");
    app.listen(PORT, () => {
      console.log(`Servidor funcionando en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectarse a MongoDB:", error);
  });
