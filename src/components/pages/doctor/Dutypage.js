import React from "react";
import DoctorsInfo from "./DoctorsInfo";
import styles from "./Dutypage.module.scss";

const Dutypage = ({ singleText, commonTexts, telephoneNumber }) => {
  return (
    <div className={styles.container}>
      <h1>{singleText}</h1>
      <div>
        <DoctorsInfo />
      </div>
      <h3>{commonTexts[1].children}</h3>
      <h3>{commonTexts[2].children}</h3>
      <h3>{`${commonTexts[3].children} ${telephoneNumber}`}</h3>
    </div>
  );
};

export default Dutypage;
