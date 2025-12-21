"use client"

import { useState } from "react"

export default function TermsPage() {
  const [language] = useState<"en" | "ta">("en")

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Terms of Service" : "சேவை விதிமுறைகள்"}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="text-muted-foreground leading-relaxed">
              {language === "en"
                ? "By accessing and using the Vaazhvaham website, you agree to comply with and be bound by these terms of service. Please read these terms carefully before using our website."
                : "வாழ்வஹம் இணையதளத்தை அணுகுவதன் மூலமும் பயன்படுத்துவதன் மூலமும், இந்த சேவை விதிமுறைகளை நீங்கள் ஏற்றுக்கொள்கிறீர்கள். எங்கள் இணையதளத்தைப் பயன்படுத்துவதற்கு முன் இந்த விதிமுறைகளை கவனமாகப் படிக்கவும்."}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
