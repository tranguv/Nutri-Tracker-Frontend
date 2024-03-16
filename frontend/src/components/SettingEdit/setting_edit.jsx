import React from "react";
import styles from "./setting_edit.module.css";
import FormField from "./formfield"; // Make sure to provide the correct path

const EditSetting = () => {
  const genderOptions = [
    { id: "female", label: "Female", value: "female" },
    { id: "male", label: "Male", value: "male" },
    { id: "other", label: "Other", value: "other" },
  ];
  const unitOptions = [
    { id: "cm", label: "Centimeters", value: "cm" },
    { id: "ft", label: "Feet", value: "ft" },
    { id: "kg", label: "Kilograms", value: "kg" },
    { id: "lbs", label: "Pounds", value: "lbs" },
  ];

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <FormField
          label="Full Name"
          type="text"
          id="full-name"
          name="full-name"
          autoComplete="given-name"
          className={styles.inputField}
        />
        <FormField label="Date of Birth" type="date" id="dob" name="dob" />
        <FormField
          label="Gender"
          type="radio"
          name="gender"
          options={genderOptions}
        />
        <FormField
          label="Blood Type"
          type="text"
          id="bloodtype"
          name="bloodtype"
        />
        <FormField
          label="Email Address"
          type="email"
          id="email"
          name="email"
          autoComplete="email"
        />
        <FormField
          label="Unit of Measurement"
          type="checkbox"
          name="unit"
          options={unitOptions}
        />
      </form>
      <div class="static h-50 w-22">
        <button class="absolute mr-10 mb-10 bottom-0 right-0 h-10 w-20 rounded-md border-1 bg-gray-100 font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditSetting;
