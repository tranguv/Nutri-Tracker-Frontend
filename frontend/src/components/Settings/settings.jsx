import React from "react";
import styles from "./Settings.module.css"; 

const Settings = () => {
  const Edit = () => {
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
        <button data-testid="Edit" onClick={Edit}>Edit</button>
      </div>
    </div>
  );
};

export default Settings;
