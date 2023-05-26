import React, { useContext } from "react";
import NoteContext from "../contexts/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const {deleteNote, editNote} = context;

  const { note } = props;
  return (
    <div className="col-md-4 col-sm-6 col-lg-3">
      <div className="card my-3" style={{ minHeight: "200px" }}>
        <div className="card-body">
          <div className="d-flex mb-3">
            <h5 className="card-title me-auto p-2" style={{ height: "75px", overflow: "hidden" }}>{note.title}</h5>
            <i className="fa-regular fa-trash-can mx-2" onClick={()=>{deleteNote(note.id)}}></i>
            <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{editNote(note.id, note.title, note.description)}}></i>
          </div>
          <p className="card-text" style={{ height: "75px", overflow: "hidden", marginBottom: "8px" }}>{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
