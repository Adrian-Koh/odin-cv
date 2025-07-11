import { useState } from "react";

export default function ExperienceList({ editActive, toggleEdit }) {
  const [experiences, setExperiences] = useState([
    { company: "meta", position: "engineer", duties: "code", from: "", to: "" },
  ]);

  function onCompanyChange(e, id) {}

  function onPositionChange(e, id) {}

  function onDutiesChange(e, id) {}

  function onFromChange(e, id) {}

  function onToChange(e, id) {}

  return (
    <div>
      <h2>Experience</h2>
      {editActive ? (
        <>
          {experiences.map((experience) => (
            <div>
              <p>
                <label>
                  Company:{" "}
                  <input
                    type="text"
                    onChange={(e) => onCompanyChange(e, experience.id)}
                    value={experience.company}
                  />
                </label>
              </p>
              <p>
                <label>
                  Position:{" "}
                  <input
                    type="text"
                    onChange={(e) => onPositionChange(e, experience.id)}
                    value={experience.position}
                  />
                </label>
              </p>
              <p>
                <label>
                  Responsibilities:{" "}
                  <input
                    type="text"
                    onChange={(e) => onDutiesChange(e, experience.id)}
                    value={experience.duties}
                  />
                </label>
              </p>
              <p>
                Dates:
                <label>
                  From:{" "}
                  <input
                    type="date"
                    onChange={(e) => onFromChange(e, experience.id)}
                    value={experience.from}
                  />
                </label>
                <label>
                  To:{" "}
                  <input
                    type="date"
                    onChange={(e) => onToChange(e, experience.id)}
                    value={experience.to}
                  />
                </label>
              </p>
            </div>
          ))}

          <p>
            <button onClick={toggleEdit}>Submit</button>
          </p>
        </>
      ) : (
        <>
          {experiences.map((experience) => (
            <div>
              <h3>Company: {experience.company}</h3>
              <h3>Position: {experience.position}</h3>
              <h3>Responsibilities: {experience.duties}</h3>
              <h3>
                Period: {experience.from} - {experience.to}
              </h3>
            </div>
          ))}
          <button onClick={toggleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}
