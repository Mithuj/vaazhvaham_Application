"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Gift, Users, Briefcase } from "lucide-react"
import { useState } from "react"

export default function SupportPage() {
  const [language] = useState<"en" | "ta">("en")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Support Us" : "எங்களை ஆதரியுங்கள்"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Your support helps us provide education, care, and opportunities to those who need it most"
                : "உங்கள் ஆதரவு எங்களுக்கு மிகவும் தேவைப்படுபவர்களுக்கு கல்வி, பராமரிப்பு மற்றும் வாய்ப்புகளை வழங்க உதவுகிறது"}
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {language === "en" ? "Ways to Support" : "ஆதரவு வழிகள்"}
          </h2>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{language === "en" ? "Donate" : "நன்கொடை"}</CardTitle>
                <CardDescription>
                  {language === "en" ? "Make a financial contribution" : "நிதி பங்களிப்பை செய்யுங்கள்"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Your monetary donations help us maintain our facility and programs."
                    : "உங்கள் பணத்தை நன்கொடைகள் எங்கள் வசதி மற்றும் திட்டங்களை பராமரிக்க உதவுகின்றன."}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Gift className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>{language === "en" ? "Sponsor" : "ஆதரவாளர்"}</CardTitle>
                <CardDescription>
                  {language === "en" ? "Sponsor a student or program" : "மாணவர் அல்லது திட்டத்திற்கு நிதியுதவி"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Directly impact a student's education and future opportunities."
                    : "மாணவரின் கல்வி மற்றும் எதிர்கால வாய்ப்புகளை நேரடியாக பாதிக்கவும்."}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>{language === "en" ? "Volunteer" : "தன்னார்வலர்"}</CardTitle>
                <CardDescription>
                  {language === "en" ? "Give your time and skills" : "உங்கள் நேரத்தையும் திறமைகளையும் கொடுங்கள்"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Volunteer to teach, mentor, or assist with our programs."
                    : "கற்பிக்க, வழிகாட்ட அல்லது எங்கள் திட்டங்களுக்கு உதவ தன்னார்வலராக பணியாற்றவும்."}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{language === "en" ? "Partner" : "கூட்டாளர்"}</CardTitle>
                <CardDescription>{language === "en" ? "Corporate partnerships" : "கார்ப்பரேட் கூட்டாண்மை"}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Partner with us to create employment opportunities for graduates."
                    : "பட்டதாரிகளுக்கு வேலை வாய்ப்புகளை உருவாக்க எங்களுடன் கூட்டு சேரவும்."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Your Impact" : "உங்கள் தாக்கம்"}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="mb-2 text-4xl font-bold text-primary">100+</p>
                <p className="text-muted-foreground">{language === "en" ? "Students Supported" : "மாணவர்கள் ஆதரவு"}</p>
              </div>
              <div>
                <p className="mb-2 text-4xl font-bold text-accent">35+</p>
                <p className="text-muted-foreground">{language === "en" ? "Years of Service" : "சேவை ஆண்டுகள்"}</p>
              </div>
              <div>
                <p className="mb-2 text-4xl font-bold text-secondary">50+</p>
                <p className="text-muted-foreground">
                  {language === "en" ? "Graduates Employed" : "வேலை வாய்ப்பு பெற்ற பட்டதாரிகள்"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Ready to Make a Difference?" : "மாற்றத்தை ஏற்படுத்த தயாரா?"}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Contact us today to learn more about how you can support our mission and transform lives."
                : "எங்கள் பணியை ஆதரிக்க மற்றும் வாழ்க்கையை மாற்ற நீங்கள் எப்படி முடியும் என்பதை மேலும் அறிய இன்றே எங்களை தொடர்பு கொள்ளுங்கள்."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="shadow-lg">
                <Heart className="mr-2 h-5 w-5" />
                {language === "en" ? "Donate Now" : "இப்போது நன்கொடை செய்யுங்கள்"}
              </Button>
              <Button size="lg" variant="outline">
                {language === "en" ? "Contact Us" : "தொடர்பு கொள்ளுங்கள்"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
