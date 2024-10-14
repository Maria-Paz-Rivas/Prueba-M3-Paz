import "dotenv/config"; // Cargar dotenv al inicio
import server from "./server";
import { PORT } from "./config/envs";
import { connectDataBase } from "./config/data-source";
import "reflect-metadata";

const startServer = async () => {
  try {
    // Conectar a la base de datos antes de iniciar el servidor
    await connectDataBase();
    console.log("Conexión a la base de datos realizada con éxito");

    // Iniciar el servidor
    server.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.log("Error al iniciar el servidor:", error);
  }
};

// Llamar a la función para iniciar el servidor
startServer();
