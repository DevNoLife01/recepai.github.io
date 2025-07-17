"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Phone, MessageSquare, Calendar, Users, BarChart3 } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: Bot,
      title: "AI Receptionist",
      description:
        "Intelligent virtual receptionist that handles calls, schedules appointments, and provides information 24/7.",
      features: ["Natural Language Processing", "Multi-language Support", "Call Routing", "Appointment Scheduling"],
    },
    {
      icon: Phone,
      title: "Call Management",
      description:
        "Advanced call handling system with intelligent routing, voicemail transcription, and call analytics.",
      features: ["Smart Call Routing", "Voicemail to Text", "Call Recording", "Analytics Dashboard"],
    },
    {
      icon: MessageSquare,
      title: "Live Chat AI",
      description:
        "Conversational AI for websites and apps that provides instant customer support and lead generation.",
      features: ["Real-time Responses", "Lead Qualification", "CRM Integration", "Sentiment Analysis"],
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Automated scheduling system that manages appointments, sends reminders, and handles cancellations.",
      features: ["Calendar Integration", "Automated Reminders", "Booking Confirmations", "Rescheduling"],
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Comprehensive CRM integration that tracks customer interactions and maintains detailed profiles.",
      features: ["Customer Profiles", "Interaction History", "Follow-up Automation", "Data Analytics"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description:
        "Detailed reporting and analytics to track performance, customer satisfaction, and business metrics.",
      features: ["Performance Metrics", "Customer Insights", "ROI Tracking", "Custom Reports"],
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate cards
      gsap.fromTo(
        ".service-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI-powered services designed to revolutionize your business operations and enhance customer
            experience.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card bg-slate-900/50 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
