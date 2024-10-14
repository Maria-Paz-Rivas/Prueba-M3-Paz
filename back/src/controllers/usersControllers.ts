import { Request, Response } from "express";
import {
  createNewUser,
  getAllUsersService,
  getUsersByIdService,
} from "../services/usersService";

const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const allUsers = await getAllUsersService();

  return res.status(200).json(allUsers);
};

const getUsersById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const foundUser = await getUsersByIdService(Number(id));

    return foundUser
      ? res.status(200).json(foundUser)
      : res.status(400).json({ message: " El usuario buscado no existe" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const registerNewUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createNewUser(req.body);

  return res.status(200).json({ message: "sucess", newUser });
};

const login = (req: Request, res: Response) => {
  return res.status(200).json(`Ruta que permite el inicio de sesion`);
};

export { getUsers, getUsersById, registerNewUser, login };
