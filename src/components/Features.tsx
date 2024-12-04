import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Camera, Server, Clock } from 'lucide-react'

const features = [
  {
    icon: Microscope,
    title: 'Advanced Microscopy',
    description: 'High-precision microscope with motorized stage for accurate sample analysis.',
  },
  {
    icon: Camera,
    title: 'Automated Imaging',
    description: 'Captures high-resolution images every 3 seconds for comprehensive sample coverage.',
  },
  {
    icon: Server,
    title: 'Secure Cloud Storage',
    description: 'Images are securely stored in Azure Blob storage, organized by patient ID.',
  },
  {
    icon: Clock,
    title: 'Real-time Analysis',
    description: 'Immediate processing and analysis of captured images for quick results.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

