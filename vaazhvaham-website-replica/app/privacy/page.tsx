"use client"

import { useState } from "react"

export default function PrivacyPage() {
  const [language] = useState<"en" | "ta">("en")

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Privacy Policy" : "தனியுரிமை கொள்கை"}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Vaazhvaham respects your privacy and is committed to protecting your personal information. This privacy policy explains how we collect, use, and safeguard your data when you interact with our website and services."
                : "வாழ்வஹம் உங்கள் தனியுரிமையை மதிக்கிறது மற்றும் உங்கள் தனிப்பட்ட தகவல்களைப் பாதுகாக்க அர்ப்பணிப்புடன் உள்ளது. நீங்கள் எங்கள் இணையதளம் மற்றும் சேவைகளுடன் தொடர்பு கொள்ளும்போது உங்கள் தரவை நாங்கள் எவ்வாறு சேகரிக்கிறோம், பயன்படுத்துகிறோம் மற்றும் பாதுகாக்கிறோம் என்பதை இந்த தனியுரிமை கொள்கை விளக்குகிறது."}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
