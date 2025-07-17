"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Rocket, ArrowRight } from "lucide-react"

export default function GetStartedModal() {
  const closeModal = () => {
    const modal = document.getElementById("get-started-modal")
    if (modal) {
      modal.classList.remove("active")
      document.body.style.overflow = "auto"
    }
  }

  return (
    <div
      id="get-started-modal"
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal()
      }}
    >
      <div className="bg-slate-900/95 border border-slate-700 rounded-2xl w-full max-w-md mx-4 backdrop-blur-md transform scale-90 transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get Started with RecepAI
          </h2>
          <Button variant="ghost" size="sm" onClick={closeModal} className="text-gray-400 hover:text-white">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-white" />
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">Ready to Transform Your Business?</h3>

            <p className="text-gray-300 mb-6 text-sm">
              Enter your details to get started with RecepAI. Our team will contact you within 24 hours.
            </p>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              {/* Web3Forms Configuration */}
              <input type="hidden" name="access_key" value="a7ef9865-9d5f-4961-8961-3461b6341b82" />
              <input type="hidden" name="subject" value="New Lead - RecepAI Get Started" />
              <input type="hidden" name="from_name" value="RecepAI Website" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
              </div>

              {/* Hidden message field to provide context */}
              <input
                type="hidden"
                name="message"
                value="This person is interested in getting started with RecepAI services through the Get Started modal."
              />

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
