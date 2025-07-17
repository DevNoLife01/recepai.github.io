"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Lightbulb, Award } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { number: "10,000+", label: "Businesses Served", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Target },
    { number: "50+", label: "AI Models Trained", icon: Lightbulb },
    { number: "25+", label: "Industry Awards", icon: Award },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Google AI researcher with 15+ years in machine learning and natural language processing.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Microsoft engineer specializing in conversational AI and enterprise software architecture.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Computer Science from MIT, leading our AI innovation and model development initiatives.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "VP of Customer Success",
      bio: "Customer experience expert with a track record of scaling SaaS businesses from startup to IPO.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Animate stats
      gsap.fromTo(
        ".stat-card",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate team cards
      gsap.fromTo(
        ".team-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About RecepAI
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Founded in 2020, RecepAI is at the forefront of artificial intelligence innovation, specializing in
              conversational AI solutions that transform how businesses interact with their customers. Our mission is to
              make advanced AI technology accessible to businesses of all sizes.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We believe that every business deserves access to intelligent, responsive, and personalized customer
              service solutions. Our team of AI experts, engineers, and customer success professionals work tirelessly
              to deliver cutting-edge technology that drives real business results.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="stat-card bg-slate-900/50 border-slate-700 text-center p-6">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-slate-900/50 border-slate-700 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To democratize artificial intelligence by providing businesses with intelligent, accessible, and
                affordable AI reception solutions that enhance customer experience and operational efficiency.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-700 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the global leader in conversational AI, creating a world where every business interaction is
                intelligent, personalized, and seamlessly automated while maintaining the human touch.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Meet Our Team</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in AI, software engineering, and customer
            success.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="team-card bg-slate-900/50 border-slate-700 overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
