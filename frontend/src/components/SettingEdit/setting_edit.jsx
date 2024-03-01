import React from "react";
import {useState} from 'react';
// import {useHistory} from 'react-router-dom';
import styles from './setting_edit.module.css'; // Import as a module


const EditSetting = () => {
    // const history = useHistory();
    const box = [
        { label: 'Full Name' },
        { label: 'Date of Birth', type: 'date'},
        { label: 'Gender', type:'radio', options:['Female', 'Male', 'Other']},
        { label: 'Blood Type' },
        { label: 'Email Address' },
        { label: 'Unit of measurement', type:'radio', options:['cm', 'ft', 'kg', 'lbs'] },
    ];
    const [inputs, setInputs] = useState({});
    const changeHandle = (event) => {
        const { name, value, type, checked } = event.target;
        setInputs((values) => ({
            ...values,
            [name]: type === 'radio' ? value : checked,
        }));
    };
    const changeSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs, null, 2));
        // history.push('/Settingpg')
    };
    
    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                {box.map((box, index) => (
                    <div key={index} className={styles.infoBox}>
                        <div className={styles.infoText}>{box.label}</div>
                    </div>
                ))}
            </div>

            <form className={styles.formContainer} onSubmit={changeSubmit}>
                {box.map((box, index) => (
                    <div key={index} className={styles.inputBox}>
                        {box.type === 'radio' ? (
                            box.options.map((option, optionIndex) => (
                                <label key={optionIndex} className={styles.radioLabel}>
                                    {option}
                                    <input
                                        type="radio"
                                        name={box.label.toLowerCase()}
                                        checked={inputs[box.label.toLowerCase()] === option}
                                        onChange={changeHandle}
                                    />
                                </label>
                            ))
                        ) : (
                            <>
                                <label>{box.label}</label>
                                <input
                                    type={box.type === 'date' ? 'date' : 'text'}
                                    name={box.label.toLowerCase()}
                                    value={inputs[box.label.toLowerCase()] || ''}
                                    onChange={changeHandle}
                                />
                            </>
                        )}
                    </div>
                ))}
                <div className={styles.SaveButtonContainer}>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};
export default EditSetting;