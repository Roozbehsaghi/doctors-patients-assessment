import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Dutypage from "./components/pages/doctor/Dutypage";
import PatientsList from "./components/pages/patient/PatientsList";
import PatientDetails from "./components/pages/patient/PatientDetail";
import PatientSignUp from "./components/pages/signup/PatientSignUp";
import SelectDoctor from "./components/pages/patient/selectDoctor/SelectDoctor";
import "./App.css";
import moment from "moment";

// Route to spesific page
const pathToDutyPage = "/duty-page";
const pathToPatientPage = "/patient-list";

const welcomeText = "Welcome to AMS GPs";
const weAre = "We are: ";
const appointmentText = "To make an appointment";
const callText = "Call: 021 555 5555";
const whoIsDutyText = "Who is on duty?";

function App() {
  let currentMoment = moment().format("HH");
  let currentTime = parseFloat(currentMoment);

  const openTime = 8;
  const closeTime = 20;

  const openingTime = () => {
    if (openTime < currentTime && currentTime < closeTime) {
      return "Open";
    } else {
      return "Closed";
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path={"/"}
          element={
            <Homepage
              welcomeText={welcomeText}
              weAre={weAre}
              callText={callText}
              appointmentText={appointmentText}
              openingTime={openingTime}
            />
          }
        />
        <Route
          path={pathToPatientPage}
          element={<PatientsList title={"this is patient list"} />}
        />
        <Route path="/patient-details/:id" element={<PatientDetails />} />
        <Route path="/sign-up" element={<PatientSignUp />} />
        <Route path="/select-doctor" element={<SelectDoctor />} />
        <Route
          path={pathToDutyPage}
          element={
            <Dutypage
              weAre={weAre}
              appointmentText={appointmentText}
              callText={callText}
              whoIsDutyText={whoIsDutyText}
              openingTime={openingTime}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
