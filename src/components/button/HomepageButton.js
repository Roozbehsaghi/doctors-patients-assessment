import React from "react";
import styles from "./HomepageButton.module.scss";

const HomepageButton = ({ title, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>{title}</p>
    </button>
  );
};

export default HomepageButton;
