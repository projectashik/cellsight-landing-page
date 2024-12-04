import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const availableTests = [
  "Malaria Detection",
  "Tuberculosis Screening",
]

export default function AvailableTests() {
  return (
    <section id="available-tests" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Available Tests</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Current Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {availableTests.map((test, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Check className="text-primary" />
                  <span>{test}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center text-muted-foreground">
              More tests coming soon! Our team is constantly working on expanding our capabilities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

