import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../data/useFetch";
import { patientDataApiUrl } from "../../data/url";
import styles from "./PatientDetail.module.scss";

const PatientDetail = () => {
  let { id } = useParams();
  const { data, loading, error } = useFetch(`${patientDataApiUrl}/${id}`);

  const patient = data;

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );

  return (
    <div>
      <h2>Patient Details for ID: {id}</h2>

      <table className={styles["main-table"]}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Prescriptions</th>
            <th>DoctorId</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(patient).map((p, index) => (
              <td key={index} className={styles["main-td"]}>
                {p}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PatientDetail;
