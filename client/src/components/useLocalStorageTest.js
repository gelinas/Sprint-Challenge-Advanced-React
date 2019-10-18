import React from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

const Test = () => {
    // local storage hook
    const [data, setData] = useLocalStorage("test-key", "test-data");

    return(
        <p></p>
    );
  }

export default Test