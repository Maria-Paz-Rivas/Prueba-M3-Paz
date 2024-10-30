import MyAppointments from "../../components/MyAppointments/MyAppointments";
import styles from "./MyAppointmentView.module.css";
import Presentation from "../../components/Presentation/Presentation"

const MyAppointmentView = () => {
  return (
    <div className={styles.container}>
      <Presentation/>
      <MyAppointments />
    </div>
  );
};

export default MyAppointmentView;
