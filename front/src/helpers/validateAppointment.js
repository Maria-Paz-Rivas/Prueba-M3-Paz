export const validateAppointment = (date, time, availableTimes) => {
    const errors = {};

    const today = new Date().toISOString().split("T")[0]; // Formato YYYY-MM-DD
    const currentDate = new Date(); // Fecha y hora actuales
    const selectedDate = new Date(`${date}T${time}`); // Fecha y hora seleccionada

    // Validación de fecha: no puede ser anterior a hoy
    if (date < today) {
        errors.date = "La fecha no puede ser anterior a la actual.";
    }

    // Validación de días de la semana: no se pueden seleccionar sábado o domingo
    const dayOfWeek = new Date(date).getDay();
    if (dayOfWeek === 5 || dayOfWeek === 6) {
        errors.date = "Disculpe, no se pueden agendar turnos los fines de semana.";
    }
    
      // Validación de turno mínimo 24 horas de antelación
    const diffInHours = (selectedDate - currentDate) / (1000 * 60 * 60); // Diferencia en horas
    if (diffInHours < 24) {
        errors.date = "El turno debe ser agendado con al menos 24 horas de antelación.";
    }

    // Validación de hora: debe estar en la lista de horas disponibles
    if (!availableTimes.includes(time)) {
        errors.time = "La hora seleccionada no es válida.";
    }

     // Si no hay errores, es un turno válido y lo confirmamos
     if (Object.keys(errors).length === 0) {
        alert("¡Tu turno ha sido reservado con éxito!");
    }

    return errors;
};
