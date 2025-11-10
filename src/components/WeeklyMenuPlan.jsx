export default function WeeklyMenuPlan({ weeklyPlan }) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  return (
    <section className="weekly-menu">
      <h2 className="section-title">WEEKLY MENU PLAN</h2>

      <div className="week-grid">
        {days.map((day) => (
          <div key={day} className={`day-card ${!weeklyPlan[day] || weeklyPlan[day].length === 0 ? "empty" : ""}`}>
            <h4 className="day-header">{day.toUpperCase()}</h4>
            {weeklyPlan[day] && weeklyPlan[day].length > 0 ? (
              <ul className="day-menu-items">
                {weeklyPlan[day].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <div className="empty-state">
                <span className="empty-icon">⚠️</span>
                <p>No menu selected</p>
                <small>Choose a menu menu for this day</small>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="warning-banner">
        <span className="warning-icon">⚠️</span>
        <p>Please select a menu for each days (Monday - Friday)</p>
      </div>
    </section>
  )
}
