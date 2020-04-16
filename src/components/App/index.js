import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";

import Card from "../Note";

import { Title, CardContainer } from "./style";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const value = localStorage.getItem("notes");

    if (value) {
      setNotes(JSON.parse(value));
    }
  }, []);

  function addNote() {
    setNotes([...notes, ""]);
    localStorage.setItem("notes", JSON.stringify([...notes, ""]));
  }

  function saveNote(index, val) {
    let newNotes;

    if (index === -1) {
      newNotes = [val, ...notes];
    } else {
      newNotes = notes.map((note, i) => (index === i ? val : note));
    }

    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function deleteNote(index) {
    const newNotes = notes.filter((note, i) => index !== i);

    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  return (
    <div className="App">
      <Title>
        <h1>Notas</h1>
        <FaPlusSquare onClick={() => addNote()} size={20} />
      </Title>

      <CardContainer>
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <Card
              note={note}
              noteIndex={index}
              saveNote={saveNote}
              deleteNote={deleteNote}
            />
          ))
        ) : (
          <Card
            note={"# Teste \n ## mais um teste"}
            noteIndex={-1}
            saveNote={saveNote}
            deleteNote={deleteNote}
          />
        )}
      </CardContainer>
    </div>
  );
}

export default App;
