import { useState } from "react";
import { isBefore, format } from "date-fns";

export default function Education({ editActive, toggleEdit }) {
  const [university, setUniversity] = useState({
    name: "",
    major: "",
    from: "",
    to: "",
  });

  function onFieldChange(e, key) {
    let newUniversity = { ...university };
    newUniversity[key] = e.target.value;
    setUniversity(newUniversity);
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
              onChange={(e) => onFieldChange(e, "name")}
              value={university.name}
            />
          </label>
          <label>
            Major:
            <input
              type="text"
              onChange={(e) => onFieldChange(e, "major")}
              value={university.major}
            />
          </label>
          Dates:
          <label>
            From:
            <input
              type="date"
              onChange={(e) => onFieldChange(e, "from")}
              value={university.from}
            />
          </label>
          <label>
            To:
            <input
              type="date"
              onChange={(e) => onFieldChange(e, "to")}
              value={university.to}
            />
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
