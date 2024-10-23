import MyAppointments from "../../components/MyAppointments/MyAppointments";
import styles from "./MyAppointmentView.module.css";

const MyAppointmentView = () => {
  return (
    <div className={styles.container}>
      <MyAppointments />
    </div>
  );
};

export default MyAppointmentView;
