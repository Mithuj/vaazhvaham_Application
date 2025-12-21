"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, BookOpen } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function FounderPage() {
  const [language] = useState<"en" | "ta">("en")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Our Founder" : "எங்கள் நிறுவனர்"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "A visionary leader whose compassion changed countless lives"
                : "எண்ணற்ற வாழ்க்கைகளை மாற்றிய இரக்கமுள்ள தொலைநோக்கு தலைவர்"}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
