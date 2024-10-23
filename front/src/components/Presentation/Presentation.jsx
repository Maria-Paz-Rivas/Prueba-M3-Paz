import styles from "./Presentation.module.css";

const Presentation = () => {
  return (
    <>
      <div className={styles.parrafo}>
        <h1>Bienvenido a Nuestro Sistema de Turnos</h1>
        <p>
          Nuestro sistema le permite gestionar sus turnos de manera eficiente y
          sencilla. Puede reservar, cancelar o modificar sus turnos.
        </p>

        <p>Si tiene alguna pregunta, no dude en contactarnos.</p>
      </div>
    </>
  );
};

export default Presentation;
