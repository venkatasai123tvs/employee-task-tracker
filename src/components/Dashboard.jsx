function Dashboard({ stats }) {
  const { total, completed, pending, inProgress, completedPercent } = stats;

  return (
    <div className="card dashboard-card">
      <h2>Dashboard</h2>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">Total</span>
          <span className="stat-value">{total}</span>
        </div>

        <div className="stat-item">
          <span className="stat-label">Completed</span>
          <span className="stat-value">{completed}</span>
        </div>

        <div className="stat-item">
          <span className="stat-label">In Progress</span>
          <span className="stat-value">{inProgress}</span>
        </div>

        <div className="stat-item">
          <span className="stat-label">Pending</span>
          <span className="stat-value">{pending}</span>
        </div>
      </div>

      <div className="progress-wrapper">
        <span className="stat-label">Completion</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${completedPercent}%` }}
          ></div>
        </div>
        <span className="progress-text">{completedPercent}% completed</span>
      </div>
    </div>
  );
}

export default Dashboard;  // <-- THIS LINE IS VERY IMPORTANT
