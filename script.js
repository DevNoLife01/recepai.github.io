import particlesJS from "particles.js"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Initialize particles
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#22d3ee" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#22d3ee",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
  },
  retina_detect: true,
})

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Navbar and scrollspy functionality
const navbar = document.getElementById("navbar")
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll("section[id]")

// Mobile menu toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Enhanced Scrollspy functionality
function updateActiveNavLink() {
  let current = ""
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-section") === current) {
      link.classList.add("active")
    }
  })
}

// Throttled scroll event for better performance
let ticking = false
function updateScrollEffects() {
  // Navbar background on scroll
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  // Update active nav link
  updateActiveNavLink()
  ticking = false
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects)
    ticking = true
  }
})

// Smooth scroll for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("data-section")
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Enhanced Hero animations with GSAP
const heroTimeline = gsap.timeline()

heroTimeline
  .from(".title-line-1", { duration: 1.2, y: 100, opacity: 0, ease: "power3.out" })
  .from(".title-line-2", { duration: 1.2, y: 100, opacity: 0, ease: "power3.out" }, "-=0.6")
  .from(".hero-subtitle", { duration: 1, y: 50, opacity: 0, ease: "power3.out" }, "-=0.4")
  .from(".hero-buttons", { duration: 0.8, y: 30, opacity: 0, ease: "power3.out" }, "-=0.3")
  .from(".hero-features", { duration: 0.8, y: 20, opacity: 0, ease: "power3.out" }, "-=0.2")

// Enhanced scroll-triggered animations
gsap.utils.toArray(".service-card").forEach((card, i) => {
  gsap.fromTo(
    card,
    { y: 100, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
      delay: i * 0.1,
    },
  )
})

gsap.utils.toArray(".pricing-card").forEach((card, i) => {
  gsap.fromTo(
    card,
    { y: 120, opacity: 0, scale: 0.8 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
      delay: i * 0.2,
    },
  )
})

gsap.utils.toArray(".stat-card").forEach((card, i) => {
  gsap.fromTo(
    card,
    { scale: 0.6, opacity: 0, rotation: -10 },
    {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
      delay: i * 0.15,
    },
  )
})

// Enhanced counter animation for stats
function animateCounter(element, target, suffix = "") {
  let current = 0
  const increment = target / 60 // 60 frames for smooth animation
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current) + suffix
  }, 16) // ~60fps
}

// Trigger counter animations when stats section is visible
ScrollTrigger.create({
  trigger: ".stats-grid",
  start: "top 80%",
  onEnter: () => {
    document.querySelectorAll(".stat-number").forEach((stat) => {
      const target = Number.parseFloat(stat.getAttribute("data-target"))
      const suffix = target === 99.9 ? "%" : target > 100 ? "+" : ""
      animateCounter(stat, target, suffix)
    })
  },
})

// Enhanced testimonial carousel
let currentSlide = 0
const slides = document.querySelectorAll(".testimonial-slide")
const dots = document.querySelectorAll(".dot")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  slides[index].classList.add("active")
  dots[index].classList.add("active")
  currentSlide = index
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length
  showSlide(next)
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length
  showSlide(prev)
}

nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index))
})

// Auto-advance testimonials with pause on hover
let testimonialInterval = setInterval(nextSlide, 5000)

document.querySelector(".testimonial-carousel").addEventListener("mouseenter", () => {
  clearInterval(testimonialInterval)
})

document.querySelector(".testimonial-carousel").addEventListener("mouseleave", () => {
  testimonialInterval = setInterval(nextSlide, 5000)
})

// Enhanced contact form handling with Web3Forms (HTML submission)
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const submitButton = contactForm.querySelector(".submit-button")
    const originalText = submitButton.innerHTML

    // Show loading state
    submitButton.innerHTML = '<div class="loading"></div> Sending...'
    submitButton.disabled = true

    // Form will submit naturally to Web3Forms
    // Reset button state after a delay to show feedback
    setTimeout(() => {
      submitButton.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
      submitButton.style.background = "linear-gradient(135deg, #10b981, #059669)"
    }, 1000)
  })
}

// Enhanced chatbot functionality
const chatbotToggle = document.getElementById("chatbot-toggle")
const chatbotWindow = document.getElementById("chatbot-window")
const chatbotClose = document.getElementById("chatbot-close")
const chatbotInput = document.getElementById("chatbot-input")
const chatbotSend = document.getElementById("chatbot-send")
const chatbotMessages = document.getElementById("chatbot-messages")

const botResponses = [
  "I'd be happy to help you learn more about RecepAI's solutions! 🤖",
  "Our AI receptionist can handle calls 24/7 and integrate with your existing systems seamlessly.",
  "RecepAI offers three main plans: Starter ($99/month), Professional ($299/month), and Enterprise (custom pricing). Which one interests you?",
  "Our AI can handle appointment scheduling, call routing, and customer inquiries automatically. It's like having a perfect receptionist!",
  "Let me connect you with our sales team for a personalized consultation. Would you like me to schedule that?",
  "RecepAI integrates with popular CRM systems like Salesforce, HubSpot, and many more. What system are you currently using?",
  "Our setup process typically takes 24-48 hours with full support from our team. We make it super easy!",
  "Would you like to see a demo of RecepAI in action? I can arrange that for you right away! ✨",
]

chatbotToggle.addEventListener("click", () => {
  chatbotWindow.classList.add("active")
  chatbotToggle.style.display = "none"
  chatbotInput.focus()
})

chatbotClose.addEventListener("click", () => {
  chatbotWindow.classList.remove("active")
  chatbotToggle.style.display = "flex"
})

function addMessage(text, isUser = false) {
  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${isUser ? "user-message" : "bot-message"}`

  messageDiv.innerHTML = `
    <div class="message-avatar">
      <i class="fas fa-${isUser ? "user" : "robot"}"></i>
    </div>
    <div class="message-content">${text}</div>
  `

  chatbotMessages.appendChild(messageDiv)
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight
}

function sendMessage() {
  const message = chatbotInput.value.trim()
  if (!message) return

  addMessage(message, true)
  chatbotInput.value = ""

  // Show typing indicator with more realistic delay
  setTimeout(
    () => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      addMessage(randomResponse)
    },
    1000 + Math.random() * 2000,
  )
}

chatbotSend.addEventListener("click", sendMessage)
chatbotInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage()
  }
})

// Enhanced Get Started Modal Functionality
const getStartedBtns = document.querySelectorAll(".get-started-trigger")
const getStartedModal = document.getElementById("get-started-modal")
const modalClose = document.getElementById("modal-close")
const getStartedFormContainer = document.getElementById("get-started-form-container")
const successMessage = document.getElementById("success-message")
const closeSuccessBtn = document.getElementById("close-success")
const learnMoreBtn = document.getElementById("learn-more-btn")

// Open modal when Get Started buttons are clicked
getStartedBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()
    getStartedModal.classList.add("active")
    document.body.style.overflow = "hidden"

    // Focus on email input after modal opens
    setTimeout(() => {
      document.getElementById("get-started-email").focus()
    }, 300)
  })
})

// Learn More button scrolls to services
if (learnMoreBtn) {
  learnMoreBtn.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("services").scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}

// Close modal function
function closeModal() {
  getStartedModal.classList.remove("active")
  document.body.style.overflow = "auto"

  // Reset form after a delay
  setTimeout(() => {
    getStartedFormContainer.style.display = "block"
    successMessage.style.display = "none"
    document.getElementById("get-started-form").reset()
  }, 300)
}

modalClose.addEventListener("click", closeModal)
closeSuccessBtn.addEventListener("click", closeModal)

// Close modal when clicking outside
getStartedModal.addEventListener("click", (e) => {
  if (e.target === getStartedModal) {
    closeModal()
  }
})

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && getStartedModal.classList.contains("active")) {
    closeModal()
  }
})

// Handle Get Started form submission with Web3Forms (HTML submission)
if (getStartedModal) {
  getStartedModal.addEventListener("submit", (e) => {
    const submitButton = getStartedModal.querySelector(".get-started-submit")
    const originalText = submitButton.innerHTML

    // Show loading state
    submitButton.innerHTML = '<div class="loading"></div> Processing...'
    submitButton.disabled = true

    // Form will submit naturally to Web3Forms
    // The success message will be handled by the redirect
  })
}

// Enhanced hover effects with GSAP
document.querySelectorAll(".service-card, .pricing-card, .contact-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { duration: 0.4, y: -15, scale: 1.02, ease: "power2.out" })
  })

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { duration: 0.4, y: 0, scale: 1, ease: "power2.out" })
  })
})

// Enhanced parallax effect for hero section
gsap.to(".hero-content", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
})

// Enhanced text reveal animations
gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.fromTo(
    title,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    },
  )
})

// Enhanced section subtitle animations
gsap.utils.toArray(".section-subtitle").forEach((subtitle) => {
  gsap.fromTo(
    subtitle,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: subtitle,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    },
  )
})

// Initialize all animations when page loads
window.addEventListener("load", () => {
  // Refresh ScrollTrigger to ensure proper positioning
  ScrollTrigger.refresh()

  // Add loaded class to body for any CSS transitions
  document.body.classList.add("loaded")

  // Initialize scrollspy
  updateActiveNavLink()

  // Add entrance animation to floating elements
  gsap.fromTo(
    ".floating-element",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 0.6,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.2,
      delay: 1,
    },
  )
})

// Handle window resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh()
})

// Add smooth page transitions
document.addEventListener("DOMContentLoaded", () => {
  // Fade in page content
  gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" })
})

// Enhanced button interactions
document.querySelectorAll("button, .nav-link").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, { scale: 1.05, duration: 0.2, ease: "power2.out" })
  })

  element.addEventListener("mouseleave", () => {
    gsap.to(element, { scale: 1, duration: 0.2, ease: "power2.out" })
  })
})

// Add intersection observer for additional animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in")
    }
  })
}, observerOptions)

// Observe elements for fade-in animation
document.querySelectorAll(".about-text, .contact-card, .footer-section").forEach((el) => {
  observer.observe(el)
})
