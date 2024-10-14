import { Router } from "express";
import {
  getAppointments,
  getAppointmentsById,
  registerNewAppointment,
  cancelAppointment,
} from "../controllers/appointmentsControllers";
// import { register } from "module";

const router = Router();

router.get("/", getAppointments);
router.get("/:id", getAppointmentsById);
router.post("/schedule", registerNewAppointment);
router.put("/cancel/:id", cancelAppointment);

export default router;
