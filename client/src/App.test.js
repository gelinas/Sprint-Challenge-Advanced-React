import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import PlayerCard from './components/PlayerCard';
// import useLocalStorageTest from './components/useLocalStorageTest'

// injection of done as a param and done(); required for async axios call to resolve
test('renders without crashing', done => {
  render(<App />);
  done();
});

// does not work, no idea how to test hooks
// test('useLocalStorage initializes or updates a storage value', () => {
//   // execute hook
//   render(<useLocalStorageTest />);
//   expect(localStorage.getItem("test-key")).toBe("test-data")
// });

test('renders without crashing', () => {
  const testData = { id: 96, name: "Ellie Carpenter", country: "Australia", seraches: 1 }
  render(<PlayerCard player={testData} />)
});