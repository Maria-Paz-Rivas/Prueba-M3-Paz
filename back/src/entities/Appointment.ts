import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../enums/appointmentStatus";
import User from "./User";

@Entity({
  name: "appointment",
})
class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "date",
  })
  date: Date;

  @Column()
  time: string;

  @Column({
    type: "enum",
    enum: AppointmentStatus,
    default: AppointmentStatus.ACTIVE,
  })
  status: AppointmentStatus;

  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
export default Appointment;
