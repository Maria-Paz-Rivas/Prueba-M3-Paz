// import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
// import { AppointmentStatus } from "../enums/appointmentStatus";
// import { User } from "./User";

// @Entity({
//   name: "appointment",
//   schema: "policonsultorio", // Nombre de la tabla en la base de datos
// })
// export class Appointment {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({
//     type: "date",
//   })
//   date: Date;

//   @Column()
//   time: string;

//   @Column({
//     type: "enum",
//     enum: AppointmentStatus,
//     default: AppointmentStatus.ACTIVE,
//   })
//   status: AppointmentStatus;

//   @ManyToOne(() => User, (user) => user.appointments)
//   user: User;
// }

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { AppointmentStatus } from "../enums/appointmentStatus";
import { User } from "./User";

@Entity({
  name: "appointments",
  schema: "policonsultorio", // Asegúrate de que este esquema sea correcto
})
export class Appointment {
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
