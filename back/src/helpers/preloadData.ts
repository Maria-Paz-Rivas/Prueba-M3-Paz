// import { AppDataSource } from "../config/data-source";
// import { User } from "../entities/User";

// const preloadUsers = [
//   {
//     nombre: "Paz Rivas",
//     email: "pazrivas@gmail.com",
//     edad: 42,
//     activo: true,
//   },
//   {
//     nombre: "Sofia Rosciano",
//     email: "sofi@gmail.com",
//     edad: 14,
//     activo: true,
//   },
//   {
//     nombre: "Camila Rosciano",
//     email: "cami@gmail.com",
//     edad: 16,
//     activo: true,
//   },
//   {
//     nombre: "Nati Zoanni",
//     email: "nati@gmail.com",
//     edad: 42,
//     activo: true,
//   },
//   {
//     nombre: "Gaby Zuni",
//     email: "zuni@gmail.com",
//     edad: 45,
//     activo: true,
//   },
// ];

// export const preloadData = async () => {
//   await AppDataSource.manager.transaction(
//     async (transactionalEntityManager) => {
//       // Obtener el repositorio de la entidad User
//       const userRepository = AppDataSource.getRepository(User);

//       // Verificar si ya hay usuarios en la base de datos
//       const usuariosExistentes = await userRepository.find();

//       if (usuariosExistentes.length) {
//         return console.log(
//           "No se hizo la precarga de datos, ya existen usuarios"
//         );
//       }

//       for await (const user of preloadUsers) {
//         const newUser = await userRepository.create(user);
//         await transactionalEntityManager.save(newUser);
//       }

//       // Crear y guardar los nuevos usuarios en una sola transacción
//       const nuevosUsuarios = userRepository.create(preloadUsers);
//       await transactionalEntityManager.save(nuevosUsuarios);

//       console.log("Precarga de datos realizada con éxito");
//     }
//   );
// };

// import { AppDataSource } from "../config/data-source";
// import { User } from "../entities/User";

// const usuarios = [
//     {
//         nombre: "Paz Rivas",
//         email: "pazrivas@gmail.com",
//         edad: 42,
//         activo: true,
//       },

//       {
//         nombre: "Sofia Rosciano",
//         email: "sofi@gmail.com",
//         edad: 14,
//         activo: true,
//       },

//       {
//         nombre: "Camila Rosciano",
//         email: "cami@gmail.com",
//         edad: 16,
//         activo: true,
//       },
//       {
//         nombre: "Nati Zoanni",
//         email: "nati@gmail.com",
//         edad: 42,
//         activo: true,
//       },
//       {
//         nombre: "Gaby Zuni",
//         email: "zuni@gmail.com",
//         edad: 45,
//         activo: true,
//       }

// ]

// export const preloadData = async () => {
//   await AppDataSource.manager.transaction(
//     async (transactionalEntityManager) => {
//       // Obtener el repositorio de la entidad User
//       const userRepository = AppDataSource.getRepository(User);

//       // Verificar si ya hay usuarios en la base de datos
//       const usuarios = await userRepository.find();

//       if (usuarios.length) {
//         return console.log(
//           "No se hizo la precarga de datos, ya existen usuarios"
//         );
//       }

//       // Crear los nuevos usuarios
//       const nuevoUsuario1 = userRepository.create(usuario1);
//       const nuevoUsuario2 = userRepository.create(usuario2);
//       const nuevoUsuario3 = userRepository.create(usuario3);
//       const nuevoUsuario4 = userRepository.create(usuario4);
//       const nuevoUsuario5 = userRepository.create(usuario5);

//       // Guardar todos los usuarios en una sola transacción
//       await transactionalEntityManager.save([
//         nuevoUsuario1,
//         nuevoUsuario2,
//         nuevoUsuario3,
//         nuevoUsuario4,
//         nuevoUsuario5,
//       ]);

//       console.log("Precarga de datos realizada con éxito");
//     }
//   );
// };
