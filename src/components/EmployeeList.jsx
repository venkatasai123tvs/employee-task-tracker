const STATUS_OPTIONS = ["Pending", "In Progress", "Completed"];

function EmployeeList({ employees, filterStatus, onUpdateTaskStatus }) {
  const filterTasks = (tasks) =>
    filterStatus === "All" ? tasks : tasks.filter((t) => t.status === filterStatus);

  return (
    <div className="card employee-card">
      <h2>Employees & Tasks</h2>

      {employees.map((emp) => {
        const tasks = filterTasks(emp.tasks);
        if (tasks.length === 0) return null;

        return (
          <div key={emp.id} className="employee">
            <h3>
              {emp.name} — <span className="employee-role">{emp.role}</span>
            </h3>

            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className="task-item">
                  <span className="task-title">{task.title}</span>

                  <select
                    value={task.status}
                    onChange={(e) =>
                      onUpdateTaskStatus(emp.id, task.id, e.target.value)
                    }
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default EmployeeList;   // <-- IMPORTANT LINE
