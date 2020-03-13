import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import './DarkModeToggle.scss';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div className="dark-mode-toggle">
            <div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
        </div>
    )
}

export default DarkModeToggle
