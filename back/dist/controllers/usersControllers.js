"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.createUser = exports.getUsers = void 0;
const usersServise_1 = require("../services/usersServise");
// Implementación de getUsers
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersServise_1.getUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios" });
    }
});
exports.getUsers = getUsers;
// Implementación de createUser
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, active } = req.body;
        const newUser = yield (0, usersServise_1.createUserService)({ name, email, active });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: "Error al crear usuario" });
    }
});
exports.createUser = createUser;
// Implementación de deleteUser
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    yield (0, usersServise_1.deleteUserService)(id);
    res.status(200).json({ message: "Eliminado correctamente" });
});
exports.deleteUser = deleteUser;
// import { Request, Response } from "express";
// import {
//   createUserService,
//   getUsersService,
//   deleteUserService,
// } from "../services/usersServise";
// import IUser from "../interfaces/iUser";
// export const getUsers = async () => {};
// export const createUser = async (req: Request, res: Response) => {
//   try {
//     const { name, email, active } = req.body;
//     const newUser: IUser = await createUserService({ name, email, active });
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: "Error al crear usuario" });
//   }
//   export const deleteUser = async () => {};
// };
