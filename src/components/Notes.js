import React from "react";
import { useContext } from "react";
import NoteContext from "../contexts/notes/NoteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <div className="container">
      <h2>Your Notes</h2>
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note}/>;
        })}
    </div>
    </div>
  );
};

export default Notes;
