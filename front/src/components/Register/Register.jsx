import { useState } from 'react';
import axios from 'axios';
import { validateRegisterForm } from '../../helpers/validateRegisterForm';
import styles from "./Register.module.css";

const Register = () => {
    const [newUserData, setNewUserData] = useState({
        name: '',
        email: '',
        birthDate: '', 
        nDni: '',
        username: '',
        password: '',
        repeatpassword: '',
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewUserData({
            ...newUserData,
            [name]: value
        });

        setErrors(validateRegisterForm({
            ...newUserData,
            [name]: value
        }));
    };

    const handleBlur = (event) => {
        const { name } = event.target;

        setTouched({
            ...touched,
            [name]: true
        });

        setErrors(validateRegisterForm(newUserData));
    };

    const submitRegisterForm = async (event) => {
        event.preventDefault();

        const validationErrors = validateRegisterForm(newUserData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                console.log('Datos a enviar:', newUserData);

            
                await axios.post('http://localhost:3000/users/register', newUserData);
                
                // Restablece el estado
                setNewUserData({ 
                    name: '',
                    email: '',
                    birthDate: '',
                    nDni: '',
                    username: '',
                    password: '',
                    repeatpassword: '',
                });
                alert("Usuario creado con éxito");
            } catch (error) {
                console.error('Error en la solicitud:', error);
                console.error('Datos del error:', error.response?.data);
                setMessage(error.response?.data?.message || 'Ocurrió un error en el registro');
            }
        } else {
            alert("Errores en el formulario");
        }
    };

    return (
        <div className={styles.registerContainer}>
            <form onSubmit={submitRegisterForm}>
                <h2>Registro de Usuario</h2>
                {message && <p>{message}</p>}
    
                <div className={styles.inputContainer}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Nombre Completo"
                        value={newUserData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={styles.input}
                    />
                    {touched.name && errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                </div>

                <div className={styles.inputContainer}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={newUserData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={styles.input}
                    />
                    {touched.email && errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                </div>

                <div className={styles.inputContainer}>
                    <input
                        name="birthDate"
                        type="date"
                        placeholder="Fecha de Nacimiento"
                        value={newUserData.birthDate}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={styles.input}
                    />
                    {touched.birthDate && errors.birthDate && <p className={styles.errorMessage}>{errors.birthDate}</p>}
                </div>

                <div className={styles.inputContainer}>
                    <input
                        name="nDni"
                        type="number"
                        placeholder="DNI"
                        value={newUserData.nDni}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={styles.input}
                    />
                    {touched.nDni && errors.nDni && <p className={styles.errorMessage}>{errors.nDni}</p>}
                </div>

                <div className={styles.inputContainer}>
                    <input
                        name="username"
                        type="text"
                        placeholder="Nombre del Usuario"
                        value={newUserData.username}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={styles.input}
                    />
                    {touched.username && errors.username && <p className={styles.errorMessage}>{errors.username}</p>}
                </div>

                <div className={styles.inputContainer}>
                    <input
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        value={newUserData.password}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={styles.input}
                    />
                    {touched.password && errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
                </div>

                <div className={styles.inputContainer}>
                    <input
                        name="repeatpassword"
                        type="password"
                        placeholder="Repetir Contraseña"
                        value={newUserData.repeatpassword}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={styles.input}
                    />
                    {touched.repeatpassword && errors.repeatpassword && <p className={styles.errorMessage}>{errors.repeatpassword}</p>}
                </div>
    
                <button type="submit" className={styles.button}>Crear Usuario</button>
            </form>
        </div>
    );
};

export default Register;
