import { Info } from "lucide-react"

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
                  <p key={idx}>{item}</p>
                ))}
              </ul>
            ) : (
              <div className="empty-state">
                <span className="empty-icon">
<Info className="h-7 w-7 text-center" color="orange"/>
                </span>
                <p>No menu selected</p>
                <small>Choose a variant menu above for {day} menu</small>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="warning-banner">
        <span className="warning-icon">
          <Info className="h-5 w-5 text-yellow-600" />
        </span>
        <p>Please select a menu for each days (Monday - Friday)</p>
      </div>
    </section>
  )
}
