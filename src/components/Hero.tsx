import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Revolutionizing Microscopic Analysis with CellSight
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Automated, accurate, and efficient microscopic sampling for the future of medical diagnostics.
          </p>
          <Button size="lg">Discover CellSight</Button>
        </div>
      </div>
    </section>
  )
}

