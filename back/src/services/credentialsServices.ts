// import { AppDataSource } from "../config/data-source";
// import { dataCredentials } from "../dto/dataCredentials";
// import { Credential } from "../entities/Credential";

// const credentialRepository = AppDataSource.getRepository(Credential);

// const createCredentialsService = async (
//   credentials: dataCredentials
// ): Promise<Credential> => {
//   const { username, password } = credentials;

//   const newCredentials = credentialRepository.create({
//     username,
//     password,
//   });

//   await credentialRepository.save(newCredentials);

//   return newCredentials;
// };

// Servicio para verificar las credenciales

// Comprobar la contraseña
// const checkCredentialsService = (credentials: dataCredentials) => {
//   const { username, password } = credentials;

//   const foundCredentials = credentials.find(
//     (cred) => cred.username === username
//   ); //necesitamos que nos devuelva un solo dato

//   if (foundCredentials?.password === password) return foundCredentials?.id;
//   else throw new Error("Uno o más datos son incorrectos");
// };

// export { createCredentialsService, checkCredentialsService };

import { AppDataSource } from "../config/data-source";
import { dataCredentials } from "../dto/dataCredentials";
import { Credential } from "../entities/Credential";

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
): Promise<number | null> => {
  const { username, password } = credentials;

  // Buscar credenciales en la base de datos
  const foundCredentials = await credentialRepository.findOne({
    where: { username },
  });

  // Comprobar la contraseña
  if (foundCredentials && foundCredentials.password === password) {
    return foundCredentials.id; // Devuelve el ID si la contraseña es correcta
  } else return 0;
};

export { createCredentialsService, checkCredentialsService };
