import "dotenv/config"; // Cargar dotenv al inicio
import server from "./server";
import { PORT } from "./config/envs";
import { connectDataBase } from "./config/data-source";
import "reflect-metadata";

const startServer = async () => {
  try {
    connectDataBase();
    console.log("Conexión a la base de datos realizada con éxito");

    server.listen(PORT, () => {
      console.log(`Server listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.log("Error al iniciar el servidor:", error);
  }
};

startServer();
