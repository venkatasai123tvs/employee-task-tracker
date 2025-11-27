import { useEffect, useMemo, useState } from "react";
import { initialData } from "./data/mockData";
import Dashboard from "./components/Dashboard";
import TaskFilter from "./components/TaskFilter";
import EmployeeList from "./components/EmployeeList";
import TaskForm from "./components/TaskForm";

const STORAGE_KEY = "employee-task-tracker-data";

function App() {
  const [employees, setEmployees] = useState(initialData.employees);
  const [filterStatus, setFilterStatus] = useState("All");

  // Load from localStorage if present
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setEmployees(parsed);
        }
      } catch {
        // ignore invalid JSON
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  const allTasks = useMemo(
    () =>
      employees.flatMap((emp) =>
        emp.tasks.map((task) => ({ ...task, employeeId: emp.id }))
      ),
    [employees]
  );

  const stats = useMemo(() => {
    const total = allTasks.length;
    const completed = allTasks.filter((t) => t.status === "Completed").length;
    const pending = allTasks.filter((t) => t.status === "Pending").length;
    const inProgress = allTasks.filter((t) => t.status === "In Progress").length;
    const completedPercent = total ? Math.round((completed / total) * 100) : 0;

    return { total, completed, pending, inProgress, completedPercent };
  }, [allTasks]);

  const handleAddTask = (employeeId, title, status) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: [...emp.tasks, { id: Date.now(), title, status }],
            }
          : emp
      )
    );
  };

  const handleUpdateTaskStatus = (employeeId, taskId, newStatus) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId
          ? {
              ...emp,
              tasks: emp.tasks.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task
              ),
            }
          : emp
      )
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Employee Task Tracker</h1>
        <p className="subtitle">
          View, filter, and manage employee tasks (mock data only)
        </p>
      </header>

      <main className="app-main">
        <section className="top-section">
          <Dashboard stats={stats} />
          <div className="top-right">
            <TaskFilter
              filterStatus={filterStatus}
              onChange={setFilterStatus}
            />
            <TaskForm employees={employees} onAddTask={handleAddTask} />
          </div>
        </section>

        <section className="bottom-section">
          <EmployeeList
            employees={employees}
            filterStatus={filterStatus}
            onUpdateTaskStatus={handleUpdateTaskStatus}
          />
        </section>
      </main>

      <footer className="app-footer">
        ProU Technology – Frontend Assignment
      </footer>
    </div>
  );
}

export default App;
