import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    // validate parameters for browser method local storage (need string key)
    if (typeof key !== 'string') {
        throw new Error(
            'Invalid parameters: useLocalStorage should require a string for the first argument'
        )
    }

    // initialize storage
    // if the key exists in local storage, initializes state to local storage
    // else adds key to local storage and initializes state to the param initialValue

    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    // update of storage
    // updates and state and local storage simultaneously

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    // CUSTOM HOOK returns an array with a value and a function for altering the value

    return [storedValue, setValue];
}