import { Request, Response } from "express";

const getUsers = (req: Request, res: Response): Response => {
  return res.status(200).json(`Ruta que devuelve todos los usuarios`);
};

const getUsersById = (req: Request, res: Response) => {
  return res.status(200).json(`Ruta que devuelve un usuario por ID`);
};

const registerNewUser = (req: Request, res: Response) => {
  return res.status(200).json(`Ruta que registra un nuevo usuario`);
};

const login = (req: Request, res: Response) => {
  return res.status(200).json(`Ruta que permite el inicio de sesion`);
};

export { getUsers, getUsersById, registerNewUser, login };
