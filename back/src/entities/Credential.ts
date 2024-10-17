import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  Index,
} from "typeorm";
import User from "./User";

@Entity({
  name: "credentials",
})
class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne(() => User, (user) => user.credentials)
  user: User;
}
export default Credential;
