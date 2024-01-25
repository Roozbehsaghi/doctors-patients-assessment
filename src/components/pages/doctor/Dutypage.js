import React from "react";
import DoctorsInfo from "./DoctorsInfo";
import styles from "./Dutypage.module.scss";

const Dutypage = ({
  whoIsDutyText,
  callText,
  weAre,
  appointmentText,
  openingTime,
}) => {
  return (
    <div className={styles.container}>
      <h1>{whoIsDutyText}</h1>
      <div>
        <DoctorsInfo />
      </div>
      <h3>
        {weAre}
        {openingTime()}
      </h3>
      <h3>{appointmentText}</h3>
      <h3>{callText}</h3>
    </div>
  );
};

export default Dutypage;
