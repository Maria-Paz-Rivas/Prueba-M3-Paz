import { Request, Response } from "express";
import {
  cancelAppointmentService,
  createNewAppointmentService,
  getAllAppointmentsById,
  getAppointmentByIdService,
} from "../services/appointmentsService";

const getAppointments = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const allApp = await getAllAppointmentsById(); // Se añadió '()' para invocar la función
  return res.status(200).json(allApp);
};

const getAppointmentsById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const appointment = await getAppointmentByIdService(Number(id));

  return appointment
    ? res.status(200).json(appointment)
    : res.status(400).json({ error: "El turno no existe" });
};

const registerNewAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const appointment = await createNewAppointmentService(req.body);

  return appointment
    ? res.status(200).json(appointment)
    : res.status(400).json({ error: "El usuario no existe" });
};

const cancelAppointment = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  const cancelApp = await cancelAppointmentService(Number(id)); // Se añadió 'await'

  return cancelApp
    ? res.status(200).json({ message: "Turno cancelado" })
    : res.status(400).json({ message: "El turno no existe" });
};

export {
  getAppointments,
  getAppointmentsById,
  registerNewAppointment,
  cancelAppointment,
};

// import { Request, Response } from "express";
// import {
//   cancelAppointmentService,
//   createNewAppointmentService,
//   getAllAppointmentsById,
//   getAppointmentByIdService,
// } from "../services/appointmentsService";
// import { create } from "domain";

// const getAppointments = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const allApp = await getAllAppointmentsById;

//   return res.status(200).json(allApp);
// };

// const getAppointmentsById = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const { id } = req.params;

//   const appointment = getAppointmentByIdService(Number(id));

//   return appointment
//     ? res.status(200).json(appointment)
//     : res.status(400).json({ error: "El turno no existe" });
// };

// const registerNewAppointment = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const appointment = await createNewAppointmentService(req.body);

//   const appointment = await createNewAppointmentService(req.body);
//   return appointment
//     ? res.status(200).json(appointment)
//     : res.status(400).json({ error: "El usuario no existe" });

//   return res.status(200).json(appointment);
// };

// const cancelAppointment = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const { id } = req.params;

//   const cancelApp = await cancelAppointmentService(Number(id));

//   return cancelApp
//     ? res.status(200).json({ message: "Turno cancelado" })
//     : res.status(400).json({ message: "El turno no existe" });
// };

// export {
//   getAppointments,
//   getAppointmentsById,
//   registerNewAppointment,
//   cancelAppointment,
// };
