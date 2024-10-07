// import { Router } from "express";
// import usersRoutes from "./usersRoutes";
// import appointmentsRoutes from "./appointmentsRoutes";

// const router: Router = Router();

// router.use("/users", usersRoutes);
// router.use("/appointments", appointmentsRoutes);

// export default router;

import { Router } from "express";
import usersRoutes from "./usersRoutes";
import appointmentsRoutes from "./appointmentsRoutes";
import credentialsRoutes from "./credentialRoutes"; // Importa las rutas de credenciales

const router: Router = Router();

router.use("/users", usersRoutes);
router.use("/appointments", appointmentsRoutes);
router.use("/credentials", credentialsRoutes); // Agrega las rutas de credenciales

export default router;
