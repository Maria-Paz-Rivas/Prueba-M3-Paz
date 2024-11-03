// import styles from "./Navbar.module.css";
// import logo from "../../assets/logo.png";
// import logoMater from "../../assets/logoMater.webp";
// import {Link, useNavigate} from "react-router-dom";




// const Navbar = () => {
//   const navigate = useNavigate();



//   const handleLogout = () => {
//     // Aquí puedes manejar la lógica para cerrar sesión, como limpiar el estado de autenticación
//     console.log("Logout");
    
    
//     // Redirigir al usuario a la página de inicio o a otra página después del logout
//     navigate("/"); // Cambia la ruta según necesites
//   };
 

//   return (
//     <nav className={styles.navbar}>
//       <img src={logo} />

//       <div className={styles.linkContainer}>
//         <Link to="/quienes-somos" className={styles.link}>Quienes somos</Link>
//         <Link to="/registro-de-usuario" className={styles.link}>Registrate</Link>
//         <Link to="/iniciar-sesión" className={styles.link}>Iniciar Sesión</Link>
//         <Link to="/mis-turnos" className={styles.link}>Mis Turnos</Link>
//         <button onClick= { handleLogout} className={styles.link}>Salir</button>
       
        

//       </div>

//       <img src={logoMater} alt= "Logo Mater" />
//     </nav>
//   );
// };


// export default Navbar;




// import styles from "./Navbar.module.css";
// import logo from "../../assets/logo.png";
// import logoMater from "../../assets/logoMater.webp";
// import { Link, useNavigate, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     // Aquí puedes manejar la lógica para cerrar sesión
//     console.log("Logout");
//     navigate("/"); // Cambia la ruta según necesites
//   };

//   const isMyAppointmentsPage = location.pathname === '/mis-turnos';

//   return (
//     <nav className={styles.navbar}>
//       <img src={logo} alt="Logo" />

//       <div className={styles.linkContainer}>
//         {isMyAppointmentsPage ? (
//           <>
//             <Link to="/quienes-somos" className={styles.link}>Quienes somos</Link>
//             <button onClick={handleLogout} className={styles.logoutButton}>Salir</button>
//           </>
//         ) : (
//           <>
//             <Link to="/quienes-somos" className={styles.link}>Quienes somos</Link>
//             <Link to="/registro-de-usuario" className={styles.link}>Registrate</Link>
//             <Link to="/iniciar-sesión" className={styles.link}>Iniciar Sesión</Link>
//             <Link to="/mis-turnos" className={styles.link}>Mis Turnos</Link>
//           </>
//         )}
//       </div>

//       <img src={logoMater} alt="Logo Mater" />
//     </nav>
//   );
// };

// export default Navbar;

       

// import styles from "./Navbar.module.css";
// import logo from "../../assets/logo.png";
// import logoMater from "../../assets/logoMater.webp";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useContext } from "react"; // Importa useContext
// import { AuthContext } from "../../context/AuthContext"; // Asegúrate de que la ruta sea correcta

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user, setUser } = useContext(AuthContext); // Obtén el usuario del contexto

  
//   const handleLogout = () => {
//     setUser(null); // Limpia el estado del usuario
//     navigate('/'); // Redirige a la página de inicio
//   };

//   const isMyAppointmentsPage = location.pathname === '/mis-turnos';

//   return (
//     <nav className={styles.navbar}>
//       <img src={logo} alt="Logo" />

//       <div className={styles.linkContainer}>
//         {isMyAppointmentsPage ? (
//           <>
//             <Link to="/quienes-somos" className={styles.link}>Quienes somos</Link>
//             <button onClick={handleLogout} className={styles.logoutButton}>Salir</button>
//           </>
//         ) : (
//           <>
//             <Link to="/quienes-somos" className={styles.link}>Quienes somos</Link>
//             <Link to="/registro-de-usuario" className={styles.link}>Registrate</Link>
//             <Link to="/iniciar-sesión" className={styles.link}>Iniciar Sesión</Link>
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


import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import logoMater from "../../assets/logoMater.webp";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react"; 
import { AuthContext } from "../../context/AuthContext"; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useContext(AuthContext); 

  const handleLogout = () => {
    setUser(null); // Limpia el estado del usuario
    navigate('/'); // Redirige a la página de inicio
  };

  const isMyAppointmentsPage = location.pathname === '/mis-turnos';

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" />

      <div className={styles.linkContainer}>
        {isMyAppointmentsPage ? (
          <>
            <Link to="/quienes-somos" className={styles.link}>Quienes somos</Link>
            <button onClick={handleLogout} className={styles.logoutButton}>Salir</button>
          </>
        ) : (
          <>
            <Link to="/quienes-somos" className={styles.link}>Quienes somos</Link>
            {/* Solo mostrar "Registrate" e "Iniciar Sesión" si no hay un usuario logueado */}
            {!user && (
              <>
                <Link to="/registro-de-usuario" className={styles.link}>Registrate</Link>
                <Link to="/iniciar-sesión" className={styles.link}>Iniciar Sesión</Link>
              </>
            )}
            {user && ( // Solo mostrar "Mis Turnos" si hay un usuario logueado
              <Link to="/mis-turnos" className={styles.link}>Mis Turnos</Link>
            )}
          </>
        )}
      </div>

      <img src={logoMater} alt="Logo Mater" />
    </nav>
  );
};

export default Navbar;
