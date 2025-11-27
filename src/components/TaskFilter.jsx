const STATUSES = ["All", "Pending", "In Progress", "Completed"];

function TaskFilter({ filterStatus, onChange }) {
  return (
    <div className="card filter-card">
      <h2>Filter Tasks</h2>

      <div className="filter-buttons">
        {STATUSES.map((status) => (
          <button
            key={status}
            className={
              filterStatus === status
                ? "btn filter-btn active"
                : "btn filter-btn"
            }
            onClick={() => onChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TaskFilter;   // <-- IMPORTANT
