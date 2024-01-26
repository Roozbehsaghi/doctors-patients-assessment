import React from "react";

const Patient = ({
  selectedDoctorId,
  doctorData,
  classNamebox,
  patientsOfSelectedDoctor,
  classNamepatient,
  classNameParag,
  allDoctors,
}) => {
  return (
    <div>
      {/* Display patients for the selected doctor */}
      {selectedDoctorId && (
        <div>
          {selectedDoctorId === allDoctors && (
            <h2>Patients of all the Doctors </h2>
          )}

          {doctorData.find(
            (doctor) => doctor.id === parseFloat(selectedDoctorId)
          ) && (
            <h2>
              {` Patients of   
          ${
            doctorData.find(
              (doctor) => doctor.id === parseFloat(selectedDoctorId)
            ).dogtor
          }`}
            </h2>
          )}

          <div className={classNamebox}>
            {patientsOfSelectedDoctor.map((patient, index) => (
              <div key={index} className={classNamepatient}>
                <p className={classNameParag}>
                  First Name: {patient.firstName}
                </p>
                <p className={classNameParag}>Last Name: {patient.lastName}</p>
                <p className={classNameParag}>ID: {patient.id}</p>
                <p className={classNameParag}>
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

export default Patient;
