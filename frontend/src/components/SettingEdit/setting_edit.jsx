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
    <>
      <form>
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
          type="radio"
          name="unit"
          options={unitOptions}
        />
      </form>
      <div className="w-28 h-12 relative" style={{ marginLeft: "1276px" }}>
        <div className="w-28 h-12 left-0 top-0 absolute bg-zinc-300 rounded-lg" />
        <div className="self-stretch text-black-300 text-base font-medium font-serif leading-6 tracking-tight">
          Save
        </div>
      </div>
    </>
  );
};

export default EditSetting;
