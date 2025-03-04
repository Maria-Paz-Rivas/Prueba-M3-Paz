// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const express_1 = __importDefault(require("express"));
// const morgan_1 = __importDefault(require("morgan"));
// const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
// const server = (0, express_1.default)();
// server.use(express_1.default.json());
// server.use((0, morgan_1.default)("dev"));
// server.use(indexRoutes_1.default);
// exports.default = server;


import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/indexRoutes';

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(indexRoutes);

export default server;
