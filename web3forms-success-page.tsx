"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Home } from "lucide-react"

// Optional: Custom success page component if you want to host your own
export default function Web3FormsSuccessPage() {
  useEffect(() => {
    // Optional: Track form submission success
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", {
        event_category: "engagement",
        event_label: "contact_form",
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-slate-900/50 border-slate-700">
        <CardContent className="text-center p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">Thank You!</h1>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Your message has been sent successfully. Our team at RecepAI will review your inquiry and get back to you
            within 24 hours.
          </p>

          <div className="space-y-3">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>

            <Button
              onClick={() => (window.location.href = "/")}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
            >
              <Home className="mr-2 h-4 w-4" />
              Return to Homepage
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700">
            <p className="text-sm text-gray-400">
              Need immediate assistance?
              <br />
              Email us at{" "}
              <a href="mailto:alpttuncer@gmail.com" className="text-cyan-400 hover:underline">
                alpttuncer@gmail.com
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
