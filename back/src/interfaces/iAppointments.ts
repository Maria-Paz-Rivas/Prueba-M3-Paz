import { AppointmentStatus } from "../enums/appointmentStatus";

export interface IAppointments {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: AppointmentStatus;
}
