"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Heart, BookOpen, Users, Clock, MapPin } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [language] = useState<"en" | "ta">("en")

  const upcomingEvents = [
    {
      date: "Thu Sep 11 2025",
      time: "10:00 AM",
      title:
        language === "en"
          ? "Dr. Annaladsumy Sinnaththamby memorial day and sermon – 2025"
          : "டாக்டர் அன்னலட்சுமி சின்னத்தம்பி நினைவு நாள் மற்றும் பிரசங்கம் – 2025",
      location: language === "en" ? "Vaazhvaham Main Hall" : "வாழ்வஹம் பிரதான மண்டபம்",
    },
    {
      date: "Sat Aug 15 2025",
      time: "9:00 AM",
      title: language === "en" ? "Independence Day Celebration" : "சுதந்திர தின கொண்டாட்டம்",
      location: language === "en" ? "Vaazhvaham Campus" : "வாழ்வஹம் வளாகம்",
    },
    {
      date: "Mon Jul 21 2025",
      time: "2:00 PM",
      title: language === "en" ? "Annual General Meeting" : "ஆண்டு பொதுக் கூட்டம்",
      location: language === "en" ? "Conference Room" : "மாநாட்டு அறை",
    },
    {
      date: "Fri Jun 27 2025",
      time: "11:00 AM",
      title: language === "en" ? "Vocational Training Graduation Ceremony" : "தொழிற்பயிற்சி பட்டமளிப்பு விழா",
      location: language === "en" ? "Vaazhvaham Main Hall" : "வாழ்வஹம் பிரதான மண்டபம்",
    },
    {
      date: "Wed May 14 2025",
      time: "3:00 PM",
      title: language === "en" ? "Community Sports Day" : "சமூக விளையாட்டு நாள்",
      location: language === "en" ? "Sports Ground" : "விளையாட்டு மைதானம்",
    },
    {
      date: "Sat Apr 26 2025",
      time: "10:00 AM",
      title: language === "en" ? "Spring Festival & Cultural Program" : "வசந்த திருவிழா & கலாச்சார நிகழ்ச்சி",
      location: language === "en" ? "Outdoor Stage" : "வெளிப்புற மேடை",
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

      {/* Our Mission and Vision Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Our Mission */}
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10">
              <h2 className="mb-5 text-2xl md:text-3xl font-bold text-[#1e3a8a] text-center">
                {language === "en" ? "OUR MISSION" : "எங்கள் நோக்கம்"}
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                {language === "en"
                  ? "To prepare the visually handicapped to pave the way for living with good qualities using available resources to have equal opportunities and rights like others have by getting purity of mind and realizing themselves completely through education."
                  : "கல்வியின் மூலம் மனத்தூய்மையைப் பெறுவதன் மூலமும், தங்களை முழுமையாக உணர்ந்து கொள்வதன் மூலமும், இருக்கும் வளங்களைப் பயன்படுத்தி நல்ல பண்புகளுடன் வாழ்வதற்கான வழியைத் திறக்க பார்வையற்றோரைத் தயார்படுத்துவது."}
              </p>
            </div>

            {/* Motto with Image */}
            <div 
              className="relative bg-cover bg-center rounded-lg shadow-md p-8 md:p-10 flex items-center justify-center min-h-[250px]"
              style={{
                backgroundImage: "url('/motto-bg.jpg')",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 text-white text-center">
                <h2 className="mb-4 text-3xl md:text-4xl font-bold drop-shadow-lg">
                  {language === "en" ? "Motto" : "குறிக்கோள்"}
                </h2>
                <p className="text-lg md:text-xl font-medium drop-shadow-lg">
                  {language === "en" 
                    ? "Education is light. Education is path."
                    : "கல்வி ஒளி. கல்வி பாதை."}
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-[#1e3a8a] rounded-lg shadow-md p-8 md:p-10 text-white">
              <h2 className="mb-5 text-2xl md:text-3xl font-bold text-center">
                {language === "en" ? "OUR VISION" : "எங்கள் தொலைநோக்கு"}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-justify">
                {language === "en"
                  ? "To empower the visually handicapped to develop the potential balanced personality with knowledge and efficiency for facing the challenging life through Education."
                  : "கல்வியின் மூலம் சவாலான வாழ்க்கையை எதிர்கொள்ள அறிவு மற்றும் திறமையுடன் சமநிலையான ஆளுமையை வளர்த்துக் கொள்ள பார்வையற்றோரை மேம்படுத்துவது."}
              </p>
            </div>

            {/* Contacts */}
            <div className="bg-white rounded-lg shadow-md p-8 md:p-10 flex flex-col items-center justify-center">
              <h2 className="mb-5 text-2xl md:text-3xl font-bold text-[#1e3a8a] text-center">
                {language === "en" ? "Contacts" : "தொடர்புகள்"}
              </h2>
              <div className="space-y-3 text-center">
                <p className="text-sm md:text-base text-gray-800">
                  <span className="font-semibold">E-mail :</span>{" "}
                  <a href="mailto:vaazhvaham1988@gmail.com" className="text-[#1e3a8a] hover:underline">
                    vaazhvaham1988@gmail.com
                  </a>
                </p>
                <p className="text-sm md:text-base text-gray-800">
                  <span className="font-semibold">Call To :</span>{" "}
                  <a href="tel:021-224-0146" className="text-[#1e3a8a] hover:underline">
                    021-224-0146
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Events Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Upcoming Events" : "வரவிருக்கும் நிகழ்வுகள்"}
            </h2>
            <p className="text-muted-foreground">
              {language === "en"
                ? "Join us for our upcoming events and celebrations"
                : "எங்கள் வரவிருக்கும் நிகழ்வுகள் மற்றும் கொண்டாட்டங்களில் எங்களுடன் சேருங்கள்"}
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-lg bg-white shadow-lg" style={{ height: '500px' }}>
              <style jsx>{`
                @keyframes scrollUp {
                  0% {
                    transform: translateY(0);
                  }
                  100% {
                    transform: translateY(-50%);
                  }
                }
                .animate-scroll {
                  animation: scrollUp 30s linear infinite;
                }
                .animate-scroll:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="animate-scroll">
                {/* Duplicate events for seamless loop */}
                {[...upcomingEvents, ...upcomingEvents].map((event, index) => (
                  <Card key={index} className="m-4 transition-all hover:shadow-xl border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Calendar className="h-7 w-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="mb-2 text-sm font-semibold text-primary">{event.date}</p>
                          <h3 className="text-lg font-bold leading-snug mb-2">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="default" size="lg" asChild>
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
