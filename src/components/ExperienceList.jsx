import { useState } from "react";
import { isBefore, format } from "date-fns";

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
    for (const experience of experiences) {
      const fromDate = getDateObject(experience.from);
      const toDate = getDateObject(experience.to);
      if (!isBefore(fromDate, toDate)) {
        alert(`${experience.company} from date must be before to date!`);
        return;
      }
    }
    toggleEdit();
  }

  function getDateObject(dateString) {
    const date = dateString.split("-");
    return new Date(
      parseInt(date[0]),
      parseInt(date[1]) - 1,
      parseInt(date[2])
    );
  }

  function deleteExperience(id) {
    let newExperiences = experiences.filter(
      (experience) => experience.id !== id
    );
    setExperiences(newExperiences);
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
            <>
              <div className="experience-container">
                <div className="experience">
                  <p className="info">Company: {experience.company}</p>
                  <p className="info">Position: {experience.position}</p>
                  <p className="info">Responsibilities: {experience.duties}</p>
                  <p className="info">
                    Period:
                    {experience.from && experience.to
                      ? " " +
                        format(getDateObject(experience.from), "dd MMM yyyy") +
                        " - " +
                        format(getDateObject(experience.to), "dd MMM yyyy")
                      : ""}
                  </p>
                </div>
                <button
                  class="delete-exp"
                  onClick={() => deleteExperience(experience.id)}
                >
                  Delete
                </button>
              </div>
              <hr></hr>
            </>
          ))}
          <button onClick={toggleEdit}>Edit</button>
        </>
      )}
    </section>
  );
}
