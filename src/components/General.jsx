import { useState } from "react";

export default function General({ editActive, toggleEdit }) {
    const [info, setInfo] = useState({ name: 'John Doe', email: 'example@example.com', phone: '123-456-7890' });

    function onNameChange(e){
        setInfo({...info, name: e.target.value});
    }

    function onEmailChange(e){
        setInfo({...info, email: e.target.value});
    }

    function onPhoneChange(e){
        setInfo({...info, phone: e.target.value});
    }

    return <div>
        <h1>General information</h1>
        {   
            editActive 
            ?
            <>
                <label>Name: <input type="text" onChange={onNameChange}/></label>
                <label>Email: <input type="email" onChange={onEmailChange}/></label>
                <label>Phone number: <input type="text" onChange={onPhoneChange}/></label>
                <button onClick={toggleEdit}>Submit</button>
            </>
            :
            <>
                <h2>Name: {info.name}</h2>
                <h2>Email: {info.email}</h2>
                <h2>Phone number: {info.phone}</h2>
                <button onClick={toggleEdit}>Edit</button>
            </>
        }
        
    </div>;
}