import { useState } from "react";

const STATUS_OPTIONS = ["Pending", "In Progress", "Completed"];

function TaskForm({ employees, onAddTask }) {
  const [employeeId, setEmployeeId] = useState(employees[0]?.id || "");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter task title");
      return;
    }

    onAddTask(Number(employeeId), title, status);
    setTitle(""); // clear input
  };

  return (
    <div className="card form-card">
      <h2>Add Task</h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <select
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        >
          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          {STATUS_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <button className="btn primary-btn">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;   // <-- VERY IMPORTANT
