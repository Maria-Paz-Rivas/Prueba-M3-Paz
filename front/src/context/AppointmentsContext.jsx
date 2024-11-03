// import { createContext, useState } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// const AppointmentsContext = createContext();

// const AppointmentsProvider = ({ children }) => {
//     const [appointments, setAppointments] = useState([]);

//     const fetchAppointments = async (userId) => {
//         try {
//             const response = await axios.get(`http://localhost:3000/appointments/${userId}`);
//             setAppointments(response.data);
//         } catch (error) {
//             console.error("Error fetching appointments:", error);
//         }
//     };

//     return (
//         <AppointmentsContext.Provider value={{ appointments, fetchAppointments }}>
//             {children}
//         </AppointmentsContext.Provider>
//     );
// };

// // Define la validación de props
// AppointmentsProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export { AppointmentsProvider, AppointmentsContext };

// import { createContext, useState } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// const AppointmentsContext = createContext();

// const AppointmentsProvider = ({ children }) => {
//     const [appointments, setAppointments] = useState([]);

  
//     const fetchAppointments = async (userId) => {
//         try {
//             const response = await axios.get(`http://localhost:3000/appointments${userId}`);
//             setAppointments(response.data.appointments); // Asegúrate de que `response.data` sea un array
//             console.log("Citas recuperadas:", response.data); // Verifica que los datos sean correctos
//         } catch (error) {
//             console.error("Error fetching appointments:", error);
//         }
//     };

   
    

//     const cancelAppointment = async (id) => {
//         try {
//             await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
//             // Actualiza la lista de turnos después de cancelar
//             setAppointments((prevAppointments) => 
//                 prevAppointments.filter(app => app.id !== id)
//             );
//         } catch (error) {
//             console.error("Error canceling appointment:", error);
//         }
//     };

//     const createAppointment = async (appointmentData) => {
//         try {
//             const response = await axios.post(`http://localhost:3000/appointments`, appointmentData);
//             setAppointments((prevAppointments) => [...prevAppointments, response.data]);
//         } catch (error) {
//             console.error("Error creating appointment:", error);
//         }
//     };

//     return (
//         <AppointmentsContext.Provider value={{ appointments, fetchAppointments, cancelAppointment, createAppointment }}>
//             {children}
//         </AppointmentsContext.Provider>
//     );
// }
   

// // Define la validación de props
// AppointmentsProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export { AppointmentsProvider, AppointmentsContext };


// import { createContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// const AppointmentsContext = createContext();

// const AppointmentsProvider = ({ children }) => {
//     const [appointments, setAppointments] = useState([]);
//     const userId = 10; // Asegúrate de que esto sea dinámico si es necesario

//     const fetchAppointments = async (userId) => {
//         try {
//             const response = await axios.get(`http://localhost:3000/users/${userId}`);
//             setAppointments(response.data.appointments || []); // Asegúrate de que response.data.appointments sea un array
//             console.log("Citas recuperadas:", response.data); // Verifica que los datos sean correctos
//         } catch (error) {
//             console.error("Error fetching appointments:", error);
//         }
//     };

//     // Llama a fetchAppointments solo una vez al montar el componente
//     useEffect(() => {
//         fetchAppointments(userId);
//     }, [userId]); // Dependencia: solo se ejecutará si userId cambia

//     const cancelAppointment = async (id) => {
//         try {
//             await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
//             setAppointments((prevAppointments) => 
//                 prevAppointments.filter(app => app.id !== id)
//             );
//         } catch (error) {
//             console.error("Error canceling appointment:", error);
//         }
//     };

//     const createAppointment = async (appointmentData) => {
//         try {
//             const response = await axios.post(`http://localhost:3000/appointments`, appointmentData);
//             setAppointments((prevAppointments) => [...prevAppointments, response.data]);
//         } catch (error) {
//             console.error("Error creating appointment:", error);
//         }
//     };

//     return (
//         <AppointmentsContext.Provider value={{ appointments, cancelAppointment, createAppointment }}>
//             {children}
//         </AppointmentsContext.Provider>
//     );
// };

// // Define la validación de props
// AppointmentsProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export { AppointmentsProvider, AppointmentsContext };


// import { createContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// const AppointmentsContext = createContext();

// const AppointmentsProvider = ({ children }) => {
//     const [appointments, setAppointments] = useState([]);
//     const [hasFetched, setHasFetched] = useState(false);
//     const userId = 10; // Cambia esto si es necesario

//     const fetchAppointments = async () => {
//         try {
//             const response = await axios.get(`http://localhost:3000/users/${userId}`);
//             setAppointments(response.data.appointments || []);
//             console.log("Citas recuperadas:", response.data);
//             setHasFetched(true);
//         } catch (error) {
//             console.error("Error fetching appointments:", error);
//             if (error.code === 'ERR_NETWORK') {
//                 console.warn("Error de red: verifica que el servidor esté en funcionamiento.");
//             }
//         }
//     };

//     useEffect(() => {
//         if (!hasFetched) {
//             fetchAppointments();
//         }
//     }, [hasFetched]);

//     return (
//         <AppointmentsContext.Provider value={{ appointments, fetchAppointments }}>
//             {children}
//         </AppointmentsContext.Provider>
//     );
// };

// AppointmentsProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export { AppointmentsProvider, AppointmentsContext };


// import { createContext, useState, useEffect, useCallback } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// const AppointmentsContext = createContext();

// const AppointmentsProvider = ({ children }) => {
//     const [appointments, setAppointments] = useState([]);
//     const userId = 10; // Cambia esto para obtener el ID dinámicamente si es necesario

//     const fetchAppointments = useCallback(async (userId) => {
//         try {
//             const response = await axios.get(`http://localhost:3000/users/${userId}`);
//             setAppointments(response.data.appointments);
//             console.log("Citas recuperadas:", response.data);
//         } catch (error) {
//             console.error("Error fetching appointments:", error);
//         }
//     }, []);

//     useEffect(() => {
//         fetchAppointments(userId);
//     }, [fetchAppointments, userId]); // Dependencias del efecto

//     return (
//         <AppointmentsContext.Provider value={{ appointments, fetchAppointments }}>
//             {children}
//         </AppointmentsContext.Provider>
//     );
// };

// AppointmentsProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export { AppointmentsProvider, AppointmentsContext };


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
