// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const express_1 = require("express");
// const appointmentsControllers_1 = require("../controllers/appointmentsControllers");
// const router = (0, express_1.Router)();
// router.get("/", appointmentsControllers_1.getAppointments);
// router.get("/:id", appointmentsControllers_1.getAppointmentsById);
// router.post("/schedule", appointmentsControllers_1.scheduleAppointment);
// router.put("/cancel/:id", appointmentsControllers_1.cancelAppointment);
// exports.default = router;

import express from "express";
import * as appointmentsControllers from "../controllers/appointmentsControllers";

const router = express.Router();

router.get("/", appointmentsControllers.getAppointments);
router.get("/user/:userId", appointmentsControllers.getAllAppointmentsByUserId); // Nueva ruta
router.get("/:id", appointmentsControllers.getAppointmentsById);
router.post("/schedule", appointmentsControllers.scheduleAppointment);
router.put("/cancel/:id", appointmentsControllers.cancelAppointment);

export default router;



