import React from "react";
import HomepageButton from "../../button/HomepageButton";
import styles from "./Homepage.module.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment";

// Route to spesific page
const pathToDutyPage = "/duty-page";
const pathToPatientPage = "/patient-list";
const pathToSignUpPage = "/sign-up";

const Homepage = ({ telephoneNumber }) => {
  const navigate = useNavigate();

  // To dynamically set the navigation path
  const navigateToPage = (path) => {
    navigate(path);
  };

  let currentMoment = moment().format("HH:mm");
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
    <div className={styles["main-container"]}>
      <button
        className={styles["sign-up-button"]}
        onClick={() => navigateToPage(pathToSignUpPage)}
      >
        Sign up
      </button>

      <div className={styles.box}>
        <h1>Welcome to AMS GPs</h1>
        <h1>We are: {openingTime()}</h1>
        <h1>To make an appointment</h1>
        <h1>{`Call: ${telephoneNumber}`}</h1>
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
