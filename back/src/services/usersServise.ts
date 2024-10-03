import userDto from "../dto/userDto";
import IUser from "../interfaces/iUser";

let users: IUser[] = [];

let id: number = 1; // Cambiado a let para incrementar más tarde

export const createUserService = async (userData: userDto): Promise<IUser> => {
  const newUser: IUser = {
    id,
    name: userData.name,
    email: userData.email,
    active: userData.active,
  };

  users.push(newUser);
  id++; // Incrementa el ID para el próximo usuario
  return newUser;
};

export const getUsersService = async (): Promise<IUser[]> => {
  return users;
};

export const deleteUserService = async (id: number): Promise<void> => {
  users = users.filter((user: IUser) => {
    return user.id !== id;
  });
};
