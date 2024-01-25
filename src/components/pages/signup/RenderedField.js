import React from "react";
import styles from "./PatientSignUp.module.scss";

const RenderedField = ({ field, formValues, handleInputChange }) => {
  if (field.type === "dropdown") {
    return (
      <select
        id={field.id}
        className={styles.select}
        name={field.name}
        value={formValues[field.name]}
        onChange={handleInputChange}
        autoComplete={field.autoComplete}
      >
        {field.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <input
        id={field.id}
        className={styles.input}
        type={field.type}
        name={field.name}
        value={formValues[field.name]}
        onChange={handleInputChange}
        autoComplete={field.autoComplete}
      />
    );
  }
};

export default RenderedField;
