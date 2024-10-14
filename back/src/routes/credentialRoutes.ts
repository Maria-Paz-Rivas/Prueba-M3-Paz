// import { Router } from "express";
// import {
//   createCredential,
//   validateCredentials,
// } from "../services/credentialServices";

// const router: Router = Router();

// // Ruta para crear nuevas credenciales
// router.post("/", (req, res) => {
//   const { username, password } = req.body;
//   const id = createCredential(username, password);
//   res.status(201).json({ id }); // Retorna el ID de la nueva credencial
// });

// // Ruta para validar credenciales
// router.post("/validate", (req, res) => {
//   const { username, password } = req.body;
//   const id = validateCredentials(username, password);
//   if (id) {
//     res.status(200).json({ id }); // Retorna el ID si las credenciales son válidas
//   } else {
//     res.status(401).json({ message: "Invalid credentials" }); // Retorna un mensaje de error
//   }
// });

// export default router;
