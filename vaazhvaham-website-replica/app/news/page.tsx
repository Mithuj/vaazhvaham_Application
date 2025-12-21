"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function NewsPage() {
  const [language] = useState<"en" | "ta">("en")

  const newsItems = [
    {
      id: 1,
      date: "4th January 2025",
      title: language === "en" ? "International Braille Day celebration" : "சர்வதேச பிரெய்லி தினக் கொண்டாட்டம்",
      category: language === "en" ? "Event" : "நிகழ்வு",
      excerpt:
        language === "en"
          ? "We celebrated International Braille Day with our students and staff, highlighting the importance of accessible reading materials for the visually impaired community. The event featured workshops on Braille literacy, demonstrations of Braille writing techniques, and distribution of new Braille educational materials to our students."
          : "பார்வையற்றோர் சமூகத்திற்கான அணுகக்கூடிய வாசிப்புப் பொருட்களின் முக்கியத்துவத்தை எடுத்துக்காட்டி, எங்கள் மாணவர்கள் மற்றும் ஊழியர்களுடன் சர்வதேச பிரெய்லி தினத்தைக் கொண்டாடினோம். நிகழ்வில் பிரெய்லி கல்வியறிவு பட்டறைகள், பிரெய்லி எழுதும் நுட்பங்களின் ஆர்ப்பாட்டங்கள் மற்றும் எங்கள் மாணவர்களுக்கு புதிய பிரெய்லி கல்விப் பொருட்கள் விநியோகம் ஆகியவை இடம்பெற்றன.",
      image: "/braille-day-celebration.jpg",
    },
    {
      id: 2,
      date: "15th December 2024",
      title: language === "en" ? "New Braille Equipment Donation" : "புதிய பிரெய்லி உபகரண நன்கொடை",
      category: language === "en" ? "Donation" : "நன்கொடை",
      excerpt:
        language === "en"
          ? "Thanks to generous donors, we received new Braille machines and educational materials to enhance our students' learning experience. This donation includes 5 new Braille typewriters, tactile learning aids, and audio books that will significantly improve our educational programs and provide better resources for our residents."
          : "தாராள நன்கொடையாளர்களுக்கு நன்றி, எங்கள் மாணவர்களின் கற்றல் அனுபவத்தை மேம்படுத்த புதிய பிரெய்லி இயந்திரங்கள் மற்றும் கல்விப் பொருட்களைப் பெற்றோம். இந்த நன்கொடையில் 5 புதிய பிரெய்லி தட்டச்சுப்பொறிகள், தொடு கற்றல் உதவிகள் மற்றும் ஆடியோ புத்தகங்கள் அடங்கும், இவை எங்கள் கல்வித் திட்டங்களை கணிசமாக மேம்படுத்தும் மற்றும் எங்கள் குடியிருப்பாளர்களுக்கு சிறந்த ஆதாரங்களை வழங்கும்.",
      image: "/braille-equipment-donation.jpg",
    },
    {
      id: 3,
      date: "1st November 2024",
      title: language === "en" ? "Vocational Training Program Launch" : "தொழிற்பயிற்சி திட்டம் தொடக்கம்",
      category: language === "en" ? "Program" : "திட்டம்",
      excerpt:
        language === "en"
          ? "We launched a new vocational training program to help our residents develop skills for independent living and employment opportunities. The program includes computer training, massage therapy, handicraft making, and customer service skills. This initiative aims to empower our residents with marketable skills that can help them achieve financial independence."
          : "சுதந்திரமான வாழ்க்கை மற்றும் வேலை வாய்ப்புகளுக்கான திறன்களை வளர்த்துக் கொள்ள உதவுவதற்காக புதிய தொழிற்பயிற்சி திட்டத்தைத் தொடங்கினோம். திட்டத்தில் கணினி பயிற்சி, மசாஜ் சிகிச்சை, கைவினைப் பொருட்கள் தயாரித்தல் மற்றும் வாடிக்கையாளர் சேவை திறன்கள் அடங்கும். இந்த முன்முயற்சி எங்கள் குடியிருப்பாளர்களுக்கு நிதி சுதந்திரத்தை அடைய உதவும் சந்தைப்படுத்தக்கூடிய திறன்களுடன் அதிகாரமளிக்க நோக்கமாகும்.",
      image: "/vocational-training-launch.jpg",
    },
    {
      id: 4,
      date: "20th October 2024",
      title: language === "en" ? "Community Partnership Announcement" : "சமூக கூட்டாண்மை அறிவிப்பு",
      category: language === "en" ? "Partnership" : "கூட்டாண்மை",
      excerpt:
        language === "en"
          ? "We are pleased to announce a new partnership with local businesses to provide employment opportunities for our graduates. This collaboration will create pathways for our residents to secure meaningful employment in various sectors including customer service, data entry, and massage therapy. Several of our graduates have already secured positions through this initiative."
          : "எங்கள் பட்டதாரிகளுக்கு வேலை வாய்ப்புகளை வழங்க உள்ளூர் வணிகங்களுடன் ஒரு புதிய கூட்டாண்மையை அறிவிப்பதில் மகிழ்ச்சி அடைகிறோம். இந்த ஒத்துழைப்பு வாடிக்கையாளர் சேவை, தரவு உள்ளீடு மற்றும் மசாஜ் சிகிச்சை உள்ளிட்ட பல்வேறு துறைகளில் அர்த்தமுள்ள வேலைவாய்ப்பைப் பெற எங்கள் குடியிருப்பாளர்களுக்கு பாதைகளை உருவாக்கும். எங்கள் பட்டதாரிகளில் பலர் ஏற்கனவே இந்த முன்முயற்சியின் மூலம் பதவிகளைப் பெற்றுள்ளனர்.",
      image: "/community-partnership.jpg",
    },
    {
      id: 5,
      date: "5th September 2024",
      title: language === "en" ? "Annual Sports Day Success" : "ஆண்டு விளையாட்டு நாள் வெற்றி",
      category: language === "en" ? "Event" : "நிகழ்வு",
      excerpt:
        language === "en"
          ? "Our annual sports day was a tremendous success with participants from neighboring institutions joining us for adaptive sports competitions. Events included goalball, track races, and team relay races. The event promoted physical fitness, teamwork, and social interaction among participants. We are grateful to all volunteers and sponsors who made this event possible."
          : "தகவமைப்பு விளையாட்டு போட்டிகளுக்காக அண்டை நிறுவனங்களிலிருந்து பங்கேற்பாளர்கள் எங்களுடன் சேர்ந்து எங்கள் ஆண்டு விளையாட்டு நாள் மிகப்பெரிய வெற்றியாக இருந்தது. நிகழ்வுகளில் கோல்பால், தடகள ஓட்டங்கள் மற்றும் குழு தொடர் ஓட்டங்கள் அடங்கும். நிகழ்வு பங்கேற்பாளர்களிடையே உடல் தகுதி, குழுப்பணி மற்றும் சமூக தொடர்பை ஊக்குவித்தது. இந்த நிகழ்வை சாத்தியமாக்கிய அனைத்து தன்னார்வலர்கள் மற்றும் ஆதரவாளர்களுக்கு நாங்கள் நன்றியுள்ளவர்களாக இருக்கிறோம்.",
      image: "/sports-day-success.jpg",
    },
    {
      id: 6,
      date: "15th August 2024",
      title: language === "en" ? "Independence Day Celebration" : "சுதந்திர தினக் கொண்டாட்டம்",
      category: language === "en" ? "Event" : "நிகழ்வு",
      excerpt:
        language === "en"
          ? "We celebrated Independence Day with flag hoisting, patriotic songs, and cultural performances by our talented students. The event was attended by local dignitaries, community members, and well-wishers. Students presented speeches about the importance of freedom and independence, making it a memorable celebration for all."
          : "கொடியேற்றம், தேசபக்தி பாடல்கள் மற்றும் எங்கள் திறமையான மாணவர்களின் கலாச்சார நிகழ்ச்சிகளுடன் சுதந்திர தினத்தைக் கொண்டாடினோம். நிகழ்வில் உள்ளூர் பிரமுகர்கள், சமூக உறுப்பினர்கள் மற்றும் நல்லெண்ணம் கொண்டவர்கள் கலந்துகொண்டனர். சுதந்திரம் மற்றும் விடுதலையின் முக்கியத்துவம் பற்றி மாணவர்கள் உரைகளை வழங்கினர், இது அனைவருக்கும் மறக்க முடியாத கொண்டாட்டமாக மாறியது.",
      image: "/independence-day-celebration.jpg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "News" : "செய்திகள்"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Stay updated with our latest activities and announcements"
                : "எங்கள் சமீபத்திய செயல்பாடுகள் மற்றும் அறிவிப்புகளுடன் புதுப்பித்த நிலையில் இருங்கள்"}
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((news) => (
              <Card key={news.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-md">
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <img src={news.image || "/placeholder.svg"} alt={news.title} className="h-full w-full object-cover" />
                </div>
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary">{news.category}</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                  </CardDescription>
                  <CardTitle className="text-xl leading-relaxed">{news.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{news.excerpt}</p>
                  <Link href={`/news/${news.id}`} className="text-sm font-medium text-primary hover:underline">
                    {language === "en" ? "Read more →" : "மேலும் வாசிக்க →"}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
