import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    let notesInitial = [
            {
                "createdAt": "2023-05-10T17:22:00.000+00:00",
                "updatedAt": "2023-05-10T17:22:01.000+00:00",
                "active": true,
                "id": 1,
                "title": "FIrst Note",
                "description": "This is first note",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:55:28.000+00:00",
                "updatedAt": "2023-05-15T14:06:15.000+00:00",
                "active": true,
                "id": 3,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            },
            {
                "createdAt": "2023-05-12T15:57:35.000+00:00",
                "updatedAt": "2023-05-15T14:02:15.000+00:00",
                "active": true,
                "id": 4,
                "title": "Manthan's updated note",
                "description": "updated 1  2  3",
                "userId": 32
            }
        ];


    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;