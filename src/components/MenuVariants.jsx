export default function MenuVariants({ selectedDay, setSelectedDay, selectedPlan, setSelectedPlan, menuItems }) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  return (
    <section className="menu-variants">
      <h2 className="section-title">MENU VARIANTS</h2>

      <div className="menu-plan-selector">
        <label className="selector-label">Select Menu Plan</label>
        <div className="plan-buttons">
          <button
            className={`plan-btn primary ${selectedPlan === "Plan 1" ? "active" : ""}`}
            onClick={() => setSelectedPlan("Plan 1")}
          >
            Plan 1
          </button>
          <button
            className={`plan-btn ${selectedPlan === "Plan 2" ? "active" : ""}`}
            onClick={() => setSelectedPlan("Plan 2")}
          >
            Plan 2
          </button>
          <button
            className={`plan-btn ${selectedPlan === "Plan 3" ? "active" : ""}`}
            onClick={() => setSelectedPlan("Plan 3")}
          >
            Plan 3
          </button>
          <button
            className={`plan-btn ${selectedPlan === "Plan 4" ? "active" : ""}`}
            onClick={() => setSelectedPlan("Plan 4")}
          >
            Plan 4
          </button>
        </div>
      </div>

      <div className="day-selector">
        <label className="selector-label">Select Day</label>
        <div className="day-buttons">
          <button className="arrow-btn">←</button>
          {days.map((day) => (
            <button
              key={day}
              className={`day-btn ${selectedDay === day ? "active" : ""}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
          <button className="arrow-btn">→</button>
        </div>

        <div className="menu-display">
          <h3 className="menu-day-title">{selectedDay}'s Menu</h3>
          <ul className="menu-list">
            {menuItems[selectedDay]?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
