import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import { FaCheck, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import ContentEditable from "react-contenteditable";

import "./style.css";

export default function Note({ note, noteIndex, saveNote, deleteNote }) {
  const [edit, setEdit] = useState(false);
  const [finalyNote, setFinalyNote] = useState(note);

  function handleSave() {
    saveNote(noteIndex, finalyNote);
    setEdit(false);
  }

  return (
    <div className="container">
      <header className="header">
        {edit ? (
          <FaCheck onClick={() => handleSave()} color="#29a329" size={16} />
        ) : (
          <FaPencilAlt
            onClick={() => setEdit(true)}
            color="#b93cf9"
            size={16}
          />
        )}
        <FaTrashAlt
          onClick={() => deleteNote(noteIndex)}
          color="#ff886b"
          size={16}
        />
      </header>

      <div className="content">
        {edit ? (
          <ContentEditable
            html={finalyNote}
            onChange={(e) => setFinalyNote(e.target.value)}
            onBlur={() => handleSave()}
          />
        ) : (
          <ReactMarkdown source={finalyNote} escapeHtml={false} />
        )}
      </div>
    </div>
  );
}
