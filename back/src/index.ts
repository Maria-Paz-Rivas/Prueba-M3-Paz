import server from "./server";
import { PORT } from "./config/envs";

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
