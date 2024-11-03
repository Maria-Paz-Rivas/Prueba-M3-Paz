// import { useState } from 'react';
// import axios from 'axios';
// import styles from "./Login.module.css";
// import { useNavigate } from 'react-router-dom';
// import { MY_APPOINTMENTS, USER_REGISTER } from '../../../../back/src/helpers/routes';
// import { Link } from 'react-router-dom';


// const Login = () => {
//     const navigate = useNavigate()

//     const [user, setUserData] = useState({
//         username: '',
//         password: ''
//     });

//     const [message] = useState('');

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;

//         setUserData({
//             ...user,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         console.log('Datos de usuario enviados:', user);

//         try {
//              await axios.post('http://localhost:3000/users/login', user);
//          navigate(MY_APPOINTMENTS)

//         } catch (error) {
         
//             if (error.status >=400 && error.status <=400) return alert ("Usuario o contraseña incorrecto")
//                 return alert ("Error del servidor")

        
//         }
//     };

//     return (
//         <div className={styles.loginContainer}>
//             <form onSubmit={handleSubmit}>
//                 <h2>Iniciar Sesión</h2>
//                 {message && <p className={styles.message}>{message}</p>} {/* Mostrar el mensaje si existe */}

//                 <input
//                     name="username"
//                     type="text"
//                     placeholder="Nombre del Usuario"
//                     className={styles.input}
//                     value={user.username}
//                     onChange={handleInputChange}
//                 />

//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="*****"
//                     className={styles.input}
//                     value={user.password}
//                     onChange={handleInputChange}
//                 />

//                 <button type="submit" className={styles.submit}>Enviar</button>
//             </form>
//             <p>
//   ¿No estás registrado? Regístrate haciendo clic <Link to={USER_REGISTER}>ACÁ</Link>.
// </p>
//         </div>
//     );
// };

// export default Login;

// src/components/Login.js


// import { useState, useContext } from 'react';
// import axios from 'axios';
// import styles from "./Login.module.css";
// import { useNavigate } from 'react-router-dom';
// import { MY_APPOINTMENTS, USER_REGISTER } from '../../../../back/src/helpers/routes';
// import { Link } from 'react-router-dom';
// import { AuthContext } from  '../../context/AuthContext'

// const Login = () => {
//     const navigate = useNavigate();
//     const { setUser } = useContext(AuthContext); // Obtén la función setUser

//     const [userData, setUserData] = useState({
//         username: '',
//         password: ''
//     });

//     const [message] = useState('');

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setUserData({
//             ...userData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:3000/users/login', userData);
//             // Guarda la información del usuario en el contexto
//             setUser(response.data.user); // Asegúrate de que la respuesta contenga la información del usuario
//             navigate(MY_APPOINTMENTS);
//         } catch (error) {
//             console.error("Error en el login:", error); 
//             alert("Usuario o contraseña incorrecto");
//         }
//     };

//     return (
//         <div className={styles.loginContainer}>
//             <form onSubmit={handleSubmit}>
//                 <h2>Iniciar Sesión</h2>
//                 {message && <p className={styles.message}>{message}</p>}

//                 <input
//                     name="username"
//                     type="text"
//                     placeholder="Nombre del Usuario"
//                     className={styles.input}
//                     value={userData.username}
//                     onChange={handleInputChange}
//                 />

//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="*****"
//                     className={styles.input}
//                     value={userData.password}
//                     onChange={handleInputChange}
//                 />

//                 <button type="submit" className={styles.submit}>Enviar</button>
//             </form>
//             <p>
//                 ¿No estás registrado? Regístrate haciendo clic <Link to={USER_REGISTER}>ACÁ</Link>.
//             </p>
//         </div>
//     );
// };

// export default Login;

// import { useState, useContext } from 'react';
// import axios from 'axios';
// import styles from "./Login.module.css";
// import { useNavigate } from 'react-router-dom';
// import { MY_APPOINTMENTS, USER_REGISTER } from '../../../../back/src/helpers/routes';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// const Login = () => {
//     const navigate = useNavigate();
//     const { setUser } = useContext(AuthContext); // Obtén la función setUser

//     const [userData, setUserData] = useState({
//         username: '',
//         password: ''
//     });

//     const [message, setMessage] = useState(''); // Cambiado para usar setMessage

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setUserData({
//             ...userData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setMessage(''); // Limpiar mensaje antes de hacer la solicitud

//         try {
//             const response = await axios.post('http://localhost:3000/users/login', userData);
//             setUser(response.data.user); // Asegúrate de que la respuesta contenga la información del usuario
//             navigate(MY_APPOINTMENTS);
//         } catch (error) {
//             console.error("Error en el login:", error);
//             setMessage("Usuario o contraseña incorrecto"); // Actualiza el mensaje de error
//         }
//     };

//     return (
//         <div className={styles.loginContainer}>
//             <form onSubmit={handleSubmit}>
//                 <h2>Iniciar Sesión</h2>
//                 {message && <p className={styles.message}>{message}</p>} {/* Muestra el mensaje si existe */}

//                 <input
//                     name="username"
//                     type="text"
//                     placeholder="Nombre del Usuario"
//                     className={styles.input}
//                     value={userData.username}
//                     onChange={handleInputChange}
//                 />

//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="*****"
//                     className={styles.input}
//                     value={userData.password}
//                     onChange={handleInputChange}
//                 />

//                 <button type="submit" className={styles.submit}>Enviar</button>
//             </form>
//             <p>
//                 ¿No estás registrado? Regístrate haciendo clic <Link to={USER_REGISTER}>ACÁ</Link>.
//             </p>
//         </div>
//     );
// };

// export default Login;

import { useState, useContext } from 'react';
import axios from 'axios';
import styles from "./Login.module.css";
import { useNavigate } from 'react-router-dom';
import { MY_APPOINTMENTS, USER_REGISTER } from '../../../../back/src/helpers/routes';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // Obtén la función login

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

        
       
     const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3000/users/login', userData);
            const user = response.data.user; // Asegúrate de que la respuesta contenga la información del usuario
            localStorage.setItem('user', JSON.stringify(user)); // Guarda en localStorage
            login(user); // Usa la función login del contexto

           

            navigate(MY_APPOINTMENTS);
        } catch (error) {
            console.error("Error en el login:", error);
            setMessage("Usuario o contraseña incorrecto");
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                {message && <p className={styles.message}>{message}</p>}

                <input
                    name="username"
                    type="text"
                    placeholder="Nombre del Usuario"
                    className={styles.input}
                    value={userData.username}
                    onChange={handleInputChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="*****"
                    className={styles.input}
                    value={userData.password}
                    onChange={handleInputChange}
                />

                <button type="submit" className={styles.submit}>Enviar</button>
            </form>
            <p>
                ¿No estás registrado? Regístrate haciendo clic <Link to={USER_REGISTER}>ACÁ</Link>.
            </p>
        </div>
    );
};

export default Login;
