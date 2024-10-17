import { DataSource } from "typeorm";
import {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
} from "./envs";

import Appointment from "../entities/Appointment";
import Credential from "../entities/Credential";
import User from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  // dropSchema: true, //limpia la base de datos
  synchronize: true,
  logging: false, //muestra o no la info en la terminal
  entities: [Appointment, User, Credential],
  subscribers: [],
  migrations: [],
});

export const connectDataBase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Conexión a la base de datos realizada con éxito");
  } catch (error) {
    console.log("Error al conectar con la base de datos:", error);
  }
};
export { User };
