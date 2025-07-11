import Education from "./Education";
import General from "./General";
import ExperienceList from "./ExperienceList";
import { useState } from "react";

export default function CV() {
    const [editIds, setEditIds] = useState([]);

    function toggleEdit(id) {
        if (editIds.includes(id)) {
            setEditIds(editIds.filter(editId => editId !== id));
        }
        else {
            let newEditIds = editIds.slice();
            newEditIds.push(id);
            setEditIds(newEditIds);
        }

    }

    return <>
        <h1>CV</h1>
        <General editActive={editIds.includes(0)} toggleEdit={() => toggleEdit(0)}/>
        <Education editActive={editIds.includes(1)} toggleEdit={() => toggleEdit(1)}/>
        <ExperienceList editActive={editIds.includes(2)} toggleEdit={() => toggleEdit(2)}></ExperienceList>
    </>;
    
}