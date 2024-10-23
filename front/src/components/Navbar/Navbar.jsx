import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import logoMater from "../../assets/logoMater.webp";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} />

      <div className={styles.spanContainer}>
        <span>Quienes somos</span>
        <span>Servicios</span>
        <span>Política de Privacidad</span>
        <span>Turnos</span>
      </div>

      <img src={logoMater} />
    </nav>
  );
};

export default Navbar;
