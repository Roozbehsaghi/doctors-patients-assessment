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

  if (patientLoading || doctorLoading) return <h1>Loading...</h1>;
  if (patientError)
    return <h1>Error fetching patient data: {patientError.message}</h1>;
  if (doctorError)
    return <h1>Error fetching doctor data: {doctorError.message}</h1>;

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
          value={selectedDoctorId}
          doctorData={doctorData}
          setSelectedDoctorId={setSelectedDoctorId}
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
