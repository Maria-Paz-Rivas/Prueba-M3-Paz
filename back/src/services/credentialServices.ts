import Credential from "../interfaces/ICredential"; // Asegúrate de importar la interfaz correcta

// Arreglo que actuará como base de datos temporal
const credentials: Credential[] = [];

// Función para crear nuevas credenciales
export const createCredential = (
  username: string,
  password: string
): number => {
  const newId = credentials.length + 1; // Genera un nuevo ID
  const newCredential: Credential = {
    id: newId,
    username,
    password,
  };

  credentials.push(newCredential); // Agrega las credenciales al arreglo
  return newId; // Retorna el ID de las nuevas credenciales
};

// Función para validar credenciales
export const validateCredentials = (
  username: string,
  password: string
): number | null => {
  const credential = credentials.find(
    (cred) => cred.username === username && cred.password === password
  );

  return credential ? credential.id : null; // Retorna el ID si las credenciales son válidas, o null si no lo son
};
