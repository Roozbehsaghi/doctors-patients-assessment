import React, { useState } from "react";
import styles from "./SelectDoctor.module.scss";
import useFetch from "../../../data/useFetch";
import { patientDataApiUrl, doctorDataApiUrl } from "../../../data/url";

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
        <select
          id="doctor"
          name="doctor"
          className={styles.doctor}
          autoComplete="doctor"
          onChange={handleDoctorChange}
          value={selectedDoctorId}
        >
          {doctorData.map((doctor, index) => (
            <option key={index} value={doctor.id}>
              {doctor.dogtor}
            </option>
          ))}

          <option value="all-doctors">All Doctors</option>
        </select>
      </div>

      {/* Display patients for the selected doctor */}
      {selectedDoctorId && (
        <div>
          {selectedDoctorId === "all-doctors" && (
            <h2>Patients of all the Doctors </h2>
          )}

          {doctorData.find((doctor) => doctor.id == selectedDoctorId) && (
            <h2>
              {` Patients of   
              ${
                doctorData.find((doctor) => doctor.id == selectedDoctorId)
                  .dogtor
              }`}
            </h2>
          )}

          <div className={styles.box}>
            {patientsOfSelectedDoctor.map((patient, index) => (
              <div key={index} className={styles.patient}>
                <p className={styles.parag}>First Name: {patient.firstName}</p>
                <p className={styles.parag}>Last Name: {patient.lastName}</p>
                <p className={styles.parag}>ID: {patient.id}</p>
                <p className={styles.parag}>
                  Date Of Birth: {patient.dateOfBirth}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectDoctor;
