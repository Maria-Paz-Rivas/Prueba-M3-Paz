import { useState, useEffect } from "react";

import MyAppointment from "../MyAppointment/MyAppointment";
import styles from "../MyAppointments/MyAppointments.module.css";
import axios from "axios";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments")
      .then((res) => setAppointments(res.data));
  }, []);

  const handleCancelApp = (id) => {
    console.log(`Turno ${id} Cancelado`);
  };

  return (
    <>
      {/* <Presentation /> */}
      <h2 className={styles.title}>Turnos Registrados</h2>

      {appointments.map((app) => (
        <MyAppointment
          key={app.id}
          id={app.id}
          name={app.user.name}
          date={app.date}
          time={app.time}
          status={app.status}
          handleCancelApp={() => handleCancelApp(app.id)}
        />
      ))}
    </>
  );
};

export default MyAppointments;
