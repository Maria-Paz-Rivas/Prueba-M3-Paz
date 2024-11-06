import { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const AppointmentsContext = createContext();

const AppointmentsProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([]);
    const userId = 10; // Cambia esto para obtener el ID dinámicamente si es necesario

    const fetchAppointments = useCallback(async (userId) => {
        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`);
            setAppointments(response.data.appointments);
            console.log("Citas recuperadas:", response.data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    }, []);

    useEffect(() => {
        fetchAppointments(userId);
    }, [fetchAppointments, userId]); // Dependencias del efecto

    const createAppointment = async (appointmentData) => {
        try {
            const response = await axios.post(`http://localhost:3000/appointments/schedule`, appointmentData);
            setAppointments((prevAppointments) => [...prevAppointments, response.data]);
        } catch (error) {
            console.error("Error creating appointment:", error);
        }
    };
    
    const cancelAppointment = async (id) => {
        try {
            await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
            setAppointments((prevAppointments) => prevAppointments.filter(app => app.id !== id));
        } catch (error) {
            console.error("Error canceling appointment:", error);
        }
    };
    
    return (
        <AppointmentsContext.Provider value={{ appointments, fetchAppointments, createAppointment, cancelAppointment }}>
            {children}
        </AppointmentsContext.Provider>
    );
};

AppointmentsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AppointmentsProvider, AppointmentsContext };


