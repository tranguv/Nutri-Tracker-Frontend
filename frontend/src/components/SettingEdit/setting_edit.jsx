import React from "react";
import styles from './setting_edit.module.css'; // Import as a module
import Settingpg from "../Settings/settings";

const EditSetting = () => {
    const box = [
        { label: 'Full Name' },
        { label: 'Date of Birth' },
        { label: 'Gender' },
        { label: 'Blood Type' },
        { label: 'Email Address' },
        { label: 'Unit of measurement' },
    ];

    return (
        <div className={styles.boxContain}>
            {/* Mapping through the array to render placeholders */}
            {box.map((box, index) => (
                <div key={index} className={styles.box}>
                    <div className={styles.boxBackground} />
                    <div className={styles.boxText}>{placeholder.label}</div>
                </div>
            ))}
            {/* save button */}
            <div className={styles.SaveButtonContainer}>
                <button onClick={Settingpg()}>Save</button>
            </div>
        </div>
    );
}

export default EditSetting;