import React from "react";
import styles from "./setting_edit.module.css";
import FormField from "./formfield"; // Make sure to provide the correct path

const EditSetting = () => {
  const genderOptions = [
    { id: "female", label: "Female", value: "female" },
    { id: "male", label: "Male", value: "male" },
    { id: "other", label: "Other", value: "other" },
  ];
  const unitLengthOptions = [
    { id: "cm", label: "Centimeters", value: "cm" },
    { id: "ft", label: "Feet", value: "ft" },
  ];
  const unitWeightOptions = [
    { id: "kg", label: "Kilograms", value: "kg" },
    { id: "lbs", label: "Pounds", value: "lbs" },
  ];

  return (
    <div className="flex justify-center align-middle">
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
        <div className="flex items-center">
          <FormField
            label="Height"
            type="text"
            id="height"
            name="height"
            placeholder="Enter your height"
            className={styles.inputField}
          />
          <FormField
            label="Unit of Length"
            type="checkbox"
            name="unitlength"
            options={unitLengthOptions}
          />
        </div>
        <div className="flex items-center">
          <FormField
            label="Weight"
            type="text"
            id="weight"
            placeholder="Enter your weight"
            className={styles.inputField}
          />
          <FormField
            label="Unit of Weight"
            type="checkbox"
            name="unitWeight"
            options={unitWeightOptions}
          />
        </div>
        <div class=" h-50 w-22 flex justify-center">
          <button class="  h-10 w-20 rounded-md border-1 bg-violet-300 font-medium">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSetting;
