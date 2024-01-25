import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Dutypage from "./components/pages/doctor/Dutypage";
import PatientsList from "./components/pages/patient/PatientsList";
import PatientDetails from "./components/pages/patient/PatientDetail";
import PatientSignUp from "./components/pages/signup/PatientSignUp";
import SelectDoctor from "./components/pages/patient/selectDoctor/SelectDoctor";
import "./App.css";

// Route to spesific page
const pathToDutyPage = "/duty-page";
const pathToPatientPage = "/patient-list";

const telephoneNumber = "021 555 5555";

// Make each text for the Duty page
const homepages = [
  { text: <h1>Welcome to AMS GPs</h1> },
  { text: <h2>We are: </h2> },
  { text: <h2>To make an appointment</h2> },
  { text: <h2>Call: </h2> },
];

const commonTexts = homepages.map((homepage) => homepage.text.props);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={"/"}
          element={<Homepage telephoneNumber={telephoneNumber} />}
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
              telephoneNumber={telephoneNumber}
              singleText={"Who is on duty?"}
              commonTexts={commonTexts}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
