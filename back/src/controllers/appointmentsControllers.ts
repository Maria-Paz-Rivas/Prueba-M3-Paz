import { Request, Response } from "express";
import {
  cancelAppointmentService,
  createNewAppointmentService,
  getAllAppointments,
  getAllAppointmentsByUserId, // Asegúrate de importar este servicio
  getAppointmentByIdService,
} from "../services/appointmentsService";

const getAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userId = req.query.userId; // Obtener el ID del usuario de los parámetros de consulta
    const allApp = userId
      ? await getAllAppointmentsByUserId(Number(userId)) // Obtener citas por ID de usuario
      : await getAllAppointments(); // O obtener todas las citas si no hay userId

    return allApp.length
      ? res.status(200).json(allApp)
      : res.status(404).json({ message: "No hay turnos registrados" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getAppointmentsById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;

    const appointment = await getAppointmentByIdService(Number(id));

    return appointment
      ? res.status(200).json(appointment)
      : res.status(404).json({ error: "El turno no existe" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const registerNewAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { date, time, userId } = req.body;

    if (!date || !time || !userId)
      return res
        .status(400)
        .json({ error: "Uno o más datos están incompletos" });

    const appointment = await createNewAppointmentService(req.body);

    return appointment
      ? res.status(201).json(appointment)
      : res.status(400).json({ error: "El usuario no existe" });
  } catch (error) {
    return res.status(500).json(error);
  }
};



const cancelAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const cancelApp = await cancelAppointmentService(Number(id));
    return cancelApp
      ? res.status(200).json({ message: "Turno cancelado" })
      : res.status(404).json({ message: "El turno no existe" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export {
  getAppointments,
  getAppointmentsById,
  registerNewAppointment,
  cancelAppointment,
};
