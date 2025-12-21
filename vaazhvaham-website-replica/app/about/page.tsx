"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Home, Users } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [language] = useState<"en" | "ta">("en")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "About Us" : "எங்களை பற்றி"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Discover our mission, values, and commitment to empowering the visually impaired community"
                : "பார்வையற்றோர் சமூகத்தை மேம்படுத்துவதற்கான எங்கள் பணி, மதிப்புகள் மற்றும் அர்ப்பணிப்பைக் கண்டறியுங்கள்"}
            </p>
          </div>
        </div>
      </section>

      {/* Executive Members Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Executive Members" : "நிர்வாக உறுப்பினர்கள்"}
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* President */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/president.jpg" 
                    alt="President" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "President" : "தலைவர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Vice President */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/VicePres.jpg" 
                    alt="Vice President" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Vice President" : "துணைத் தலைவர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Secretary */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/secretary.jpg" 
                    alt="Secretary" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Secretary" : "செயலாளர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Assistant Secretary */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/AssSecr.jpg" 
                    alt="Assistant Secretary" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Assistant Secretary" : "உதவி செயலாளர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Treasurer */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Treasurer.jpg" 
                    alt="Treasurer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Treasurer" : "பொருளாளர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 1 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee1.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 2 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee2.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 3 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee3.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 4 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee4.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 5 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee5.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 6 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee6.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
