// import { createContext, useState } from 'react';
// import PropTypes from 'prop-types';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [userAppointments, setUserAppointments] = useState([]);

//     return (
//         <AuthContext.Provider value={{ user, setUser, userAppointments, setUserAppointments }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Define la validación de props
// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired, // Asegúrate de que 'children' sea un nodo React
// };

// export { AuthProvider, AuthContext };


// import { createContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [userAppointments, setUserAppointments] = useState([]);

//     // Efecto para recuperar el usuario almacenado en localStorage al cargar la aplicación
//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     // Función para iniciar sesión
//     const login = (userData) => {
//         setUser(userData);
//         localStorage.setItem('user', JSON.stringify(userData));
//     };

//     // Función para cerrar sesión
//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem('user');
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout, userAppointments, setUserAppointments }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// // Define la validación de props
// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export { AuthProvider, AuthContext };


// import { createContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [userAppointments, setUserAppointments] = useState([]);

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, setUser, userAppointments, setUserAppointments }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// AuthProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export { AuthProvider, AuthContext };

import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  

    const [user, setUser] = useState(null);
    const [userAppointments, setUserAppointments] = useState([]);

    // Cargar el usuario desde localStorage al iniciar
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    
     // Función para iniciar sesión
    const login = (userData) => {
        setUser(userData);
    };

    // const logout = () => {
    //     setUser(null);
    //     localStorage.removeItem('user');
    // };

    


    return (
        <AuthContext.Provider value={{ user, login, setUser, userAppointments, setUserAppointments }}>
            {children}
        </AuthContext.Provider>
    );
};

// Define la validación de props
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };


    
  

  