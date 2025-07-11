import { useState } from "react";

export default function ExperienceList({ editActive, toggleEdit }) {
  const [experiences, setExperiences] = useState([]);
  const [nextId, setNextId] = useState(0);

  function onCompanyChange(e, id) {
    let newExperiences = experiences.map((experience) =>
      experience.id === id
        ? { ...experience, company: e.target.value }
        : experience
    );
    setExperiences(newExperiences);
  }

  function onPositionChange(e, id) {
    let newExperiences = experiences.map((experience) =>
      experience.id === id
        ? { ...experience, position: e.target.value }
        : experience
    );
    setExperiences(newExperiences);
  }

  function onDutiesChange(e, id) {
    let newExperiences = experiences.map((experience) =>
      experience.id === id
        ? { ...experience, duties: e.target.value }
        : experience
    );
    setExperiences(newExperiences);
  }

  function onFromChange(e, id) {
    let newExperiences = experiences.map((experience) =>
      experience.id === id
        ? { ...experience, from: e.target.value }
        : experience
    );
    setExperiences(newExperiences);
  }

  function onToChange(e, id) {
    let newExperiences = experiences.map((experience) =>
      experience.id === id ? { ...experience, to: e.target.value } : experience
    );
    setExperiences(newExperiences);
  }

  function onAddExperience() {
    setExperiences([
      ...experiences,
      { id: nextId, company: "", position: "", duties: "", from: "", to: "" },
    ]);
    setNextId(nextId + 1);
  }

  function onSubmit() {
    toggleEdit();
  }

  return (
    <section>
      <h2>Experience</h2>
      {editActive ? (
        <>
          {experiences.map((experience) => (
            <div className="experience">
              <label>
                Company:
                <input
                  type="text"
                  onChange={(e) => onCompanyChange(e, experience.id)}
                  value={experience.company}
                />
              </label>
              <label>
                Position:
                <input
                  type="text"
                  onChange={(e) => onPositionChange(e, experience.id)}
                  value={experience.position}
                />
              </label>
              <label>
                Responsibilities:
                <textarea
                  onChange={(e) => onDutiesChange(e, experience.id)}
                  value={experience.duties}
                />
              </label>
              Dates:
              <br />
              <label>
                From:
                <input
                  type="date"
                  onChange={(e) => onFromChange(e, experience.id)}
                  value={experience.from}
                />
              </label>
              <label>
                To:
                <input
                  type="date"
                  onChange={(e) => onToChange(e, experience.id)}
                  value={experience.to}
                />
              </label>
            </div>
          ))}
          <button onClick={onAddExperience}>Add experience</button>
          <button onClick={onSubmit}>Submit</button>
        </>
      ) : (
        <>
          {experiences.map((experience) => (
            <div className="experience">
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
    </section>
  );
}
