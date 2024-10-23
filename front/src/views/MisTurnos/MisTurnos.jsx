import { useState } from "react";
import MyAppointments from "../../components/MyAppointments/MyAppointments";
import Turno from "./Turno";

const MisTurnos = () => {
  const [turnos] = useState(MyAppointments); // Estado con los turnos

  return (
    <div>
      <h1>Mis Turnos</h1>
      <ul>
        {turnos.map((turno) => (
          <li key={turno.id}>
            <Turno
              id={turno.id}
              date={turno.date}
              time={turno.time}
              status={turno.status}
              user={turno.user} // Pasar el objeto user
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MisTurnos;
