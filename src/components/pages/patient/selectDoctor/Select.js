import React from "react";

const Select = ({
  className,
  value,
  doctorData,
  setSelectedDoctorId,
  allDoctors,
}) => {
  // Handle change in doctor selection
  const handleDoctorChange = (event) => {
    setSelectedDoctorId(event.target.value);
  };

  return (
    <select
      id="doctor"
      name="doctor"
      className={className}
      autoComplete="doctor"
      onChange={(e) => handleDoctorChange(e)}
      value={value}
    >
      <option value="select-doctor">Select a Doctor</option>
      {doctorData.map((doctor, index) => (
        <option key={index} value={doctor.id}>
          {doctor.dogtor}
        </option>
      ))}

      <option value={allDoctors}>All Doctors</option>
    </select>
  );
};

export default Select;
