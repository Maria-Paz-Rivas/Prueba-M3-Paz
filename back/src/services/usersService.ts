import { AppDataSource } from "../config/data-source";
import { NewUserData } from "../dto/newUserData";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { createCredentialsService } from "./credentialsServices";

const UserRepository = AppDataSource.getRepository(User);

const getAllUsersService = async (): Promise<User[]> => {
  const usersDB = await UserRepository.find({
    relations: { appointments: true, credentials: true },
  });
  return usersDB;
};

const getUsersByIdService = async (id: number): Promise<User | null> => {
  const foundUser = await UserRepository.findOne({
    where: { id },
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

export { getAllUsersService, getUsersByIdService, createNewUser };
