import { useState } from "react";

export default function Education({ editActive, toggleEdit }) {
  const [university, setUniversity] = useState({
    name: "",
    major: "",
    from: "",
    to: "",
  });

  function onNameChange(e) {
    setUniversity({ ...university, name: e.target.value });
  }

  function onMajorChange(e) {
    setUniversity({ ...university, major: e.target.value });
  }

  function onFromChange(e) {
    setUniversity({ ...university, from: e.target.value });
  }

  function onToChange(e) {
    setUniversity({ ...university, to: e.target.value });
  }

  return (
    <section>
      <h2>Education</h2>
      {editActive ? (
        <>
          <label>
            University name:{" "}
            <input
              type="text"
              onChange={onNameChange}
              value={university.name}
            />
          </label>
          <label>
            Major:{" "}
            <input
              type="text"
              onChange={onMajorChange}
              value={university.major}
            />
          </label>
          Dates:
          <label>
            From:
            <input
              type="date"
              onChange={onFromChange}
              value={university.from}
            />
          </label>
          <label>
            To:
            <input type="date" onChange={onToChange} value={university.to} />
          </label>
          <button onClick={toggleEdit}>Submit</button>
        </>
      ) : (
        <>
          <h3>University name: {university.name}</h3>
          <h3>Major: {university.major}</h3>
          <h3>
            Period: {university.from} - {university.to}
          </h3>
          <button onClick={toggleEdit}>Edit</button>
        </>
      )}
    </section>
  );
}
