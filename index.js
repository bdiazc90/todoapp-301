import express from "express";

import todoRouter from "./routes/todoRouter.js";

const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Estoy vivo!</h1>");
});

// 1. Las tareas deben venir de la base de datos ✅
// 2. Debemos separar las rutas de la lógica (controlador)
app.use("/api/todos", todoRouter);

app.listen(3000, () => console.log("⚡️ Estoy vivo en el puerto 3000"));
