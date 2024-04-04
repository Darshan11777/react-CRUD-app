
import React, { useState, useEffect } from "react";
import Form from "./Form";
import nanoid from "nano-id";

export default function Home() {
  // Initialize the list of employees with some sample data
  const initialEmployees = [
    {
      id: nanoid(),
      userName: "Andrew45",
      name: "Andrew Clark",
    },
    {
      id: nanoid(),
      userName: "Tassinari",
      name: "Olivier Tassinari",
    },
    {
      id: nanoid(),
      userName: "Jack551",
      name: "Michael Jackson",
    },
  ];

  const [employees, setEmployees] = useState(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    return storedEmployees.length >= 1 ? storedEmployees : initialEmployees;
  });

 // State for tracking the currently selected employee ID for editing
 const [editId, setEditId] = useState(false);

  // Function to handle deleting an employee
  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((employee) => employee.id !== id));
  };

  // Function to handle setting the employee ID for editing
  const editEmployee = (id) => {
    setEditId(id);
  };

  // Use Effect to save the state of employees to localStorage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Function to render the list of employees as table rows
  const renderEmployeeRows = () => {
    return employees.map((employee) => (
      <tr key={employee.id}>
        <td scope="row">{employee.name}</td>

        <td>{employee.userName}</td>

        <td>
          <button
            onClick={() => {
              editEmployee(employee.id);
            }}
            className="btn btn-c min"
          >
            Edit
          </button>

          <button
            onClick={() => deleteEmployee(employee.id)}
            className="btn btn-c min"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };



  return (
    <div className="container">
      <div className="listItem">
      <Form
          setEmployees={setEmployees}
          id={nanoid}
          editId={editId}
          editEmployee={editEmployee}
          employees={employees}
        />
       
      </div>

      <div className="tableContainer">
        <h2>View users</h2>
        <table className="table">
          <thead className="fw-bolder">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{renderEmployeeRows()}</tbody>
        </table>
      </div>
    </div>
  );
}