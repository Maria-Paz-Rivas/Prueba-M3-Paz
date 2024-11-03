
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Contacto</h1>
      <p>Para más información, no dudes en contactarnos a través de los siguientes medios:</p>
      <ul>
        <li><strong>Teléfono:</strong> +54 9 3487 886435</li>
        <li><strong>Email:</strong> contacto@mater.com</li>
        <li><strong>Dirección:</strong> Rómulo Noya 863, Zárate, Argentina. </li>
      </ul>
      <h2>Horario de Atención</h2>
      <p>Lunes a Viernes: 8:00 AM - 9:00 PM</p>
    </div>
  );
};

export default Contact;
