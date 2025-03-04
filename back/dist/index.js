// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const server_1 = __importDefault(require("./server"));
// const envs_1 = require("./config/envs");
// // Iniciar el servidor
// server_1.default.listen(envs_1.PORT, () => {
//     console.log(`Server listening on PORT ${envs_1.PORT}`);
// });


import server from './server';
import { PORT } from './config/envs';

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
