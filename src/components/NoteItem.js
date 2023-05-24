import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex mb-3">
            <h5 className="card-title me-auto p-2">{note.title}</h5>
            <i className="fa-regular fa-trash-can mx-2"></i>
            <i class="fa-regular fa-pen-to-square mx-2"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
