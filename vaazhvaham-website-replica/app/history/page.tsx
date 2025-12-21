"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Building, Users } from "lucide-react"
import { useState } from "react"

export default function HistoryPage() {
  const [language] = useState<"en" | "ta">("en")

  const milestones = [
    {
      year: "1988",
      title: language === "en" ? "Foundation" : "நிறுவனம்",
      description:
        language === "en"
          ? "Vaazhvaham was founded by Miss A. Sinnaththamby at Tellippalai with a vision to provide care and education for the visually handicapped."
          : "பார்வையற்றோருக்கு பராமரிப்பு மற்றும் கல்வியை வழங்கும் நோக்கில் திருமதி ஏ. சின்னத்தம்பியால் தெல்லிப்பள்ளையில் வாழ்வஹம் நிறுவப்பட்டது.",
      icon: Building,
    },
    {
      year: "1995",
      title: language === "en" ? "Expansion" : "விரிவாக்கம்",
      description:
        language === "en"
          ? "Expanded facilities to accommodate more residents and introduced vocational training programs."
          : "அதிக குடியிருப்பாளர்களை தங்க வைக்க வசதிகள் விரிவாக்கப்பட்டு தொழிற்பயிற்சி திட்டங்கள் அறிமுகப்படுத்தப்பட்டன.",
      icon: Users,
    },
    {
      year: "2005",
      title: language === "en" ? "Recognition" : "அங்கீகாரம்",
      description:
        language === "en"
          ? "Received regional and national recognition for outstanding work in special education and rehabilitation."
          : "சிறப்புக் கல்வி மற்றும் மறுவாழ்வில் சிறந்த பணிக்காக பிராந்திய மற்றும் தேசிய அங்கீகாரம் பெற்றது.",
      icon: Award,
    },
    {
      year: "2018",
      title: language === "en" ? "Modern Equipment" : "நவீன உபகரணங்கள்",
      description:
        language === "en"
          ? "Received donations of Braille machines and modern educational technology to enhance learning experiences."
          : "கற்றல் அனுபவங்களை மேம்படுத்த பிரெய்லி இயந்திரங்கள் மற்றும் நவீன கல்வி தொழில்நுட்பத்தின் நன்கொடைகள் பெறப்பட்டன.",
      icon: Calendar,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Our History" : "எங்கள் வரலாறு"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Over three decades of dedicated service to the visually impaired community"
                : "பார்வையற்றோர் சமூகத்திற்கு மூன்று தசாப்தங்களுக்கும் மேலான அர்ப்பணிப்பு சேவை"}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
                {language === "en" ? "Our Journey" : "எங்கள் பயணம்"}
              </h2>
              <p className="text-center text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Founded in 1988 at Tellippalai, Vaazhvaham has grown from a small home into a comprehensive center for education, care, and empowerment of the visually handicapped."
                  : "1988 இல் தெல்லிப்பள்ளையில் நிறுவப்பட்ட வாழ்வஹம், ஒரு சிறிய இல்லத்திலிருந்து பார்வையற்றோருக்கான கல்வி, பராமரிப்பு மற்றும் அதிகாரமளிப்புக்கான ஒரு விரிவான மையமாக வளர்ந்துள்ளது."}
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon
                return (
                  <Card key={index} className="overflow-hidden transition-shadow hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="flex items-center justify-center bg-primary/5 p-8 md:w-48">
                          <div className="text-center">
                            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                              <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <p className="text-2xl font-bold text-primary">{milestone.year}</p>
                          </div>
                        </div>
                        <div className="flex-1 p-6">
                          <h3 className="mb-3 text-xl font-semibold">{milestone.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Vaazhvaham Today" : "இன்று வாழ்வஹம்"}
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Today, Vaazhvaham stands as a beacon of hope and opportunity for the visually impaired community. Located in Chunnakam, our facility continues to be managed by Mr. A. Raveendran, who carries forward the vision of our founder, Miss A. Sinnaththamby."
                  : "இன்று, வாழ்வஹம் பார்வையற்றோர் சமூகத்திற்கு நம்பிக்கை மற்றும் வாய்ப்புகளின் ஒளிவிளக்காக நிற்கிறது. சுன்னாகத்தில் அமைந்துள்ள எங்கள் வசதி திரு. ஏ. ரவீந்திரனால் நிர்வகிக்கப்படுகிறது, அவர் எங்கள் நிறுவனர் திருமதி ஏ. சின்னத்தம்பியின் பார்வையை முன்னெடுத்துச் செல்கிறார்."}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We serve dozens of residents annually, providing them with quality education from primary through higher secondary levels, vocational training in multiple disciplines, comprehensive healthcare, and a supportive community environment. Our graduates have gone on to pursue higher education, secure employment, and lead independent lives."
                  : "நாங்கள் ஆண்டுதோறும் டஜன் கணக்கான குடியிருப்பாளர்களுக்கு சேவை செய்கிறோம், அவர்களுக்கு முதன்மை முதல் உயர் நிலை வரை தரமான கல்வி, பல துறைகளில் தொழிற்பயிற்சி, விரிவான சுகாதாரம் மற்றும் ஆதரவான சமூக சூழலை வழங்குகிறோம். எங்கள் பட்டதாரிகள் உயர் கல்வியைத் தொடரவும், வேலைவாய்ப்பைப் பெறவும், சுதந்திரமான வாழ்க்கையை நடத்தவும் சென்றுள்ளனர்."}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Through the generous support of donors, volunteers, and community partners, we continue to expand our services and reach more individuals in need. Our commitment remains unwavering: to provide every visually impaired person with the tools, education, and support they need to live with dignity and independence."
                  : "நன்கொடையாளர்கள், தன்னார்வலர்கள் மற்றும் சமூக பங்குதாரர்களின் தாராளமான ஆதரவின் மூலம், நாங்கள் எங்கள் சேவைகளை விரிவுபடுத்தி மேலும் தேவைப்படும் தனிநபர்களை சென்றடைகிறோம். எங்கள் அர்ப்பணிப்பு அசைக்க முடியாததாக உள்ளது: ஒவ்வொரு பார்வையற்ற நபருக்கும் கண்ணியத்துடனும் சுதந்திரத்துடனும் வாழ தேவையான கருவிகள், கல்வி மற்றும் ஆதரவை வழங்குவது."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
