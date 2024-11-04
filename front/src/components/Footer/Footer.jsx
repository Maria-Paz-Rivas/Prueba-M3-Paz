// Footer.jsx
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Mater - Todos los derechos reservados.</p>
       
          
        </div>
  
    </footer>
  );
};

export default Footer;
