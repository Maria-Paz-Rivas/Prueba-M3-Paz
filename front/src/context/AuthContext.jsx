import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  
    const [user, setUser] = useState(null);
    const [userAppointments, setUserAppointments] = useState([]);

        useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    
        const login = (userData) => {
        setUser(userData);
    };
    
      return (
        <AuthContext.Provider value={{ user, login, setUser, userAppointments, setUserAppointments }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };


    
  

  