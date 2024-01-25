import React, { useState } from "react";
import { formContext } from "../patient/PatientInfo";
import styles from "./PatientSignUp.module.scss";
import RenderedField from "./RenderedField";

const PatientSignUp = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormValues((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));

    console.log(formValues);
  };
  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <h1>Patient signup</h1>

      {formContext.map((field) => (
        <div key={field.id} className={styles[field.className]}>
          <label htmlFor={field.htmlFor}>{field.label}</label>
          <RenderedField
            field={field}
            formValues={formValues}
            handleInputChange={handleInputChange}
          />
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientSignUp;
