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

import Navbar from "../src/components/Navbar/Navbar";
import MyAppointmentView from "./views/Home/MyAppointmentView";
import Login from "./components/Login/Login";
import RegisterView from "./views/RegisterView";
import { Routes, Route } from "react-router-dom";
import AboutView from "./views/About/AboutView";
import LoginView from "./views/LoginView";
import { SLASH, USER_REGISTER, MY_APPOINTMENTS, ABOUT, LOGIN } from "../../back/src/helpers/routes";
import { AuthProvider } from './context/AuthContext'; 
import { AppointmentsProvider } from './context/AppointmentsContext'; 

function App() {
  return (
    <AuthProvider> 
      <AppointmentsProvider>
        <Navbar />
        <Routes>
          <Route path={SLASH} element={<Login />} />
          <Route path={ABOUT} element={<AboutView />} />
          <Route path={USER_REGISTER} element={<RegisterView />} />
          <Route path={LOGIN} element={<LoginView />} />
          <Route path={MY_APPOINTMENTS} element={<MyAppointmentView />} />
        </Routes>
      </AppointmentsProvider>
    </AuthProvider>
  );
}

export default App;
