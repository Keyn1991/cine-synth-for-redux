import React from 'react';
import styles from './CustomLoader.module.css';

const CustomLoader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}></div>
        </div>
    );
};

export {CustomLoader};
