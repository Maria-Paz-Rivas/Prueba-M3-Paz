import { useState, useEffect } from "react";
import MyAppointment from "../MyAppointment/MyAppointment";
import styles from "../MyAppointments/MyAppointments.module.css";
import axios from "axios";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [flag, setFlag] = useState(false)


  useEffect(() => {
    axios
      .get("http://localhost:3000/users/1")
      .then((res) => { setAppointments(res.data);
  })
  .catch ((error) => alert (error.response.data.message));
}, [flag]);

const handleCancelApp =  async (id) => {
  try{
    await axios.put (`http://localhost:3000/appointments/cancel/${id}`);
    setFlag(!flag)

    console.log(`Turno ${id} Cancelado`);
  } catch (error) {
    alert (error)
  }
  
};

  return (
    <>
    
      <h2 className={styles.title}>Turnos Registrados</h2>

      {appointments?.appointments?.map((app) => (
        <MyAppointment
          key={app.id}
          id={app.id}
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
