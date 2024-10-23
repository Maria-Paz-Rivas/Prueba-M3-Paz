import Navbar from "./components/Navbar/Navbar";

import MyAppointmentView from "./views/Home/MyAppointmentView";

function App() {
  return (
    <>
      <Navbar />

      {/* <MyAppointments /> */}
      <MyAppointmentView />
    </>
  );
}

export default App;
