"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Heart, BookOpen, Users } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [language] = useState<"en" | "ta">("en")

  const upcomingEvents = [
    {
      date: "Thu Sep 11 2025",
      title:
        language === "en"
          ? "Dr. Annaladsumy Sinnaththamby memorial day and sermon – 2025"
          : "டாக்டர் அன்னலட்சுமி சின்னத்தம்பி நினைவு நாள் மற்றும் பிரசங்கம் – 2025",
    },
    {
      date: "Sat Aug 15 2025",
      title: language === "en" ? "Independence Day Celebration" : "சுதந்திர தின கொண்டாட்டம்",
    },
    {
      date: "Mon Jul 21 2025",
      title: language === "en" ? "Annual General Meeting" : "ஆண்டு பொதுக் கூட்டம்",
    },
  ]

  const latestNews = [
    {
      date: "4th January 2025",
      title: language === "en" ? "International Braille Day celebration" : "சர்வதேச பிரெய்லி தினக் கொண்டாட்டம்",
      excerpt:
        language === "en"
          ? "We celebrated International Braille Day with our students and staff, highlighting the importance of accessible reading materials for the visually impaired community."
          : "பார்வையற்றோர் சமூகத்திற்கான அணுகக்கூடிய வாசிப்புப் பொருட்களின் முக்கியத்துவத்தை எடுத்துக்காட்டி, எங்கள் மாணவர்கள் மற்றும் ஊழியர்களுடன் சர்வதேச பிரெய்லி தினத்தைக் கொண்டாடினோம்.",
    },
    {
      date: "15th December 2024",
      title: language === "en" ? "New Braille Equipment Donation" : "புதிய பிரெய்லி உபகரண நன்கொடை",
      excerpt:
        language === "en"
          ? "Thanks to generous donors, we received new Braille machines and educational materials to enhance our students' learning experience."
          : "தாராள நன்கொடையாளர்களுக்கு நன்றி, எங்கள் மாணவர்களின் கற்றல் அனுபவத்தை மேம்படுத்த புதிய பிரெய்லி இயந்திரங்கள் மற்றும் கல்விப் பொருட்களைப் பெற்றோம்.",
    },
    {
      date: "1st November 2024",
      title: language === "en" ? "Vocational Training Program Launch" : "தொழிற்பயிற்சி திட்டம் தொடக்கம்",
      excerpt:
        language === "en"
          ? "We launched a new vocational training program to help our residents develop skills for independent living and employment opportunities."
          : "சுதந்திரமான வாழ்க்கை மற்றும் வேலை வாய்ப்புகளுக்கான திறன்களை வளர்த்துக் கொள்ள உதவுவதற்காக புதிய தொழிற்பயிற்சி திட்டத்தைத் தொடங்கினோம்.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              {language === "en" ? "Vaazhvaham – Home for the visually handicapped" : "வாழ்வஹம் – பார்வையற்றோருக்கான இல்லம்"}
            </h1>
            <p className="mb-4 text-lg text-muted-foreground leading-relaxed md:text-xl">
              {language === "en"
                ? "Empowering lives through education, care, and compassion since 1988"
                : "1988 முதல் கல்வி, பராமரிப்பு மற்றும் இரக்கத்தின் மூலம் வாழ்க்கையை மேம்படுத்துதல்"}
            </p>
            <p className="mb-8 text-base italic text-muted-foreground md:text-lg">
              {language === "en"
                ? '"Building a brighter future for the visually impaired, one life at a time"'
                : '"பார்வையற்றோருக்கு ஒரு பிரகாசமான எதிர்காலத்தை உருவாக்குதல், ஒரு வாழ்க்கை ஒரு நேரத்தில்"'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="shadow-lg">
                <Link href="/support">
                  <Heart className="mr-2 h-5 w-5" />
                  {language === "en" ? "Give Today" : "இன்று கொடுங்கள்"}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">{language === "en" ? "Learn More" : "மேலும் அறிக"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{language === "en" ? "Education" : "கல்வி"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "Providing quality education and skill development programs tailored for visually impaired students."
                      : "பார்வையற்ற மாணவர்களுக்கு தனிப்பயனாக்கப்பட்ட தரமான கல்வி மற்றும் திறன் மேம்பாட்டு திட்டங்களை வழங்குதல்."}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>{language === "en" ? "Care" : "பராமரிப்பு"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "Offering comprehensive care, support, and a nurturing environment for all residents."
                      : "அனைத்து குடியிருப்பாளர்களுக்கும் விரிவான பராமரிப்பு, ஆதரவு மற்றும் வளர்க்கும் சூழலை வழங்குதல்."}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle>{language === "en" ? "Community" : "சமூகம்"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "Building an inclusive community where everyone is valued, respected, and empowered."
                      : "அனைவரும் மதிக்கப்பட்டு, மரியாதைக்குரியவர்களாகவும், அதிகாரமளிக்கப்பட்டவர்களாகவும் இருக்கும் ஒரு உள்ளடக்கிய சமூகத்தை உருவாக்குதல்."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Events Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Our Events" : "எங்கள் நிகழ்வுகள்"}
            </h2>
            <p className="text-muted-foreground">
              {language === "en"
                ? "Join us for our upcoming events and celebrations"
                : "எங்கள் வரவிருக்கும் நிகழ்வுகள் மற்றும் கொண்டாட்டங்களில் எங்களுடன் சேருங்கள்"}
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="transition-shadow hover:shadow-md">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="mb-2 text-sm font-medium text-primary">{event.date}</p>
                    <h3 className="text-lg font-semibold leading-relaxed">{event.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/events">{language === "en" ? "View All Events" : "அனைத்து நிகழ்வுகளையும் காண்க"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Latest News" : "சமீபத்திய செய்திகள்"}
            </h2>
            <p className="text-muted-foreground">
              {language === "en"
                ? "Stay updated with our latest activities and announcements"
                : "எங்கள் சமீபத்திய செயல்பாடுகள் மற்றும் அறிவிப்புகளுடன் புதுப்பித்த நிலையில் இருங்கள்"}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((news, index) => (
              <Card key={index} className="flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardDescription>{news.date}</CardDescription>
                  <CardTitle className="text-xl leading-relaxed">{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{news.excerpt}</p>
                  <Link href={`/news/${index + 1}`} className="text-sm font-medium text-primary hover:underline">
                    {language === "en" ? "Read more →" : "மேலும் வாசிக்க →"}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/news">{language === "en" ? "View All News" : "அனைத்து செய்திகளையும் காண்க"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {language === "en" ? "Make a Difference Today" : "இன்று ஒரு மாற்றத்தை ஏற்படுத்துங்கள்"}
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
            {language === "en"
              ? "Your support helps us provide education, care, and opportunities to those who need it most."
              : "உங்கள் ஆதரவு எங்களுக்கு மிகவும் தேவைப்படுபவர்களுக்கு கல்வி, பராமரிப்பு மற்றும் வாய்ப்புகளை வழங்க உதவுகிறது."}
          </p>
          <Button size="lg" variant="secondary" asChild className="shadow-lg">
            <Link href="/support">
              <Heart className="mr-2 h-5 w-5" />
              {language === "en" ? "Support Our Mission" : "எங்கள் பணியை ஆதரியுங்கள்"}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
