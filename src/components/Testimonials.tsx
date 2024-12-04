'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Pathologist",
    image: "/placeholder.svg",
    quote: "CellSight has revolutionized our lab's efficiency. We can now process samples faster and with greater accuracy than ever before.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Rural Health Specialist",
    image: "/placeholder.svg",
    quote: "The portability and ease of use of CellSight have allowed us to bring advanced diagnostics to remote areas, significantly improving patient care.",
  },
  {
    name: "Prof. Emily Rodriguez",
    role: "Medical Research Director",
    image: "/placeholder.svg",
    quote: "The data collected by CellSight has been invaluable for our research. Its consistency and detail have accelerated our studies tremendously.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary bg-opacity-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Experts Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-text italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

