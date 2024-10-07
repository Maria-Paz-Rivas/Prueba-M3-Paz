"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerNewUser = exports.getUsersById = exports.getUsers = void 0;
const getUsers = (req, res) => {
    return res.status(200).json(`Ruta que devuelve todos los usuarios`);
};
exports.getUsers = getUsers;
const getUsersById = (req, res) => {
    return res.status(200).json(`Ruta que devuelve un usuario por ID`);
};
exports.getUsersById = getUsersById;
const registerNewUser = (req, res) => {
    return res.status(200).json(`Ruta que registra un nuevo usuario`);
};
exports.registerNewUser = registerNewUser;
const login = (req, res) => {
    return res.status(200).json(`Ruta que permite el inicio de sesion`);
};
exports.login = login;
