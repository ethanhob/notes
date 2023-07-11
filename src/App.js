import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './sidebar';
import Main from './main';

function App() {
  const [notes,setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);
  // getter is notes and setter is set notes. you cant modify notes itself. you just have to get it and use set to update value

  useEffect(() =>{
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])
  const newID = () => {
    Math.round(Math.random(0,1000));
  }
  const onAddClick = () => {
    const newNote = {
      id: {newID},
      title: "untitled note",
      body: '',
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id)
    // adds new object onto current array of objects
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  }

  const onUpdateNote =(updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  }
  return (
    <div className="App">
      <Sidebar notes={notes} 
              onAddClick={onAddClick} 
              onDeleteNote={onDeleteNote}
              activeNote={activeNote}
              setActiveNote={setActiveNote} />
      {/* sending notes and onAddClick in as a prop to be used by sidebar */}
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
  </div>
  );
}

export default App;
