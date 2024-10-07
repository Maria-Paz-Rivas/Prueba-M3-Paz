// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const express_1 = require("express");
// const router = (0, express_1.Router)();
// router.get("/users");
// router.post("/users");
// // router.delete("/users");
// router.delete("/users/:id");
// exports.default = router;

import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  loginUser,
  deleteUser,
} from "./controllers/usersControllers"; // Asegúrate de que esta ruta sea correcta

const router = Router();

// Obtener listado de todos los usuarios
router.get("/users", getUsers);

// Obtener detalle de un usuario específico
router.get("/users/:id", getUserById);

// Registrar un nuevo usuario
router.post("/users/register", createUser);

// Login del usuario
router.post("/users/login", loginUser);

// Eliminar un usuario
router.delete("/users/:id", deleteUser);

export default router;
