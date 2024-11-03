// import { AppDataSource } from "../config/data-source";
// import { newAppointmentData } from "../dto/newAppointmentData";
// import Appointment from "../entities/Appointment";
// import { AppointmentStatus } from "../enums/appointmentStatus";
// import User from "../entities/User";

// const appointmentsRepository = AppDataSource.getRepository(Appointment);

// const getAllAppointments = async (): Promise<Appointment[]> => {
//   const allAppointments = await appointmentsRepository.find({
//     relations: { user: true },
//   });
//   return allAppointments;
// };

// const getAppointmentByIdService = async (
//   id: number
// ): Promise<Appointment | null> => {
//   const foundApp = await appointmentsRepository.findOne({
//     where: { id },
//     relations: ["user"], // Corrige a "user" en singular
//   });

//   return foundApp;
// };

// const createNewAppointmentService = async (
//   dataAppointment: newAppointmentData
// ): Promise<Appointment | null> => {
//   const { date, time, userId } = dataAppointment;

//   const userEntity = await AppDataSource.getRepository(User).findOneBy({
//     id: userId,
//   });

//   if (userEntity) {
//     const newAppointment = appointmentsRepository.create({
//       date,
//       time,
//       user: userEntity,
//     });

//     await appointmentsRepository.save(newAppointment);
//     return newAppointment;
//   } else return null;
// };

// const cancelAppointmentService = async (
//   id: number
// ): Promise<Appointment | null> => {
//   const foundAppointment = await getAppointmentByIdService(id);
//   if (foundAppointment) {
//     foundAppointment.status = AppointmentStatus.CANCELLED;

//     await appointmentsRepository.save(foundAppointment);
//   }
//   return foundAppointment;
// };

// export {
//   getAllAppointments,
//   getAppointmentByIdService,
//   createNewAppointmentService,
//   cancelAppointmentService,
// };

import { AppDataSource } from "../config/data-source";
import { newAppointmentData } from "../dto/newAppointmentData";
import Appointment from "../entities/Appointment";
import { AppointmentStatus } from "../enums/appointmentStatus";
import User from "../entities/User";

const appointmentsRepository = AppDataSource.getRepository(Appointment);

const getAllAppointments = async (): Promise<Appointment[]> => {
  const allAppointments = await appointmentsRepository.find({
    relations: { user: true },
  });
  return allAppointments;
};

const getAllAppointmentsByUserId = async (userId: number): Promise<Appointment[]> => {
  const userAppointments = await appointmentsRepository.find({
    where: { user: { id: userId } }, // Filtra las citas por el ID del usuario
    relations: ["user"], // Asegúrate de incluir la relación con el usuario
  });
  return userAppointments;
};

const getAppointmentByIdService = async (
  id: number
): Promise<Appointment | null> => {
  const foundApp = await appointmentsRepository.findOne({
    where: { id },
    relations: ["user"],
  });

  return foundApp;
};

const createNewAppointmentService = async (
  dataAppointment: newAppointmentData
): Promise<Appointment | null> => {
  const { date, time, userId } = dataAppointment;

  const userEntity = await AppDataSource.getRepository(User).findOneBy({
    id: userId,
  });

  if (userEntity) {
    const newAppointment = appointmentsRepository.create({
      date,
      time,
      user: userEntity,
    });

    await appointmentsRepository.save(newAppointment);
    return newAppointment;
  } else return null;
};

const cancelAppointmentService = async (
  id: number
): Promise<Appointment | null> => {
  const foundAppointment = await getAppointmentByIdService(id);
  if (foundAppointment) {
    foundAppointment.status = AppointmentStatus.CANCELLED;

    await appointmentsRepository.save(foundAppointment);
  }
  return foundAppointment;
};

export {
  getAllAppointments,
  getAllAppointmentsByUserId, // Asegúrate de exportar esta nueva función
  getAppointmentByIdService,
  createNewAppointmentService,
  cancelAppointmentService,
};
