// import { useState, useEffect } from "react";
// import MyAppointment from "../MyAppointment/MyAppointment";
// import styles from "../MyAppointments/MyAppointments.module.css";
// import axios from "axios";

// const MyAppointments = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [flag, setFlag] = useState(false)


//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/users/1")
//       .then((res) => { setAppointments(res.data);
//   })
//   .catch ((error) => alert (error.response.data.message));
// }, [flag]);

// const handleCancelApp =  async (id) => {
//   try{
//     await axios.put (`http://localhost:3000/appointments/cancel/${id}`);
//     setFlag(!flag)

//     console.log(`Turno ${id} Cancelado`);
//   } catch (error) {
//     alert (error)
//   }
  
// };

//   return (
//     <>
    
//       <h2 className={styles.title}>Turnos Registrados</h2>

//       {appointments?.appointments?.map((app) => (
//         <MyAppointment
//           key={app.id}
//           id={app.id}
//           date={app.date}
//           time={app.time}
//           status={app.status}
//           handleCancelApp={() => handleCancelApp(app.id)}
//         />
//       ))}
//     </>
//   );
// };

// export default MyAppointments;

// import { useEffect, useContext } from "react";
// import MyAppointment from "../MyAppointment/MyAppointment";
// import styles from "../MyAppointments/MyAppointments.module.css";
// import { AuthContext } from "../../context/AuthContext"; // Asegúrate de que la ruta sea correcta
// import { AppointmentsContext } from "../../context/AppointmentsContext"; // Contexto para los turnos
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const MyAppointments = () => {
//   const { user } = useContext(AuthContext); // Obtener usuario del contexto
//   const { appointments, fetchAppointments } = useContext(AppointmentsContext); // Obtener turnos y función para fetch
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Si no hay usuario logueado, redirigir a Home
//     if (!user) {
//       navigate('/'); // Ajusta la ruta según tu configuración
//     } else {
//       // Si hay un usuario, solicita los turnos
//       fetchAppointments(user.id); // Llama a la función para obtener los turnos del usuario
//     }
//   }, [user, navigate, fetchAppointments]);

//   const handleCancelApp = async (id) => {
//     try {
//       await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
//       fetchAppointments(user.id); // Vuelve a obtener los turnos después de cancelar
//       console.log(`Turno ${id} Cancelado`);
//     } catch (error) {
//       alert(error);
//     }
//   };

//   return (
//     <>
//       <h2 className={styles.title}>Turnos Registrados</h2>

//       {appointments.length > 0 ? (
//         appointments.map((app) => (
//           <MyAppointment
//             key={app.id}
//             id={app.id}
//             date={app.date}
//             time={app.time}
//             status={app.status}
//             handleCancelApp={() => handleCancelApp(app.id)}
//           />
//         ))
//       ) : (
//         <p>No tienes turnos registrados.</p> // Mensaje si no hay turnos
//       )}
//     </>
//   );
// };

// export default MyAppointments;

// import { useEffect, useContext } from "react";
// import MyAppointment from "../MyAppointment/MyAppointment";
// import styles from "../MyAppointments/MyAppointments.module.css";
// import { AuthContext } from "../../context/AuthContext"; 
// import { AppointmentsContext } from "../../context/AppointmentsContext"; 
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const MyAppointments = () => {
//   const { user } = useContext(AuthContext); 
//   const { appointments, fetchAppointments } = useContext(AppointmentsContext); 
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Si no hay usuario logueado, redirigir a Home
//     if (!user) {
//       navigate('/'); // Redirige a la página de inicio
//     } else {
//       // Si hay un usuario, solicita los turnos
//       fetchAppointments(user.id); // Llama a la función para obtener los turnos del usuario
//     }
//   }, [user, navigate, fetchAppointments]);

//   const handleCancelApp = async (id) => {
//     try {
//       await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
//       fetchAppointments(user.id); // Actualiza los turnos después de cancelar
//       console.log(`Turno ${id} Cancelado`);
//     } catch (error) {
//       alert("Error al cancelar el turno: " + error.message); // Mejora el mensaje de error
//     }
//   };

//   return (
//     <>
//       <h2 className={styles.title}>Turnos Registrados</h2>

//       {appointments.length > 0 ? (
//         appointments.map((app) => (
//           <MyAppointment
//             key={app.id}
//             id={app.id}
//             date={app.date}
//             time={app.time}
//             status={app.status}
//             handleCancelApp={() => handleCancelApp(app.id)}
//           />
//         ))
//       ) : (
//         <p>No tienes turnos registrados.</p> // Mensaje si no hay turnos
//       )}
//     </>
//   );
// };

// export default MyAppointments;

// import { useEffect, useContext } from "react";
// import MyAppointment from "../MyAppointment/MyAppointment";
// import styles from "../MyAppointments/MyAppointments.module.css";
// import { AuthContext } from "../../context/AuthContext";
// import { AppointmentsContext } from "../../context/AppointmentsContext";
// import { useNavigate } from "react-router-dom";

// const MyAppointments = () => {
//     const { user } = useContext(AuthContext);
//     const { appointments, fetchAppointments, cancelAppointment } = useContext(AppointmentsContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//       console.log("Usuario actual:", user);
//         if (!user) {
//             navigate('/');
//         } else {
//           console.log("ID de usuario:", user.id);
//             fetchAppointments(user.id);
//         }
//     }, [user, navigate, fetchAppointments]);




//     const handleCancelApp = (id) => {
//         cancelAppointment(id); // Llama a la función de cancelación del contexto
//     };

//     return (
//         <>
//             <h2 className={styles.title}>Turnos Registrados</h2>

//             {appointments.length > 0 ? (
//                 appointments.map((app) => (
//                     <MyAppointment
//                         key={app.id}
//                         id={app.id}
//                         date={app.date}
//                         time={app.time}
//                         status={app.status}
//                         handleCancelApp={() => handleCancelApp(app.id)} // Pasa la función
//                     />
//                 ))
//             ) : (
//                 <p>No tienes turnos registrados.</p>
//             )}
//         </>
//     );
// };

// export default MyAppointments;


// import { useEffect, useContext } from "react";
// import MyAppointment from "../MyAppointment/MyAppointment";
// import styles from "./MyAppointments.module.css"; 
// import { AuthContext } from "../../context/AuthContext";
// import { AppointmentsContext } from "../../context/AppointmentsContext";
// import { useNavigate } from "react-router-dom";

// const MyAppointments = () => {
//     const { user } = useContext(AuthContext);
//     const { appointments, fetchAppointments, cancelAppointment } = useContext(AppointmentsContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         console.log("Usuario actual:", user);
//         if (!user) {
//             navigate('/');
//         } else {
//             console.log("ID de usuario:", user.id);
//             fetchAppointments(user.id); // Asegúrate de que fetchAppointments se llame correctamente
//         }
//     }, [user, navigate, fetchAppointments]);

//     const handleCancelApp = (id) => {
//         cancelAppointment(id); // Llama a la función de cancelación del contexto
//     };

//     return (
//         <>
//             <h2 className={styles.title}>Turnos Registrados</h2>
//             {appointments.length > 0 ? (
//                 appointments.map((app) => (
//                     <MyAppointment
//                         key={app.id}
//                         id={app.id}
//                         date={app.date}
//                         time={app.time}
//                         status={app.status}
//                         handleCancelApp={() => handleCancelApp(app.id)} // Pasa la función
//                     />
//                 ))
//             ) : (
//                 <p>No tienes turnos registrados.</p>
//             )}
//         </>
//     );
// };

// export default MyAppointments;


import { useEffect, useContext } from "react";
import MyAppointment from "../MyAppointment/MyAppointment";
import styles from "./MyAppointments.module.css"; 
import { AuthContext } from "../../context/AuthContext";
import { AppointmentsContext } from "../../context/AppointmentsContext";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
    const { user } = useContext(AuthContext);
    const { appointments, fetchAppointments, cancelAppointment } = useContext(AppointmentsContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
        } else {
            fetchAppointments(user.id);
        }
    }, [user, navigate, fetchAppointments]);

    const handleCancelApp = (id) => {
        cancelAppointment(id);
    };

    return (
        <>
            <h2 className={styles.title}>Turnos Registrados</h2>
            {appointments.length > 0 ? (
                appointments.map((app) => (
                    <MyAppointment
                        key={app.id}
                        id={app.id}
                        date={app.date}
                        time={app.time}
                        status={app.status}
                        handleCancelApp={() => handleCancelApp(app.id)}
                    />
                ))
            ) : (
                <p>No tienes turnos registrados.</p>
            )}
        </>
    );
};

export default MyAppointments;
