import {useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:8081";

  let notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const editNote = async (id, title, description) => {
    await callApi("PATCH", `/api/v1/notes/${id}`, {
      title,
      description,
    });

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index].id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        break;
      }
    }

    setNotes(newNotes);
  };

  const callApi = async (method, url, data) => {
    var requestInfo = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem('authToken'),
      }
    };

    if (data !== null){
      requestInfo.body = JSON.stringify(data);
    }

    const response = await fetch(host+url, requestInfo);

    const responseBody = await response.json();

    if (response.status >= 200 && response.status <= 300){
      return responseBody;
    } else {
      console.log(responseBody);
      return null;
    }
  };

  const deleteNote = async (id) => {
    const isSuccess = await callApi("DELETE", `/api/v1/notes/${id}`, null);

    if (isSuccess !== null){
      const newNotes = notes.filter((note) => {
        return note.id !== id;
      });
  
      setNotes(newNotes);
    }
  };

  const addNote = async (title, description) => {
    const responseBody = await callApi(
        "POST",
        `/api/v1/notes`,
        {title, description}
    );

    if (responseBody !== null){
      setNotes(notes.concat(responseBody));
    }
  };

  const listNotes = async () => {
    const responseBody = await callApi(
        "GET",
        `/api/v1/notes`,
        null
    );

    const noteList = responseBody !== null ? responseBody.noteList : [];
    setNotes(noteList);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, editNote, deleteNote, addNote, listNotes, callApi }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
