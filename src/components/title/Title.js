import React from 'react';

import classes from './styles/Title.module.scss';

const Title = ({ englishTitle, persianTitle }) => {
    return (
        <div className={classes.titleBox}>
            <span className={classes.englishTitle}>
                {englishTitle}
            </span>
            <h2 className={classes.persianTitle}>
                {persianTitle}
            </h2>
        </div>
    );
};

export default Title