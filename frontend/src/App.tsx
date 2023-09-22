import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import { Button } from 'react-bootstrap';
import { Note } from './models/note';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch('/api/notes', { method: 'GET' });
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    };
    loadNotes();
  }, []);

  // const listNotes = () => {
  //   const allNotes<React.Children[]> = notes.forEach((note: Note, i) => <li key={i}>{note}</li>);
  //   return <ul>{allNotes}</ul>
  // }

  return (
    <>
      <div className="App">
        <h1>Notes</h1>
        {JSON.stringify(notes)}
        <p>
          <code>Boilerplate</code> for a MongDB, Express, React, Node, TypeScript and Bootstrap web app with AirBnB ESlint and Prettier linting and formatting.
        </p>
      </div>
    </>
  )
}

export default App
