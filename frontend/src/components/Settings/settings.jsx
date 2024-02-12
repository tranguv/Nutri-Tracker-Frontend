
import React from "react";
import styles from './settings.module.css'; // Import as a module
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const Settingpg = () => {
    const Edit = () => {
        // navigate to the edit page;
        console.log("Edit button clicked");
    }

    return (
        
        <div className={styles.placeholderContainer}>
            <div className={styles.placeholder}>
            <div className={styles.placeholderBackground} />
            <div className={styles.placeholderText}>Full Name</div>
        </div>
        <div className={styles.placeholder}>
            <div className={styles.placeholderBackground} />
            <div className={styles.placeholderText}>Date of Birth</div>
        </div>
        <div className={styles.placeholder}>
            <div className={styles.placeholderBackground} />
            <div className={styles.placeholderText}>Gender</div>
        </div>
        <div className={styles.placeholder}>
            <div className={styles.placeholderBackground} />
            <div className={styles.placeholderText}>Blood Type</div>
        </div>
        <div className={styles.placeholder}>
            <div className={styles.placeholderBackground} />
            <div className={styles.placeholderText}>Email Address</div>
        </div>
        <div className={styles.placeholder}>
            <div className={styles.placeholderBackground} />
            <div className={styles.placeholderText}>Unit of measurement</div>
        </div>
            <div className={styles.EditButtonContainer}>
            <button onClick={Edit}>Edit</button>
            </div>
        
        </div>
        
    );
}

export default Settingpg;
