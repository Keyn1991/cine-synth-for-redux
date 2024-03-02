import React, {FC, useEffect, useState} from 'react';
import {Form} from 'react-bootstrap';

const ThemeSwitcher: FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        localStorage.getItem('theme') === 'dark'
    );

    const toggleTheme = () => {
        setIsDarkMode((prev: boolean) => {
            const newTheme: string = prev ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            return !prev;
        });
    };

    useEffect(() => {
        const currentTheme: string | null = localStorage.getItem('theme');
        if (currentTheme) {
            setIsDarkMode(currentTheme === 'dark');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Form.Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                id="theme-switch"
                className="custom-switch mr-2"
                style={{transform: 'scale(1.5)', marginRight: '10px'}}
            />
            <Form.Label htmlFor="theme-switch">
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </Form.Label>
        </div>
    );
};

export {ThemeSwitcher};
