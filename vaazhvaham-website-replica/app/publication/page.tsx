"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import { useState } from "react"

export default function PublicationPage() {
  const [language] = useState<"en" | "ta">("en")

  const publications = [
    {
      id: 1,
      title: language === "en" ? "Annual Report 2024" : "ஆண்டு அறிக்கை 2024",
      description:
        language === "en"
          ? "Comprehensive annual report detailing our activities, financial statements, and achievements throughout 2024."
          : "2024 முழுவதும் எங்கள் செயல்பாடுகள், நிதி அறிக்கைகள் மற்றும் சாதனைகளை விவரிக்கும் விரிவான ஆண்டு அறிக்கை.",
      year: "2024",
      type: language === "en" ? "Annual Report" : "ஆண்டு அறிக்கை",
    },
    {
      id: 2,
      title: language === "en" ? "Vocational Training Guide" : "தொழிற்பயிற்சி வழிகாட்டி",
      description:
        language === "en"
          ? "Guide to our vocational training programs including course descriptions, schedules, and career pathways."
          : "பாட விளக்கங்கள், அட்டவணைகள் மற்றும் தொழில் பாதைகள் உள்ளிட்ட எங்கள் தொழிற்பயிற்சி திட்டங்களுக்கான வழிகாட்டி.",
      year: "2024",
      type: language === "en" ? "Guide" : "வழிகாட்டி",
    },
    {
      id: 3,
      title: language === "en" ? "Newsletter - December 2024" : "செய்திமடல் - டிசம்பர் 2024",
      description:
        language === "en"
          ? "Monthly newsletter featuring stories from residents, upcoming events, and community updates."
          : "குடியிருப்பாளர்களின் கதைகள், வரவிருக்கும் நிகழ்வுகள் மற்றும் சமூக புதுப்பிப்புகளைக் கொண்ட மாதாந்திர செய்திமடல்.",
      year: "2024",
      type: language === "en" ? "Newsletter" : "செய்திமடல்",
    },
    {
      id: 4,
      title: language === "en" ? "Braille Literacy Handbook" : "பிரெய்லி கல்வியறிவு கையேடு",
      description:
        language === "en"
          ? "Educational handbook on Braille reading and writing techniques for students and educators."
          : "மாணவர்கள் மற்றும் கல்வியாளர்களுக்கான பிரெய்லி வாசிப்பு மற்றும் எழுதும் நுட்பங்கள் பற்றிய கல்வி கையேடு.",
      year: "2023",
      type: language === "en" ? "Educational" : "கல்வி",
    },
    {
      id: 5,
      title: language === "en" ? "Success Stories 2023" : "வெற்றிக் கதைகள் 2023",
      description:
        language === "en"
          ? "Inspiring success stories of our graduates and their journey towards independence and achievement."
          : "எங்கள் பட்டதாரிகளின் ஊக்கமளிக்கும் வெற்றிக் கதைகள் மற்றும் சுதந்திரம் மற்றும் சாதனை நோக்கிய அவர்களின் பயணம்.",
      year: "2023",
      type: language === "en" ? "Stories" : "கதைகள்",
    },
    {
      id: 6,
      title: language === "en" ? "Annual Report 2023" : "ஆண்டு அறிக்கை 2023",
      description:
        language === "en"
          ? "Comprehensive annual report for 2023 including financial statements and program outcomes."
          : "நிதி அறிக்கைகள் மற்றும் திட்ட விளைவுகள் உள்ளிட்ட 2023 க்கான விரிவான ஆண்டு அறிக்கை.",
      year: "2023",
      type: language === "en" ? "Annual Report" : "ஆண்டு அறிக்கை",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Publications" : "வெளியீடுகள்"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Access our reports, newsletters, and educational materials"
                : "எங்கள் அறிக்கைகள், செய்திமடல்கள் மற்றும் கல்விப் பொருட்களை அணுகவும்"}
            </p>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publications.map((publication) => (
              <Card key={publication.id} className="flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                      {publication.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-relaxed">{publication.title}</CardTitle>
                  <CardDescription>{publication.year}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{publication.description}</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    {language === "en" ? "Download PDF" : "PDF பதிவிறக்கம்"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
