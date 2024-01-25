import React from "react";
import { useNavigate } from "react-router-dom";

const Patient = ({ data }) => {
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`/patient-details/${id}`);
  };

  const sortPatientsByLastName = data?.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  });

  return (
    <tbody>
      {sortPatientsByLastName.map((item) => (
        <tr key={item.id}>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.id}</td>
          <td>{item.dateOfBirth}</td>
          <td>
            <button onClick={() => navigateToDetails(item.id)}>Details</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Patient;
