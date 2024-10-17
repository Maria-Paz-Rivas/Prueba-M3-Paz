import { AppDataSource } from "../config/data-source";
import { NewUserData } from "../dto/newUserData";
import Credential from "../entities/Credential";
import User from "../entities/User";
import { createCredentialsService } from "./credentialsServices";

const UserRepository = AppDataSource.getRepository(User);

const getAllUsersService = async (): Promise<User[]> => {
  const usersDB = await UserRepository.find({
    relations: { appointments: true, credentials: true },
  });
  return usersDB;
};

const getUserByWhereClauseService = async (user: {
  id: number | null;
  email: string | null;
}): Promise<User | null> => {
  const { id, email } = user;

  interface IWhere {
    id?: number;
    email?: string;
  }

  const whereClause: IWhere = {};

  if (id) whereClause.id = id;
  if (email) whereClause.email = email;

  const foundUser = await UserRepository.findOne({
    where: whereClause,
    relations: ["appointments"],
  });

  return foundUser;
};

const createNewUser = async (userData: NewUserData): Promise<User> => {
  const { username, password, name, email, birthDate, nDni } = userData;

  const newCredenciales = await createCredentialsService({
    username,
    password,
  });

  const newUser = UserRepository.create({
    name,
    email,
    birthDate,
    nDni,
    credentials: newCredenciales, // Asocia las credenciales al nuevo usuario
  });

  newCredenciales.user = newUser;

  await UserRepository.save(newUser);
  await AppDataSource.getRepository(Credential).save(newCredenciales);

  return newUser;
};

export { getAllUsersService, getUserByWhereClauseService, createNewUser };
