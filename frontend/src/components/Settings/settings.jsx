import React from "react";
import styles from "./settings.module.css"; 

const Settingpg = () => {
  const Edit = () => {
    // navigate to the edit page;
    console.log("Edit button clicked");
  };

  const placeholders = [
    { label: "Full Name" },
    { label: "Date of Birth" },
    { label: "Gender" },
    { label: "Blood Type" },
    { label: "Email Address" },
    { label: "Unit of measurement" },
  ];

  return (
    <div className={styles.placeholderContainer}>
      {/* Mapping through the array to render placeholders */}
      {placeholders.map((placeholder, index) => (
        <div key={index} className={styles.placeholder}>
          <div className={styles.placeholderBackground} />
          <div className={styles.placeholderText}>{placeholder.label}</div>
        </div>
      ))}
      {/* Edit button */}
      <div className={styles.EditButtonContainer}>
        <button onClick={Edit}>Edit</button>
      </div>
    </div>
  );
};

export default Settingpg;
