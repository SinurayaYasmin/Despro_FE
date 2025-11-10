import { useState } from "react"
import MenuVariants from "@/components/MenuVariants"
import SelectedMenu from "@/components/SelectedMenu"
import WeeklyMenuPlan from "@/components/WeeklyMenuPlan"

export default function MealPlanner() {
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [selectedPlan, setSelectedPlan] = useState("Plan 1")

  const menuItems = {
    Monday: ["Nasi", "Ayam Goreng Telur", "Orak-Arik Buncis Wortel", "Papaya", "Susu"],
    Tuesday: ["Nasi", "Sempol Telur", "Capcay Bakso", "Papaya", "Tahu"],
    Wednesday: ["Nasi", "Ikan Kembung Goreng", "Tumis Kangkung", "Jeruk", "Susu"],
    Thursday: [],
    Friday: ["Nasi", "Telor Codok", "Tumis Lobu Siom Wortel", "Melon", "Susu"],
  }

  const weeklyPlan = {
    Monday: ["Nasi", "Ayam Goreng Telur", "Orak-Arik Buncis Wortel", "Papaya", "Susu"],
    Tuesday: ["Nasi", "Sempol Telur", "Capcay Bakso", "Papaya", "Tahu"],
    Wednesday: ["Nasi", "Ikan Kembung Goreng", "Tumis Kangkung", "Jeruk", "Susu"],
    Friday: ["Nasi", "Telor Codok", "Tumis Lobu Siom Wortel", "Melon", "Susu"],
  }

  const selectedMenuData = {
    Carbohydrate: ["Nasi"],
    Meat: ["Ayam Goreng Telur"],
    Protein: [],
    "Ayam Goreng Telur": ["Ayam Goreng Telur"],
    Vegetables: ["Orak-Arik Buncis Wortel"],
    Fruit: ["Papaya"],
    Drink: ["Susu"],
  }

  return (
    <div className="meal-planner">
      <div className="planner-container">
        <div className="planner-left">
          <MenuVariants
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            menuItems={menuItems}
          />
          <WeeklyMenuPlan weeklyPlan={weeklyPlan} />
        </div>

        <div className="planner-right">
          <SelectedMenu items={selectedMenuData} />
        </div>
      </div>
    </div>
  )
}
