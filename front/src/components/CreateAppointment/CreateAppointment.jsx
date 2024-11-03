// import { useContext, useState } from "react";
// import { AppointmentsContext } from "../../context/AppointmentsContext"; // Asegúrate de la ruta correcta
// import styles from "./CreateAppointment.module.css"; // Asegúrate de crear un archivo de estilos si lo necesitas

// const CreateAppointment = () => {
//     const { createAppointment } = useContext(AppointmentsContext); // Obtener la función de crear turnos
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         createAppointment({ date, time }); // Enviar datos para crear el turno
//         setDate(""); // Limpiar el campo de fecha
//         setTime(""); // Limpiar el campo de hora
//     };

//     return (
//         <form onSubmit={handleSubmit} className={styles.form}>
//             <h2>Crear Turno</h2>
//             <input 
//                 type="date" 
//                 value={date} 
//                 onChange={(e) => setDate(e.target.value)} 
//                 required 
//             />
//             <input 
//                 type="time" 
//                 value={time} 
//                 onChange={(e) => setTime(e.target.value)} 
//                 required 
//             />
//             <button type="submit">Crear Turno</button>
//         </form>
//     );
// };

// export default CreateAppointment;

// import { useContext, useState } from "react"; 
// import { AppointmentsContext } from "../../context/AppointmentsContext"; 
// import { AuthContext } from "../../context/AuthContext"; // Importar el contexto de autenticación
// import styles from "./CreateAppointment.module.css"; 


// const CreateAppointment = () => {
//     const { createAppointment } = useContext(AppointmentsContext); // Obtener la función de crear turnos
//     const { user } = useContext(AuthContext); // Obtener el usuario autenticado
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");

//      // Función para generar horarios disponibles
//      const generateAvailableTimes = () => {
//         const times = [];
//         const startHour = 8; // 8 AM
//         const endHour = 20; // 8 PM

//         for (let hour = startHour; hour <= endHour; hour++) {
//             for (let minute = 0; minute < 60; minute += 15) {
//                 const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//                 times.push(timeString);
//             }
//         }
//         return times;
//     };

//     const availableTimes = generateAvailableTimes(); // Obtener los horarios disponibles

   
   
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (user) {
//             try {
//                 await createAppointment({ userId: user.id, date, time }); // Enviar datos para crear el turno
//                 setDate(""); // Limpiar el campo de fecha
//                 setTime(""); // Limpiar el campo de hora
//             } catch (error) {
//                 console.error("Error al crear el turno:", error);
//             }
//         } else {
//             console.error("No hay usuario autenticado");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className={styles.form}>
//             <h2>Crear Turno</h2>
//             <input 
//                 type="date" 
//                 value={date} 
//                 onChange={(e) => setDate(e.target.value)} 
//                 required 
//             />
//             <input 
//                 type="time" 
//                 value={time} 
//                 onChange={(e) => setTime(e.target.value)} 
//                 required 
//             />
//             <button type="submit">Crear Turno</button>
//         </form>
//     );
// };

// export default CreateAppointment;

import { useContext, useState } from "react"; 
import { AppointmentsContext } from "../../context/AppointmentsContext"; 
import { AuthContext } from "../../context/AuthContext"; 
import styles from "./CreateAppointment.module.css"; 

const CreateAppointment = () => {
    const { createAppointment } = useContext(AppointmentsContext); // Obtener la función de crear turnos
    const { user } = useContext(AuthContext); // Obtener el usuario autenticado
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // Función para generar horarios disponibles
    const generateAvailableTimes = () => {
        const times = [];
        const startHour = 8; // 8 AM
        const endHour = 20; // 8 PM

        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                times.push(timeString);
            }
        }
        return times;
    };

    const availableTimes = generateAvailableTimes(); // Obtener los horarios disponibles

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            try {
                await createAppointment({ userId: user.id, date, time }); // Enviar datos para crear el turno
                setDate(""); // Limpiar el campo de fecha
                setTime(""); // Limpiar el campo de hora
            } catch (error) {
                console.error("Error al crear el turno:", error);
            }
        } else {
            console.error("No hay usuario autenticado");
        }
    };


    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Crear Turno</h2>
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required 
            />
            <select value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="" disabled>Selecciona una hora</option>
                {availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>
                        {timeOption}
                    </option>
                ))}
            </select>
            <button type="submit">Crear Turno</button>
        </form>
    );
};

export default CreateAppointment;
