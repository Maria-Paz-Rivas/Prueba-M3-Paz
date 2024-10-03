// import server from "./server";

// import {
//   createUser,
//   getUsers,
//   deleteUser,
// } from "./controllers/usersControllers";

// Router.post("/users", createUser);

// import { PORT } from "./config/envs";
// import { Router } from "express";
// import { create } from "domain";

// server.listen(PORT, () => {
//   console.log(`Server listening on PORT ${PORT}`);
// });
import express from "express";
import server from "./server";
import { PORT } from "./config/envs";
import { Router } from "express";
import {
  createUser,
  getUsers,
  deleteUser,
} from "./controllers/usersControllers";

// Crear una instancia de Router
const router = Router();

// Definir las rutas
router.post("/users", createUser);
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser); // Asumiendo que el ID viene en los parámetros

// Usar el router en el servidor
server.use(router);

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
