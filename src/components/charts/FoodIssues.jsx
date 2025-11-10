import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Taste", value: 521, percentage: 321 },
  { name: "Freshness", value: 420, percentage: 320 },
  { name: "Portion", value: 350, percentage: 270 },
  { name: "Portion", value: 280, percentage: 210 },
]

export function FoodIssues() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>FOOD ISSUES</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-sm font-medium">
                <span>{item.name}</span>
                <span>
                  {item.value} ({item.percentage})
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(item.value / 521) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
