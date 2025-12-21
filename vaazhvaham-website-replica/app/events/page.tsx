"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function EventsPage() {
  const [language] = useState<"en" | "ta">("en")

  const upcomingEvents = [
    {
      id: 1,
      date: "Thu Sep 11 2025",
      time: "10:00 AM",
      title:
        language === "en"
          ? "Dr. Annaladsumy Sinnaththamby memorial day and sermon – 2025"
          : "டாக்டர் அன்னலட்சுமி சின்னத்தம்பி நினைவு நாள் மற்றும் பிரசங்கம் – 2025",
      location: language === "en" ? "Vaazhvaham Main Hall" : "வாழ்வஹம் பிரதான மண்டபம்",
      description:
        language === "en"
          ? "Annual memorial service honoring our founder's legacy with prayers, speeches, and community gathering. All are welcome to join us in remembering Dr. Annaladsumy Sinnaththamby's contributions to our community."
          : "எங்கள் நிறுவனரின் மரபை மதிக்கும் வகையில் பிரார்த்தனைகள், உரைகள் மற்றும் சமூக கூட்டத்துடன் ஆண்டு நினைவு சேவை. டாக்டர் அன்னலட்சுமி சின்னத்தம்பியின் எங்கள் சமூகத்திற்கான பங்களிப்புகளை நினைவுகூர்வதில் எங்களுடன் சேர அனைவரும் வரவேற்கப்படுகிறார்கள்.",
      category: language === "en" ? "Memorial" : "நினைவு",
    },
    {
      id: 2,
      date: "Sat Aug 15 2025",
      time: "9:00 AM",
      title: language === "en" ? "Independence Day Celebration" : "சுதந்திர தின கொண்டாட்டம்",
      location: language === "en" ? "Vaazhvaham Campus" : "வாழ்வஹம் வளாகம்",
      description:
        language === "en"
          ? "Celebrating Independence Day with flag hoisting ceremony, cultural performances, and special lunch. Join us as our students showcase their talents through music, dance, and speeches."
          : "கொடியேற்ற விழா, கலாச்சார நிகழ்ச்சிகள் மற்றும் சிறப்பு மதிய உணவுடன் சுதந்திர தினத்தைக் கொண்டாடுதல். எங்கள் மாணவர்கள் இசை, நடனம் மற்றும் உரைகள் மூலம் தங்கள் திறமைகளை வெளிப்படுத்தும் போது எங்களுடன் சேருங்கள்.",
      category: language === "en" ? "Celebration" : "கொண்டாட்டம்",
    },
    {
      id: 3,
      date: "Mon Jul 21 2025",
      time: "2:00 PM",
      title: language === "en" ? "Annual General Meeting" : "ஆண்டு பொதுக் கூட்டம்",
      location: language === "en" ? "Conference Room" : "மாநாட்டு அறை",
      description:
        language === "en"
          ? "Annual meeting to discuss the year's achievements, financial reports, and future plans. Open to all board members, staff, supporters, and community members."
          : "ஆண்டின் சாதனைகள், நிதி அறிக்கைகள் மற்றும் எதிர்கால திட்டங்களைப் பற்றி விவாதிக்க ஆண்டு கூட்டம். அனைத்து குழு உறுப்பினர்கள், ஊழியர்கள், ஆதரவாளர்கள் மற்றும் சமூக உறுப்பினர்களுக்கு திறந்திருக்கும்.",
      category: language === "en" ? "Administrative" : "நிர்வாகம்",
    },
    {
      id: 4,
      date: "Fri Jun 27 2025",
      time: "11:00 AM",
      title: language === "en" ? "Vocational Training Graduation Ceremony" : "தொழிற்பயிற்சி பட்டமளிப்பு விழா",
      location: language === "en" ? "Vaazhvaham Main Hall" : "வாழ்வஹம் பிரதான மண்டபம்",
      description:
        language === "en"
          ? "Celebrating the completion of our vocational training programs. Students will receive certificates in various skills including computer training, massage therapy, and handicrafts."
          : "எங்கள் தொழிற்பயிற்சி திட்டங்களின் நிறைவைக் கொண்டாடுதல். மாணவர்கள் கணினி பயிற்சி, மசாஜ் சிகிச்சை மற்றும் கைவினைப் பொருட்கள் உள்ளிட்ட பல்வேறு திறன்களில் சான்றிதழ்களைப் பெறுவார்கள்.",
      category: language === "en" ? "Ceremony" : "விழா",
    },
    {
      id: 5,
      date: "Wed May 14 2025",
      time: "3:00 PM",
      title: language === "en" ? "Community Sports Day" : "சமூக விளையாட்டு நாள்",
      location: language === "en" ? "Sports Ground" : "விளையாட்டு மைதானம்",
      description:
        language === "en"
          ? "A day of adaptive sports and recreational activities for our residents and community members. Includes goalball, track events, and team games designed for visually impaired participants."
          : "எங்கள் குடியிருப்பாளர்கள் மற்றும் சமூக உறுப்பினர்களுக்கான தகவமைப்பு விளையாட்டுகள் மற்றும் பொழுதுபோக்கு நடவடிக்கைகளின் நாள். பார்வையற்ற பங்கேற்பாளர்களுக்காக வடிவமைக்கப்பட்ட கோல்பால், தடகள நிகழ்வுகள் மற்றும் குழு விளையாட்டுகள் அடங்கும்.",
      category: language === "en" ? "Sports" : "விளையாட்டு",
    },
    {
      id: 6,
      date: "Sat Apr 26 2025",
      time: "10:00 AM",
      title: language === "en" ? "Spring Festival & Cultural Program" : "வசந்த திருவிழா & கலாச்சார நிகழ்ச்சி",
      location: language === "en" ? "Outdoor Stage" : "வெளிப்புற மேடை",
      description:
        language === "en"
          ? "Celebrating spring with music performances, traditional dances, poetry recitals, and a special feast. Showcasing the talents of our residents and guest artists."
          : "இசை நிகழ்ச்சிகள், பாரம்பரிய நடனங்கள், கவிதை வாசிப்புகள் மற்றும் சிறப்பு விருந்துடன் வசந்த காலத்தைக் கொண்டாடுதல். எங்கள் குடியிருப்பாளர்கள் மற்றும் விருந்தினர் கலைஞர்களின் திறமைகளை வெளிப்படுத்துதல்.",
      category: language === "en" ? "Cultural" : "கலாச்சாரம்",
    },
  ]

  const pastEvents = [
    {
      id: 7,
      date: "4th January 2025",
      title: language === "en" ? "International Braille Day Celebration" : "சர்வதேச பிரெய்லி தினக் கொண்டாட்டம்",
      description:
        language === "en"
          ? "We celebrated International Braille Day with workshops on Braille literacy and educational materials distribution."
          : "பிரெய்லி கல்வியறிவு பட்டறைகள் மற்றும் கல்விப் பொருட்கள் விநியோகத்துடன் சர்வதேச பிரெய்லி தினத்தைக் கொண்டாடினோம்.",
    },
    {
      id: 8,
      date: "25th December 2024",
      title: language === "en" ? "Christmas Celebration" : "கிறிஸ்துமஸ் கொண்டாட்டம்",
      description:
        language === "en"
          ? "Community Christmas celebration with carols, gifts, and a festive meal for all residents."
          : "அனைத்து குடியிருப்பாளர்களுக்கும் கீதங்கள், பரிசுகள் மற்றும் விருந்து உணவுடன் சமூக கிறிஸ்துமஸ் கொண்டாட்டம்.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Events" : "நிகழ்வுகள்"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Join us for our upcoming events and celebrations"
                : "எங்கள் வரவிருக்கும் நிகழ்வுகள் மற்றும் கொண்டாட்டங்களில் எங்களுடன் சேருங்கள்"}
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {language === "en" ? "Upcoming Events" : "வரவிருக்கும் நிகழ்வுகள்"}
          </h2>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {event.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-relaxed">{event.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {language === "en" ? "Past Events" : "கடந்த நிகழ்வுகள்"}
          </h2>

          <div className="mx-auto max-w-4xl space-y-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-2 text-sm font-medium text-muted-foreground">{event.date}</p>
                      <h3 className="mb-2 text-lg font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            {language === "en" ? "Want to Attend Our Events?" : "எங்கள் நிகழ்வுகளில் கலந்து கொள்ள விரும்புகிறீர்களா?"}
          </h2>
          <p className="mb-8 text-muted-foreground">
            {language === "en"
              ? "Contact us for more information about upcoming events and how to participate"
              : "வரவிருக்கும் நிகழ்வுகள் மற்றும் பங்கேற்பது எப்படி என்பது பற்றிய கூடுதல் தகவலுக்கு எங்களை தொடர்பு கொள்ளுங்கள்"}
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">{language === "en" ? "Contact Us" : "தொடர்பு கொள்ளுங்கள்"}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
