import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import NoteContext from "../contexts/notes/NoteContext";
import NoteItem from "./NoteItem";
import { useState } from "react";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, listNotes, editNote } = context;

  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    listNotes();
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    setNote({
      etitle: currentNote.title,
      edescription: currentNote.description,
      id: currentNote.id
    });
    ref.current.click();
  };

  const emptyNote = {etitle: "", edescription: "", id: ""};
  const [note, setNote] = useState(emptyNote);

  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }

  const handleClick = ()=>{
    editNote(note.id, note.etitle, note.edescription);
    refClose.current.click();
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    onChange={onChange}
                    value={note.etitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    value={note.edescription}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Update note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Your Notes</h2>
        <div className="row my-3">
          {notes.map((note) => {
            return (
              <NoteItem note={note} key={note.id} updateNote={updateNote} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
