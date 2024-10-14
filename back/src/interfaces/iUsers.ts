export interface IUser {
  id: number; //PK
  name: string;
  email: string;
  birthDate: Date;
  nDni: number;
  credentialsId: number; //FK
}
