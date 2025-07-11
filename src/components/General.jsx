import { useState } from "react";

export default function General({ editActive, toggleEdit }) {
    const [info, setInfo] = useState({ name: '', email: '', phone: '' });

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
        <h2>General information</h2>
        {   
            editActive 
            ?
            <>
                <p>
                    <label>Name: <input type="text" onChange={onNameChange} value={info.name}/></label>
                </p>
                <p>
                    <label>Email: <input type="email" onChange={onEmailChange} value={info.email}/></label>
                </p>
                <p>
                    <label>Phone number: <input type="text" onChange={onPhoneChange} value={info.phone}/></label>
                </p>
                <p>
                    <button onClick={toggleEdit}>Submit</button>
                </p>
            </>
            :
            <>
                <h3>Name: {info.name}</h3>
                <h3>Email: {info.email}</h3>
                <h3>Phone number: {info.phone}</h3>
                <button onClick={toggleEdit}>Edit</button>
            </>
        }
        
    </div>;
}