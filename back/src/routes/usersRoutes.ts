import { Router } from "express";
import {
  getUsers,
  getUsersById,
  registerNewUser,
  login,
} from "../controllers/usersControllers";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/registrer", registerNewUser);
router.post("/login", login);

export default router;
