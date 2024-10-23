import express from "express";
import morgan from "morgan";
import routes from "./routes/indexRoutes";
import cors from "cors";

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use(routes);

export default server;
