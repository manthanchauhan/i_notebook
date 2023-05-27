import React, { useContext, useState } from "react";
import NoteContext from "../contexts/notes/NoteContext";

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;

    const emptyNote = {title: "", description: ""};
    const [note, setNote] = useState(emptyNote);

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description);
        setNote(emptyNote);
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div className="container my-3">
      <h2>Add Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            value={note.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
          />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
