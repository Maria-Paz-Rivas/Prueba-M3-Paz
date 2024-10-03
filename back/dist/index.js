"use strict";
// import server from "./server";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
const express_1 = require("express");
const usersControllers_1 = require("./controllers/usersControllers");
// Crear una instancia de Router
const router = (0, express_1.Router)();
// Definir las rutas
router.post("/users", usersControllers_1.createUser);
router.get("/users", usersControllers_1.getUsers);
router.delete("/users/:id", usersControllers_1.deleteUser); // Asumiendo que el ID viene en los parámetros
// Usar el router en el servidor
server_1.default.use(router);
// Iniciar el servidor
server_1.default.listen(envs_1.PORT, () => {
    console.log(`Server listening on PORT ${envs_1.PORT}`);
});
