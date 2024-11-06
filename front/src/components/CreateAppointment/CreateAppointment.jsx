// import { useContext, useState, useEffect } from "react"; 
// import { AppointmentsContext } from "../../context/AppointmentsContext"; 
// import { AuthContext } from "../../context/AuthContext"; 
// import styles from "./CreateAppointment.module.css"; 

// const CreateAppointment = () => {
//     const { createAppointment } = useContext(AppointmentsContext);
//     const { user } = useContext(AuthContext);
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");

//     const generateAvailableTimes = () => {
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

//     const availableTimes = generateAvailableTimes();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (user) {
//             try {
//                 await createAppointment({ userId: user.id, date, time });
//                 setDate("");
//                 setTime("");
//             } catch (error) {
//                 console.error("Error al crear el turno:", error);
//             }
//         } else {
//             console.error("No hay usuario autenticado");
//         }
//     };

//     // Establece la fecha mínima para el input de fecha
//     useEffect(() => {
//         const today = new Date().toISOString().split("T")[0]; // Obtener la fecha actual en formato YYYY-MM-DD
//         document.querySelector('input[type="date"]').setAttribute('min', today);
//     }, []);

//     return (
//         <form onSubmit={handleSubmit} className={styles.form}>
//             <h2>Crear Turno</h2>
//             <input 
//                 type="date" 
//                 value={date} 
//                 onChange={(e) => setDate(e.target.value)} 
//                 required 
//             />
//             <select value={time} onChange={(e) => setTime(e.target.value)} required>
//                 <option value="" disabled>Selecciona una hora</option>
//                 {availableTimes.map((timeOption) => (
//                     <option key={timeOption} value={timeOption}>
//                         {timeOption}
//                     </option>
//                 ))}
//             </select>
//             <button type="submit">Crear Turno</button>
//         </form>
//     );
// };

// export default CreateAppointment;

import { useContext, useState, useEffect } from "react"; 
import { AppointmentsContext } from "../../context/AppointmentsContext"; 
import { AuthContext } from "../../context/AuthContext"; 
import { validateAppointment } from "../../helpers/validateAppointment"
import styles from "./CreateAppointment.module.css"; 

const CreateAppointment = () => {
    const { createAppointment } = useContext(AppointmentsContext);
    const { user } = useContext(AuthContext);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [errors, setErrors] = useState({}); // Para guardar los errores de validación

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

    const availableTimes = generateAvailableTimes();

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar antes de enviar
        const validationErrors = validateAppointment(date, time, availableTimes);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Mostrar errores si los hay
            return;
        }

        // Si no hay errores, proceder a crear el turno
        if (user) {
            try {
                await createAppointment({ userId: user.id, date, time });
                setDate(""); // Limpiar el estado después de crear el turno
                setTime("");
            } catch (error) {
                console.error("Error al crear el turno:", error);
            }
        } else {
            console.error("No hay usuario autenticado");
        }
    };

    // Establecer la fecha mínima para el input de fecha
    useEffect(() => {
        const today = new Date().toISOString().split("T")[0]; // Obtener la fecha actual en formato YYYY-MM-DD
        document.querySelector('input[type="date"]').setAttribute('min', today);
    }, []);

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Crear Turno</h2>
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                required 
            />
            {errors.date && <span className={styles.error}>{errors.date}</span>} {/* Mostrar el error de fecha si existe */}
            
            <select value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="" disabled>Selecciona una hora</option>
                {availableTimes.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>
                        {timeOption}
                    </option>
                ))}
            </select>
            {errors.time && <span className={styles.error}>{errors.time}</span>} {/* Mostrar el error de hora si existe */}
            
            <button type="submit">Crear Turno</button>
        </form>
    );
};

export default CreateAppointment;
