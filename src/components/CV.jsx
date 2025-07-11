import General from "./General";
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
        <General editActive={editIds.includes(0)} toggleEdit={() => toggleEdit(0)}/>
    </>
    
}