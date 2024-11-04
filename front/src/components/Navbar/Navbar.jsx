import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import logoMater from "../../assets/logoMater.webp";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react"; 
import { AuthContext } from "../../context/AuthContext"; 

const Navbar = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const { user, setUser } = useContext(AuthContext); 

  const handleLogout = () => {
    setUser(null); // Limpia el estado del usuario
    navigate('/'); // Redirige a la página de inicio
  };

  // const isMyAppointmentsPage = location.pathname === '/mis-turnos';

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" />
  
      <div className={styles.linkContainer}>
        <Link to="/quienes-somos" className={styles.link}>Quienes somos</Link>
        <Link to="/contacto" className={styles.link}>Contacto</Link>
  
        {user ? (
          <>
            <Link to="/mis-turnos" className={styles.link}>Mis Turnos</Link>
            <button onClick={handleLogout} className={styles.logoutButton}>Salir</button>
          </>
        ) : (
          <>
            <Link to="/registro-de-usuario" className={styles.link}>Registrate</Link>
            <Link to="/iniciar-sesión" className={styles.link}>Iniciar Sesión</Link>
          </>
        )}
      </div>
  
      <img src={logoMater} alt="Logo Mater" />
    </nav>
  );
};

export default Navbar;



//   return (
//     <nav className={styles.navbar}>
//       <img src={logo} alt="Logo" />
  
//       <div className={styles.linkContainer}>
//         <Link to="/quienes-somos" className={styles.link}>Quienes somos</Link>
//         <Link to="/contacto" className={styles.link}>Contacto</Link>
  
//         {isMyAppointmentsPage ? (
//           <>
//             <button onClick={handleLogout} className={styles.logoutButton}>Salir</button>
//           </>
//         ) : (
//           <>
//             {/* Solo mostrar "Registrate" e "Iniciar Sesión" si no hay un usuario logueado */}
//             {!user && (
//               <>
//                 <Link to="/registro-de-usuario" className={styles.link}>Registrate</Link>
//                 <Link to="/iniciar-sesión" className={styles.link}>Iniciar Sesión</Link>
//               </>
//             )}
//             {user && ( // Solo mostrar "Mis Turnos" si hay un usuario logueado
//               <Link to="/mis-turnos" className={styles.link}>Mis Turnos</Link>
//             )}
//           </>
//         )}
//       </div>
  
//       <img src={logoMater} alt="Logo Mater" />
//     </nav>
//   );
// };

// export default Navbar;
