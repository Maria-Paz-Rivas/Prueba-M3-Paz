import { useContext, useState } from "react"; 
import { AppointmentsContext } from "../../context/AppointmentsContext"; 
import { AuthContext } from "../../context/AuthContext"; 
import styles from "./CreateAppointment.module.css"; 

const CreateAppointment = () => {
    const { createAppointment } = useContext(AppointmentsContext);
    const { user } = useContext(AuthContext);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            try {
                await createAppointment({ userId: user.id, date, time });
                setDate("");
                setTime("");
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
