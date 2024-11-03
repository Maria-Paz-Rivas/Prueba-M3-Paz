// import Navbar from "../src/components/Navbar/Navbar";
// import MyAppointmentView from "./views/Home/MyAppointmentView";
// import Login from "./components/Login/Login";
// import RegisterView from "./views/RegisterView";
// import { Routes, Route } from "react-router-dom";
// import AboutView from "./views/About/AboutView";
// import LoginView from "./views/LoginView";
// import { SLASH, USER_REGISTER, MY_APPOINTMENTS, ABOUT, LOGIN } from "../../back/src/helpers/routes";


// function App() {
//   return (
//     <>
//       <Navbar />


//       <Routes>

//     <Route path= {SLASH} element= { <Login />} /> 
//     <Route path= {ABOUT} element= { <AboutView />} />
//     <Route path= {USER_REGISTER} element={<RegisterView />} />
//     <Route path= {LOGIN} element= { <LoginView />} />
//     <Route path= {MY_APPOINTMENTS} element= { <MyAppointmentView />} />


//       </Routes>

//      </>
//   );
// }

// export default App;

// import Navbar from "../src/components/Navbar/Navbar";
// import MyAppointmentView from "./views/Home/MyAppointmentView";
// import Login from "./components/Login/Login";
// import RegisterView from "./views/RegisterView";
// import { Routes, Route } from "react-router-dom";
// import AboutView from "./views/About/AboutView";
// import LoginView from "./views/LoginView";
// import { SLASH, USER_REGISTER, MY_APPOINTMENTS, ABOUT, LOGIN } from "../../back/src/helpers/routes";
// import { AuthProvider } from './context/AuthContext'; 
// import { AppointmentsProvider } from './context/AppointmentsContext'; 


// function App() {
//   return (
//     <AuthProvider> 
//         <AppointmentsProvider>
//       <Navbar />
//       <Routes>
//         <Route path={SLASH} element={<Login />} />
//         <Route path={ABOUT} element={<AboutView />} />
//         <Route path={USER_REGISTER} element={<RegisterView />} />
//         <Route path={LOGIN} element={<LoginView />} />
//         <Route path={MY_APPOINTMENTS} element={<MyAppointmentView />} />
//       </Routes>
//       </AppointmentsProvider>
//     </AuthProvider>
//   );
// }

// export default App;

// import Navbar from "../src/components/Navbar/Navbar";
// import MyAppointmentView from "./views/Home/MyAppointmentView";
// import Login from "./components/Login/Login";
// import RegisterView from "./views/RegisterView";
// import { Routes, Route } from "react-router-dom";
// import LoginView from "./views/LoginView";
// import { SLASH, USER_REGISTER, MY_APPOINTMENTS, LOGIN, ABOUT_US } from "../../back/src/helpers/routes";
// import { AuthProvider } from './context/AuthContext'; 
// import { AppointmentsProvider } from './context/AppointmentsContext'; 
// import AboutUs from "./components/AboutUs/AboutUs";
// import styles from "./app.module.css"; // Asegúrate de la ruta correcta


// function App() {
//   return (
//     <AuthProvider> 
//       <AppointmentsProvider>
//         <Navbar />
       
//         <Routes>
//           <Route path={SLASH} element={<Login />} />
//           <Route path={USER_REGISTER} element={<RegisterView />} />
//           <Route path={LOGIN} element={<LoginView />} />
//           <Route path={MY_APPOINTMENTS} element={<MyAppointmentView />} />
//           <Route path={ABOUT_US} element= {<AboutUs />} />
          
//         </Routes>
       
//       </AppointmentsProvider>
//     </AuthProvider>
//   );
// }

// export default App;



import Navbar from "../src/components/Navbar/Navbar";
import MyAppointmentView from "./views/Home/MyAppointmentView";
import Login from "./components/Login/Login";
import RegisterView from "./views/RegisterView";
import Contact from "./components/Contact/Contact"
import { Routes, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import { SLASH, USER_REGISTER, MY_APPOINTMENTS, LOGIN, ABOUT_US, CONTACT } from "../../back/src/helpers/routes";
import { AuthProvider } from './context/AuthContext'; 
import { AppointmentsProvider } from './context/AppointmentsContext'; 
import AboutUs from "./components/AboutUs/AboutUs";
import styles from './App.module.css'; // Importa el CSS Module

function App() {
  return (
    <div className={styles.container}> 
      <AuthProvider> 
        <AppointmentsProvider>
          <Navbar />
          <Routes>
            <Route path={SLASH} element={<Login />} />
            <Route path={USER_REGISTER} element={<RegisterView />} />
            <Route path={LOGIN} element={<LoginView />} />
            <Route path={MY_APPOINTMENTS} element={<MyAppointmentView />} />
            <Route path={ABOUT_US} element={<AboutUs />} />
            <Route path={CONTACT} element={<Contact />} />
          </Routes>
        </AppointmentsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
