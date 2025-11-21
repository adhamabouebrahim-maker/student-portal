import { useState } from 'react';
import '../styles/Grades.css'

function Application() {
    const [grades, setGrades] = useState([]);
    const [name, setName] = useState('');
    const [stdID, setStdID] = useState(0);
    const [midterm, setMidterm] = useState(0);
    const [project, setProject] = useState(0);
    const [final, setFinal] = useState(0);
    const [f, setF] = useState(0);

    const handleGrades = () => {
        if (stdID.trim() !== '' && name.trim() !== '' && midterm.trim() !== '' && project.trim() !== '' && final.trim() !== '') {
            grades.push({
                stdID: stdID,
                name: name,
                midterm: midterm,
                project: project,
                final: final,
                f: (midterm * 0.35) + (project * 0.30) + (final * 0.35),
            });
            setStdID(0);
            setName('');
            setMidterm(0);
            setProject(0);
            setF(0);
            setFinal(0);
            setGrades(grades);
        }
    }
    const handleRemove = (id) => {
        setGrades(grades.filter((grade) => grade.stdID !== id));
    }
    return (
        <div className="Application">
  <h1>Semester Grade</h1>

  <input
    type="number"
    value={stdID}
    onChange={(e) => setStdID(e.target.value)}
    placeholder="Add Student ID"
  />

  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Add Student name"
  />

  <input
    type="number"
    value={midterm}
    onChange={(e) => setMidterm(e.target.value)}
    placeholder="Add Midterm"
  />

  <input
    type="number"
    value={project}
    onChange={(e) => setProject(e.target.value)}
    placeholder="Add Project"
  />

  <input
    type="number"
    value={final}
    onChange={(e) => setFinal(e.target.value)}
    placeholder="Add Final"
  />

  <button className="add-btn" onClick={handleGrades}>Add Grades</button>

  <table className="grades-table">
    <thead className="table-head">
      <tr>
        <th className="table-header">Std ID</th>
        <th className="table-header">Name</th>
        <th className="table-header">Midterm</th>
        <th className="table-header">Project</th>
        <th className="table-header">Final Exam</th>
        <th className="table-header">Final Grade</th>
        <th className="table-header">Action</th>
      </tr>
    </thead>

    <tbody className="table-body">
      {grades.map((grade) => (
        <tr className="table-row" key={grade.stdID}>
          <td className="table-cell">{grade.stdID}</td>
          <td className="table-cell">{grade.name}</td>
          <td className="table-cell">{grade.midterm}</td>
          <td className="table-cell">{grade.project}</td>
          <td className="table-cell">{grade.final}</td>
          <td className="table-cell">{grade.f}</td>

          <td className="table-cell">
            <button
              className="remove-btn"
              onClick={() => handleRemove(grade.stdID)}
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    );
}

export default Application;
