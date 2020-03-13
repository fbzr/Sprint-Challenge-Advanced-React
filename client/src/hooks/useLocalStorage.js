import React, { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        if (!storedValue) {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        } else {
            return JSON.parse(storedValue);
        }
    })

    const setLocalStorage = newValue => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }
    
    return [value, setLocalStorage];
}
