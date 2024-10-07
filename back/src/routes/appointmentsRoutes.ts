import { Router } from "express";
import {
  getAppointments,
  getAppointmentsById,
  scheduleAppointment,
  cancelAppointment,
} from "../controllers/appointmentsControllers";

const router = Router();

router.get("/", getAppointments);
router.get("/:id", getAppointmentsById);
router.post("/schedule", scheduleAppointment);
router.put("/cancel/:id", cancelAppointment);

export default router;
