interface IAppointment {
  id: number; // ID numérico que identifica al turno
  date: Date; // Fecha para la cual fue reservado el turno
  time: string; // Hora para la cual fue reservado el turno (como cadena en formato 'HH:mm')
  userId: number; // ID del usuario que agendó el turno (referencia a la entidad User)
  status: "active" | "cancelled"; // Status actual del turno, puede ser "active" o "cancelled"
}

export default IAppointment;
