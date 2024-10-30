import Navbar from "../src/components/Navbar/Navbar";
import MyAppointmentView from "./views/Home/MyAppointmentView";
import Login from "./components/Login/Login";
import RegisterView from "./views/RegisterView";




function App() {
  return (
    <>
    <Navbar />
  
   <MyAppointmentView />
      <Login />
      <RegisterView />
    </>
  );
}

export default App;
