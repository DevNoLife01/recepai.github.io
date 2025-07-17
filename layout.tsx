import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RecepAI - AI Receptionist Solutions for Modern Businesses",
  description:
    "Transform your business with cutting-edge AI receptionist solutions. Provide 24/7 customer service, streamline operations, and enhance customer experience with RecepAI.",
  keywords:
    "AI receptionist, artificial intelligence, customer service, business automation, virtual receptionist, AI assistant",
  authors: [{ name: "RecepAI Team" }],
  creator: "RecepAI",
  publisher: "RecepAI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://recepai.com",
    title: "RecepAI - AI Receptionist Solutions",
    description: "Transform your business with cutting-edge AI receptionist solutions.",
    siteName: "RecepAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "RecepAI - AI Receptionist Solutions",
    description: "Transform your business with cutting-edge AI receptionist solutions.",
    creator: "@RecepAI",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
