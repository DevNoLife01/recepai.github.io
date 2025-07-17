"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Operations Manager",
      company: "TechStart Solutions",
      rating: 5,
      text: "RecepAI has completely transformed our customer service. We went from missing 30% of calls to having 24/7 coverage. Our customer satisfaction scores have increased by 40% since implementation.",
      image: "/placeholder.svg?height=80&width=80",
      videoUrl: "#",
    },
    {
      name: "Robert Chen",
      role: "CEO",
      company: "MedCare Clinic",
      rating: 5,
      text: "The appointment scheduling feature alone has saved us 15 hours per week. Patients love the instant responses, and our staff can focus on providing better care instead of answering phones.",
      image: "/placeholder.svg?height=80&width=80",
      videoUrl: "#",
    },
    {
      name: "Sarah Thompson",
      role: "Customer Success Director",
      company: "GrowthCorp",
      rating: 5,
      text: "Implementation was seamless, and the ROI was immediate. RecepAI handles complex inquiries with ease and seamlessly transfers to human agents when needed. It's like having a perfect receptionist.",
      image: "/placeholder.svg?height=80&width=80",
      videoUrl: "#",
    },
    {
      name: "Michael Rodriguez",
      role: "Practice Owner",
      company: "Downtown Dental",
      rating: 5,
      text: "Our patients are amazed by how natural the AI sounds. It handles appointment bookings, insurance questions, and even emergency protocols. We've reduced wait times and improved patient experience significantly.",
      image: "/placeholder.svg?height=80&width=80",
      videoUrl: "#",
    },
  ]

  const caseStudies = [
    {
      company: "TechStart Solutions",
      industry: "Technology",
      challenge: "High call volume overwhelming small team",
      solution: "RecepAI Professional with CRM integration",
      results: [
        "40% increase in customer satisfaction",
        "90% reduction in missed calls",
        "25% increase in lead conversion",
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      company: "MedCare Clinic",
      industry: "Healthcare",
      challenge: "Manual appointment scheduling causing delays",
      solution: "RecepAI with healthcare-specific training",
      results: [
        "15 hours/week saved on scheduling",
        "60% reduction in no-shows",
        "35% increase in patient satisfaction",
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      company: "GrowthCorp",
      industry: "Consulting",
      challenge: "Need for 24/7 customer support",
      solution: "RecepAI Enterprise with custom integrations",
      results: ["24/7 availability achieved", "50% reduction in response time", "30% increase in client retention"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".testimonial-card",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".case-study-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".case-studies-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. See how RecepAI has transformed businesses across industries.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-20">
          <Card className="testimonial-card bg-slate-900/50 border-slate-700 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-12 w-12 text-cyan-400 opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-cyan-400">{testimonials[currentTestimonial].role}</div>
                    <div className="text-gray-400">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Video
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-cyan-400" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-slate-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Case Studies */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Success Stories</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Detailed case studies showing how RecepAI has delivered measurable results for our clients.
          </p>
        </div>

        <div className="case-studies-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="case-study-card bg-slate-900/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{study.company}</h4>
                  <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">{study.industry}</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-1">Challenge</h5>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-1">Solution</h5>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-400 mb-2">Results</h5>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-green-400 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
