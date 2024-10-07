import { Request, Response } from "express";

const getAppointments = (req: Request, res: Response) => {
  res.send("Ruta que devuelve todos los turnos");
};

const getAppointmentsById = (req: Request, res: Response) => {
  res.send(`Ruta que devuelve un turno por ID: ${req.params.id}`);
};

const scheduleAppointment = (req: Request, res: Response) => {
  res.send(`Ruta que registra un nuevo turno`);
};

const cancelAppointment = (req: Request, res: Response) => {
  res.send(`Ruta que cancela un turno ${req.params.id}`);
};

export {
  getAppointments,
  getAppointmentsById,
  scheduleAppointment,
  cancelAppointment,
};
