import React from 'react';

import classes from './styles/Button.module.scss';

const BorderButton = ({ value }) => {
    return (
        <button className={classes.BorderButton}>
            <span>{value}</span>
        </button>
    );
};

export default BorderButton