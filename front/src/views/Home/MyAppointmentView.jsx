// import MyAppointments from "../../components/MyAppointments/MyAppointments";
// import styles from "./MyAppointmentView.module.css";
// import Presentation from "../../components/Presentation/Presentation"

// const MyAppointmentView = () => {
//   return (
//     <div className={styles.container}>
//       <Presentation/>
//       <MyAppointments />
//     </div>
//   );
// };

// export default MyAppointmentView;


import MyAppointments from "../../components/MyAppointments/MyAppointments";
import CreateAppointment from "../../components/CreateAppointment/CreateAppointment"; 
import styles from "./MyAppointmentView.module.css";
import Presentation from "../../components/Presentation/Presentation";

const MyAppointmentView = () => {
  return (
    <div className={styles.container}>
      <Presentation />
      <CreateAppointment /> {/* Agrega el componente para crear turnos */}
      <MyAppointments />
    </div>
  );
};

export default MyAppointmentView;
