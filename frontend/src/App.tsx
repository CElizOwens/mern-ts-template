import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>MERN + TS + Bootstrap</h1>
        <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
        <p>
          <code>Boilerplate</code> for a MongDB, Express, React, Node, TypeScript and Bootstrap web app with AirBnB ESlint and Prettier linting and formatting.
        </p>
      </div>
    </>
  )
}

export default App
