export const validateRegisterForm = (newUserData) => {
    const errors = {};

    // Validación del nombre
    if (!newUserData.name) {
        errors.name = "Campo Obligatorio";
    } else if (newUserData.name.length < 3) {
        errors.name = "El nombre debe tener al menos 3 caracteres";
    } else if (newUserData.name.length > 15) {
        errors.name = "El nombre no puede tener más de 15 caracteres";
    }

    // Validación del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newUserData.email) {
        errors.email = "Campo Obligatorio";
    } else if (!emailRegex.test(newUserData.email)) {
        errors.email = "Ingrese un email válido";
    }

    // Validación de la fecha de nacimiento
    if (!newUserData.birthDate) {
        errors.birthDate = "Campo Obligatorio";
    } else {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Formato esperado: YYYY-MM-DD
        if (!dateRegex.test(newUserData.birthDate)) {
            errors.birthDate = "Formato de fecha inválido";
        } else {
            const birthDate = new Date(newUserData.birthDate);
            const today = new Date();

            if (isNaN(birthDate.getTime())) {
                errors.birthDate = "Fecha inválida";
            } else {
                const age = today.getFullYear() - birthDate.getFullYear();
                const monthDifference = today.getMonth() - birthDate.getMonth();

                if (age < 12 || (age === 12 && monthDifference < 0)) {
                    errors.birthDate = "Debes ser mayor de 12 años";
                }

                if (birthDate < new Date(1924, 0, 1) || birthDate > new Date(2012, 11, 31)) {
                    errors.birthDate = "La fecha debe ser entre 1924 y 2012";
                }
            }
        }
    }

    // Validación del DNI
    if (!newUserData.nDni) {
        errors.nDni = "Campo Obligatorio";
    } else if (!/^\d{8}$/.test(newUserData.nDni)) {
        errors.nDni = "El DNI debe tener 8 dígitos";
    }

    // Validación del nombre de usuario
    if (!newUserData.username) {
        errors.username = "Campo Obligatorio";
    } else if (newUserData.username.length < 3 || newUserData.username.length > 15) {
        errors.username = "El nombre de usuario debe tener entre 3 y 15 caracteres";
    } else if (/\s/.test(newUserData.username)) {
        errors.username = "El nombre de usuario no puede contener espacios";
    }

    // Validación de la contraseña
    if (!newUserData.password) {
        errors.password = "Campo Obligatorio";
    } else if (newUserData.password.length < 8) {
        errors.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(newUserData.password)) {
        errors.password = "La contraseña debe contener al menos una letra mayúscula";
    } else if (!/[0-9]/.test(newUserData.password)) {
        errors.password = "La contraseña debe contener al menos un número";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newUserData.password)) {
        errors.password = "La contraseña debe contener al menos un carácter especial";
    }

    // Validación de la repetición de contraseña
    if (newUserData.password !== newUserData.repeatpassword) {
        errors.repeatpassword = "Las contraseñas no coinciden";
    }

    return errors;
};

  