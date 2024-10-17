import { AppDataSource } from "../config/data-source";
import { dataCredentials } from "../dto/dataCredentials";
import Credential from "../entities/Credential";
import { User } from "../config/data-source";

// Repositorio para las credenciales
const credentialRepository = AppDataSource.getRepository(Credential);

// Servicio para crear nuevas credenciales
const createCredentialsService = async (
  credentials: dataCredentials
): Promise<Credential> => {
  const { username, password } = credentials;

  // Crear una nueva instancia de Credential
  const newCredentials = credentialRepository.create({
    username,
    password,
  });

  // Guardar en la base de datos
  await credentialRepository.save(newCredentials);

  return newCredentials;
};

// Servicio para verificar las credenciales
const checkCredentialsService = async (
  credentials: dataCredentials
): Promise<User | undefined> => {
  const { username, password } = credentials;

  // Buscar credenciales en la base de datos
  const foundCredentials = await credentialRepository.findOne({
    where: { username },
    relations: ["user"],
  });

  // Comprobar la contraseña
  if (foundCredentials?.password === password) return foundCredentials?.user;
};

export { createCredentialsService, checkCredentialsService };
