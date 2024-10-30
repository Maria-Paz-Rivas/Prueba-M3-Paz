export const validateLoginForm = (newUserData) => {
    const errors = {};

    // Validación del nombre de usuario
    if (!newUserData.username) {
        errors.username = "El nombre de usuario es requerido";
    } else if (newUserData.username.length > 10) {
        errors.username = "El usuario no puede tener más de 10 caracteres";
    } else if (!/[A-Z]/.test(newUserData.username)) {
        errors.username = "El nombre del usuario debe contener al menos una letra mayúscula.";
    } else if (/\s/.test(newUserData.username)) {
        errors.username = "El nombre del usuario no puede contener espacios.";
    }

    // Validación de la contraseña
    if (!newUserData.userpassword) {
        errors.userpassword = "La contraseña es requerida";
    } else if (newUserData.userpassword.length < 8) {
        errors.userpassword = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(newUserData.userpassword)) {
        errors.userpassword = "La contraseña debe contener al menos una letra mayúscula";
    } else if (!/[0-9]/.test(newUserData.userpassword)) {
        errors.userpassword = "La contraseña debe contener al menos un número";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(newUserData.userpassword)) {
        errors.userpassword = "La contraseña debe contener al menos un carácter especial";
    }

    return errors;
};
