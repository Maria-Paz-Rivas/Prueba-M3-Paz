import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({ name: "users", schema: "policonsultorio" })
export class User {
  @PrimaryGeneratedColumn() //id numerico incremental
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  email: string;

  @Column({ type: "date" })
  birthDate: Date;

  @Column("integer")
  nDni: number;

  @OneToOne(() => Credential, (credential) => credential.user, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  credentials: Credential;

  @OneToMany(() => Appointment, (app) => app.user)
  appointments: Appointment[];
}
