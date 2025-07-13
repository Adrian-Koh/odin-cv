import { useState } from "react";
import { isBefore, format } from "date-fns";

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

  function onSubmit() {
    const fromDate = getDateObject(university.from);
    const toDate = getDateObject(university.to);
    if (isBefore(fromDate, toDate)) {
      toggleEdit();
    } else {
      alert(`Education from date must be before to date!`);
    }
  }

  function getDateObject(dateString) {
    const date = dateString.split("-");
    return new Date(
      parseInt(date[0]),
      parseInt(date[1]) - 1,
      parseInt(date[2])
    );
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
            Major:
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
          <button onClick={onSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p className="info">University name: {university.name}</p>
          <p className="info">Major: {university.major}</p>
          <p className="info">
            Period:
            {university.from && university.to
              ? " " +
                format(getDateObject(university.from), "dd MMM yyyy") +
                " - " +
                format(getDateObject(university.to), "dd MMM yyyy")
              : ""}
          </p>
          <button onClick={toggleEdit}>Edit</button>
        </>
      )}
    </section>
  );
}
