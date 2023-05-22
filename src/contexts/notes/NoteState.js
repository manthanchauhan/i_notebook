import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const initState = {
        "name": "Manthan"
    }

    const [state, setState] = useState(initState)

    return (
        <NoteContext.Provider value={{state, setState}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;