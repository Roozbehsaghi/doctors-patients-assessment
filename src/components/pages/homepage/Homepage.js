import React from "react";
import HomepageButton from "../../button/HomepageButton";
import styles from "./Homepage.module.scss";
import { useNavigate } from "react-router-dom";

// Route to spesific page
const pathToDutyPage = "/duty-page";
const pathToPatientPage = "/patient-list";
const pathToSignUpPage = "/sign-up";

const Homepage = ({
  welcomeText,
  callText,
  weAre,
  appointmentText,
  openingTime,
}) => {
  const navigate = useNavigate();

  // To dynamically set the navigation path
  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className={styles["main-container"]}>
      <button
        className={styles["sign-up-button"]}
        onClick={() => navigateToPage(pathToSignUpPage)}
      >
        Sign up
      </button>

      <div className={styles.box}>
        <h1>{welcomeText}</h1>
        <h1>
          {weAre} {openingTime()}
        </h1>
        <h1>{appointmentText}</h1>
        <h1>{callText}</h1>
      </div>

      {/* Homepage Button */}
      <HomepageButton
        title={"Who is on duty?"}
        onClick={() => navigateToPage(pathToDutyPage)}
      />
      {/* Homepage Button */}
      <HomepageButton
        title={"I am a new patient"}
        onClick={() => navigateToPage(pathToPatientPage)}
      />
    </div>
  );
};

export default Homepage;
