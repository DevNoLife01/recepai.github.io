"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProductsSection from "@/components/products-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatBot from "@/components/chat-bot"
import GetStartedModal from "@/components/get-started-modal"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize smooth scrolling and page animations
      gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" })

      // Scrollspy functionality
      const updateActiveNavLink = () => {
        const sections = document.querySelectorAll("section[id]")
        const navLinks = document.querySelectorAll(".nav-link")
        let current = ""
        const scrollPosition = window.scrollY + 100

        sections.forEach((section) => {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute("id") || ""
          }
        })

        navLinks.forEach((link) => {
          link.classList.remove("active")
          const href = link.getAttribute("href")
          if (href === `#${current}`) {
            link.classList.add("active")
          }
        })
      }

      // Add scroll event listener
      const handleScroll = () => {
        updateActiveNavLink()
      }

      window.addEventListener("scroll", handleScroll)
      updateActiveNavLink() // Initial call

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main ref={mainRef} className="relative">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatBot />
      <GetStartedModal />
    </div>
  )
}
