import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap";


import css from './Header.module.css';
import {ThemeSwitcher} from '../ThemeSwitcher';
import {UserInfo} from '../UserInfo';

const Header: FC = () => {


    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/');
    };
    return (
        <div className={css.main}>
            <div className={css.Header}>
                <div className={css.headerLeft}>
                    <Button onClick={handleBackClick}>
                        Home
                    </Button>
                </div>
                <ThemeSwitcher/>
                <div className={css.title}>
                    <h1>
                        <b>
                        CINE-SYNTH
                        </b>
                    </h1>
                </div>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};
