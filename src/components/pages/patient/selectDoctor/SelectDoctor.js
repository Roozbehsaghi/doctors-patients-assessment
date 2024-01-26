import React, { useState } from "react";
import styles from "./SelectDoctor.module.scss";
import useFetch from "../../../data/useFetch";
import { patientDataApiUrl, doctorDataApiUrl } from "../../../data/url";
import Select from "./Select";
import Patient from "./Patient";

const SelectDoctor = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState("");

  // Fetch patient data
  const {
    data: patientData,
    loading: patientLoading,
    error: patientError,
  } = useFetch(patientDataApiUrl);

  // Fetch doctor data
  const {
    data: doctorData,
    loading: doctorLoading,
    error: doctorError,
  } = useFetch(doctorDataApiUrl);

  if (patientLoading || doctorLoading) return <div>Loading...</div>;
  if (patientError)
    return <div>Error fetching patient data: {patientError.message}</div>;
  if (doctorError)
    return <div>Error fetching doctor data: {doctorError.message}</div>;

  // Handle change in doctor selection
  const handleDoctorChange = (event) => {
    setSelectedDoctorId(event.target.value);
  };

  // Get patients for the selected doctor
  const patientsOfSelectedDoctor =
    selectedDoctorId === "all-doctors"
      ? patientData
      : patientData.filter((patient) => patient.dogtorId == selectedDoctorId);

  return (
    <div className={styles.container}>
      <h1>Patient Database</h1>

      <div className={styles["doctor-box"]}>
        <Select
          className={styles.doctor}
          onChange={handleDoctorChange}
          value={selectedDoctorId}
          doctorData={doctorData}
        />
      </div>
      <Patient
        selectedDoctorId={selectedDoctorId}
        doctorData={doctorData}
        classNamebox={styles.box}
        patientsOfSelectedDoctor={patientsOfSelectedDoctor}
        classNamepatient={styles.patient}
        classNameParag={styles.parag}
      />
    </div>
  );
};

export default SelectDoctor;
