import { useState } from 'react';

function Application2() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [stdID, setStdID] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseType, setCourseType] = useState(''); // Online / On-campus
  const [department, setDepartment] = useState(''); // Beirut / Bekaa / Nabatieh

  const handleRegister = () => {
    if (
      name.trim() &&
      stdID.trim() &&
      email.trim() &&
      phone.trim() &&
      courseType &&
      department
    ) {
      setStudents([
        ...students,
        { name, stdID, email, phone, courseType, department },
      ]);
      // Reset form
      setName('');
      setStdID('');
      setEmail('');
      setPhone('');
      setCourseType('');
      setDepartment('');
    } else {
      alert('Please fill all required fields.');
    }
  };

  const handleRemove = (id) => {
    setStudents(students.filter((s) => s.stdID !== id));
  };

  return (
    <div className="Application">
      <h1>Course Registration</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
      />
      <br />

      <input
        type="number"
        value={stdID}
        onChange={(e) => setStdID(e.target.value)}
        placeholder="Student ID"
        min="0"
      />
      <br />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />

      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        min="0"
      />
      <br />

      {/* Course Type */}
      <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <label>
          <input
            type="radio"
            name="courseType"
            value="Online"
            checked={courseType === 'Online'}
            onChange={(e) => setCourseType(e.target.value)}
          />
          Online
        </label>
        <label>
          <input
            type="radio"
            name="courseType"
            value="On-campus"
            checked={courseType === 'On-campus'}
            onChange={(e) => setCourseType(e.target.value)}
          />
          On-campus
        </label>
      </div>
      <br />

      {/* Department */}
      <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <label>
          <input
            type="radio"
            name="department"
            value="Beirut"
            checked={department === 'Beirut'}
            onChange={(e) => setDepartment(e.target.value)}
          />
          Beirut
        </label>
        <label>
          <input
            type="radio"
            name="department"
            value="Bekaa"
            checked={department === 'Bekaa'}
            onChange={(e) => setDepartment(e.target.value)}
          />
          Bekaa
        </label>
        <label>
          <input
            type="radio"
            name="department"
            value="Nabatieh"
            checked={department === 'Nabatieh'}
            onChange={(e) => setDepartment(e.target.value)}
          />
          Nabatieh
        </label>
      </div>
      <br />

      <button className="add-btn" onClick={handleRegister}>
        Register
      </button>

      {/* Students Table */}
      <table className="grades-table">
        <thead className="table-head">
          <tr>
            <th className="table-header">Student ID</th>
            <th className="table-header">Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Phone</th>
            <th className="table-header">Course Type</th>
            <th className="table-header">Department</th>
            <th className="table-header">Action</th>
          </tr>
        </thead>

        <tbody className="table-body">
          {students.map((student) => (
            <tr className="table-row" key={student.stdID}>
              <td className="table-cell">{student.stdID}</td>
              <td className="table-cell">{student.name}</td>
              <td className="table-cell">{student.email}</td>
              <td className="table-cell">{student.phone}</td>
              <td className="table-cell">{student.courseType}</td>
              <td className="table-cell">{student.department}</td>
              <td className="table-cell">
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(student.stdID)}
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

export default Application2;
