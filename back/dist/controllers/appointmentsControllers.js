"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointmentsById = exports.getAppointments = void 0;
const getAppointments = (req, res) => {
    res.send("Ruta que devuelve todos los turnos");
};
exports.getAppointments = getAppointments;
const getAppointmentsById = (req, res) => {
    res.send(`Ruta que devuelve un turno por ID: ${req.params.id}`);
};
exports.getAppointmentsById = getAppointmentsById;
const scheduleAppointment = (req, res) => {
    res.send(`Ruta que registra un nuevo turno`);
};
exports.scheduleAppointment = scheduleAppointment;
const cancelAppointment = (req, res) => {
    res.send(`Ruta que cancela un turno ${req.params.id}`);
};
exports.cancelAppointment = cancelAppointment;
