import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  Index,
} from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({ name: "users" })
class User {
  @PrimaryGeneratedColumn() //id numerico incremental
  id: number;

  @Column({ type: "varchar", default: "default_username", length: 100 })
  name: string;
  // @Index({ unique: true })

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "date" })
  birthDate: Date;

  @Column("integer")
  nDni: number;
  @Index({ unique: true })
  @OneToOne(() => Credential, (credential) => credential.user, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  credentials: Credential;

  @OneToMany(() => Appointment, (app) => app.user)
  appointments: Appointment[];
}
export default User;
