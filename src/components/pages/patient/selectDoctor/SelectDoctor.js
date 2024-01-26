import React, { useState } from "react";
import styles from "./SelectDoctor.module.scss";
import useFetch from "../../../data/useFetch";
import { patientDataApiUrl, doctorDataApiUrl } from "../../../data/url";
import Select from "./Select";
import Patient from "./Patient";

const allDoctors = "all-doctors";

const SelectDoctor = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState("");

  const parseSelectedDoctorId = allDoctors
    ? selectedDoctorId
    : parseInt(selectedDoctorId);

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
    parseSelectedDoctorId === allDoctors
      ? patientData
      : patientData.filter(
          (patient) => patient.dogtorId === parseInt(selectedDoctorId)
        );

  return (
    <div className={styles.container}>
      <h1>Patient Database</h1>

      <div className={styles["doctor-box"]}>
        <Select
          className={styles.doctor}
          value={parseSelectedDoctorId}
          doctorData={doctorData}
          setSelectedDoctorId={setSelectedDoctorId}
          allDoctors={allDoctors}
        />
      </div>
      <Patient
        selectedDoctorId={parseSelectedDoctorId}
        doctorData={doctorData}
        classNamebox={styles.box}
        patientsOfSelectedDoctor={patientsOfSelectedDoctor}
        classNamepatient={styles.patient}
        classNameParag={styles.parag}
        allDoctors={allDoctors}
      />
    </div>
  );
};

export default SelectDoctor;
