import { Request, Response } from "express";
import {
  createUserService,
  getUsersService,
  deleteUserService,
} from "../services/usersServise";
import IUser from "../interfaces/iUser";

// Implementación de getUsers
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

// Implementación de createUser
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, active } = req.body;

    const newUser: IUser = await createUserService({ name, email, active });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario" });
  }
};

// Implementación de deleteUser
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  await deleteUserService(id);
  res.status(200).json({ message: "Eliminado correctamente" });
};

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
