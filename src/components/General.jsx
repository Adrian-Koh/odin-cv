import { useState } from "react";

export default function General({ editActive, toggleEdit }) {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  function onNameChange(e) {
    setInfo({ ...info, name: e.target.value });
  }

  function onEmailChange(e) {
    setInfo({ ...info, email: e.target.value });
  }

  function onPhoneChange(e) {
    setInfo({ ...info, phone: e.target.value });
  }

  return (
    <section>
      <h2>General information</h2>
      {editActive ? (
        <>
          <label>
            Name:{" "}
            <input type="text" onChange={onNameChange} value={info.name} />
          </label>
          <label>
            Email:{" "}
            <input type="email" onChange={onEmailChange} value={info.email} />
          </label>
          <label>
            Phone number:{" "}
            <input type="text" onChange={onPhoneChange} value={info.phone} />
          </label>
          <button onClick={toggleEdit}>Submit</button>
        </>
      ) : (
        <>
          <p className="info">Name: {info.name}</p>
          <p className="info">Email: {info.email}</p>
          <p className="info">Phone number: {info.phone}</p>
          <button onClick={toggleEdit}>Edit</button>
        </>
      )}
    </section>
  );
}
