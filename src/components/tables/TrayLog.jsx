import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, Search } from "lucide-react"

const logs = [
  {
    date: "20/10/2025",
    trayId: "ARD42",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD41",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD40",
    menuId: "SU13UTX",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD39",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD38",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD47",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
   {
    date: "20/10/2025",
    trayId: "ARD42",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD41",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD40",
    menuId: "SU13UTX",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD39",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD38",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD47",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
   {
    date: "20/10/2025",
    trayId: "ARD42",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD41",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD40",
    menuId: "SU13UTX",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD39",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD38",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
  {
    date: "20/10/2025",
    trayId: "ARD47",
    menuId: "A-23850",
    calories: "1019 g",
    fat: "44.0 g",
    protein: "44.0 g",
    carbs: "44.0 g",
  },
]

export function TrayLog() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>TRAY LOG</CardTitle>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-muted rounded-lg">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto max-h-[500px] overflow-y-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 font-semibold">Date</th>
              <th className="text-left py-2 font-semibold">Tray ID</th>
              <th className="text-left py-2 font-semibold">Menu ID</th>
              <th className="text-left py-2 font-semibold">Calories</th>
              <th className="text-left py-2 font-semibold">Fat</th>
              <th className="text-left py-2 font-semibold">Protein</th>
              <th className="text-left py-2 font-semibold">Carbohydrate</th>
              <th className="text-left py-2 font-semibold">Image</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr key={idx} className="border-b border-border hover:bg-muted/50">
                <td className="py-3">{log.date}</td>
                <td className="py-3">{log.trayId}</td>
                <td className="py-3">{log.menuId}</td>
                <td className="py-3">{log.calories}</td>
                <td className="py-3">{log.fat}</td>
                <td className="py-3">{log.protein}</td>
                <td className="py-3">{log.carbs}</td>
                <td className="py-3">
                  <a href="#" className="text-blue-600 hover:underline">
                    See Image
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-xs text-foreground/60">Showing 1 to 10 of 342</div>
      </CardContent>
    </Card>
  )
}