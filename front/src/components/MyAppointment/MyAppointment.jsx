import styles from "./MyAppointment.module.css";

const MyAppointment = ({ name, date, time, status, handleCancelApp }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Paciente: {name}</h3>
      <p className={styles.paragraph}>Fecha: {date}</p>
      <p className={styles.paragraph}>Horario: {time}</p>
      <p className={styles.paragraph}>Estado: {status}</p>
      <button className={styles.button} onClick={handleCancelApp}>
        Cancelar
      </button>
    </div>
  );
};

export default MyAppointment;
