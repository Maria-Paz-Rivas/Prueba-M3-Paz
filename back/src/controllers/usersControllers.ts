import { Request, Response } from "express";
import {
  createNewUser,
  getAllUsersService,
  getUserByWhereClauseService,
} from "../services/usersService";
import { checkCredentialsService } from "../services/credentialsServices";

const getUsers = async (req: Request, res: Response): Promise<Response> => {
  const allUsers = await getAllUsersService();

  return res.status(200).json(allUsers);
};

const getUsersById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const foundUser = await getUserByWhereClauseService({
      id: Number(id),
      email: null,
    });

    return foundUser
      ? res.status(200).json(foundUser)
      : res.status(404).json({ message: " El usuario buscado no existe" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const registerNewUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, birthDate, nDni, username, password } = req.body;

    if (!name || !email || !birthDate || !nDni || !username || !password)
      return res
        .status(400)
        .json({ error: "Uno o más datos estan incompletos" });

    const foundUserByEmail = await getUserByWhereClauseService({
      id: null,
      email,
    });

    if (foundUserByEmail) {
      return res
        .status(400)
        .json({ error: "Ya existe un usuario con ese email" });
    }

    const newUser = await createNewUser(req.body);

    return res.status(201).json({ message: "sucess", newUser });
  } catch (error) {
    // console.error('Error en el registro:', error); 
    return res.status(500).json(error);
    
  }
};

const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    const credentialsCheck = await checkCredentialsService({
      username,
      password,
    });

    if (credentialsCheck) {
      return res.status(200).json({ login: true, user: credentialsCheck });
    } else {
      return res.status(400).json({ login: false });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { getUsers, getUsersById, registerNewUser, login };
