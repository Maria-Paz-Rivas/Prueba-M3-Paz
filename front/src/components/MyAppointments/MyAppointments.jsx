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
            <h2 className={styles.title}>Sus turnos registrados</h2>
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
