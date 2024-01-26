import React from "react";

const Select = ({ className, onChange, value, doctorData }) => {
  return (
    <select
      id="doctor"
      name="doctor"
      className={className}
      autoComplete="doctor"
      onChange={onChange}
      value={value}
    >
      {doctorData.map((doctor, index) => (
        <option key={index} value={doctor.id}>
          {doctor.dogtor}
        </option>
      ))}

      <option value="all-doctors">All Doctors</option>
    </select>
  );
};

export default Select;
