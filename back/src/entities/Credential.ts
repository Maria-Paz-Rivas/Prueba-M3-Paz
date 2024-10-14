import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { User } from "./User";

@Entity({
  name: "credentials",
  schema: "policonsultorio", // Nombre de la tabla en la base de datos
})
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(() => User, (user) => user.credentials)
  user: User;
}
