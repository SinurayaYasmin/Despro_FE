export default function SelectedMenu({ items }) {
  const categoryColors = {
    Carbohydrate: "#fde4d0",
    Meat: "#fcc5b6",
    Protein: "#f5d5d0",
    Vegetables: "#d4f1d4",
    Fruit: "#fef3c7",
    Drink: "#dbeafe",
  }

  return (
    <section className="selected-menu">
      <h3 className="section-subtitle">Selected Menu</h3>

      <div className="menu-items">
        {Object.entries(items).map(([category, foods]) => (
          <div key={category} className="menu-category">
            <div className="category-tag" style={{ backgroundColor: categoryColors[category] }}>
              {category}
            </div>
            {foods.map((food, idx) => (
              <div key={idx} className="food-item">
                {food}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button className="confirm-btn">Confirm</button>
    </section>
  )
}
