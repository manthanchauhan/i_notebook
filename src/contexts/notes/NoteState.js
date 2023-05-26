import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:8081";
  const authToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW50aGFuY2hhdWhhbjk2MEBnbWFpbC5jb20iLCJleHAiOjE2ODUxMjUzNTgsImlhdCI6MTY4NTEwNzM1OH0.HDT6rZj0vV5yiMHNqYYD_0B9alr6knBwCiIkvPc6HrRTWYmXVafldpPMO8uhfnQSuADTiUtH9HEk-y66ZljMQQ";

  let notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const editNote = async (id, title, description) => {
    await callApi("PATCH", `${host}/api/v1/notes/${id}`, {
      title,
      description,
    });

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element.id === id) {
        element.title = title;
        element.description = description;
      }
    }
  };

  const callApi = async (method, url, data) => {
    var requestInfo = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      }
    };

    if (data !== null){
      requestInfo.body = JSON.stringify(data);
    }

    const response = await fetch(url, requestInfo);

    const responseBody = await response.json();

    if (response.status >= 200 && response.status <= 300){
      return responseBody;
    } else {
      console.log("Error");
      console.log(responseBody);
      return null;
    }
  };

  const deleteNote = async (id) => {
    const isSuccess = await callApi("DELETE", `${host}/api/v1/notes/${id}`, null);

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
        `${host}/api/v1/notes`,
        {title, description}
    );

    if (responseBody !== null){
      setNotes(notes.concat(responseBody));
    }
  };

  const listNotes = async () => {
    const responseBody = await callApi(
        "GET",
        `${host}/api/v1/notes`,
        null
    );

    const noteList = responseBody !== null ? responseBody.noteList : [];
    console.log(noteList)
    setNotes(noteList);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, editNote, deleteNote, addNote, listNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
