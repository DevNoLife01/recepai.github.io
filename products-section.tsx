"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, ArrowRight } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const products = [
    {
      name: "RecepAI Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses looking to automate basic reception tasks.",
      features: [
        "AI Phone Answering",
        "Basic Appointment Scheduling",
        "Email Integration",
        "50 Calls/Month",
        "Business Hours Support",
        "Basic Analytics",
      ],
      popular: false,
      demoId: "starter",
    },
    {
      name: "RecepAI Professional",
      price: "$299",
      period: "/month",
      description: "Comprehensive solution for growing businesses with advanced features.",
      features: [
        "Everything in Starter",
        "24/7 AI Reception",
        "Advanced Call Routing",
        "CRM Integration",
        "500 Calls/Month",
        "Multi-language Support",
        "Custom Voice Training",
        "Priority Support",
      ],
      popular: true,
      demoId: "professional",
    },
    {
      name: "RecepAI Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with complex requirements.",
      features: [
        "Everything in Professional",
        "Unlimited Calls",
        "Custom AI Training",
        "Advanced Analytics",
        "API Access",
        "Dedicated Account Manager",
        "Custom Integrations",
        "SLA Guarantee",
      ],
      popular: false,
      demoId: "enterprise",
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        ".product-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  const handleDemoClick = (demoId: string) => {
    setActiveDemo(demoId)
    // Simulate demo interaction
    setTimeout(() => setActiveDemo(null), 3000)
  }

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your AI Solution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing plans designed to scale with your business needs. Start small and grow with our
            comprehensive AI reception solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`product-card relative bg-slate-900/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 ${
                product.popular ? "ring-2 ring-cyan-400 scale-105" : ""
              }`}
            >
              {product.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-white mb-2">{product.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-cyan-400">{product.price}</span>
                  <span className="text-gray-400">{product.period}</span>
                </div>
                <CardDescription className="text-gray-300">{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button
                    className={`w-full ${
                      product.popular
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                        : "bg-slate-700 hover:bg-slate-600"
                    } text-white`}
                    onClick={() => {
                      const modal = document.getElementById("get-started-modal")
                      if (modal) {
                        modal.classList.add("active")
                        document.body.style.overflow = "hidden"
                      }
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
