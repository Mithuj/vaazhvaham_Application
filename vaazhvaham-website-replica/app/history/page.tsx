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

      {/* History Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-10">
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Eyesight loss or damage can happen to a person due to various reasons. It is completely wrong to assume that if a person loses his eyesight, his life is over. It has been proved today that even the blind can live happily and with honor in this world. We must always remember that education is vital to their well-being. Loss of eyes can only be compensated by education.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  However, even today, there are still many visually impaired children living in our society who do not have access to education. Most of these parents have no or very little awareness of How to lead these children and how to educate them. In this case, Vaazhvaham was established to find such children and make them honorable and useful citizens by providing them with suitable educational opportunities and other opportunities.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">Dr. Annaluxmi Sinnathamby</span>, an incomparable teacher who played a vital role in the educational development of the Tamil-speaking visually impaired children of Sri Lanka, came into existence on <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">29.06.1988</span> in Thellipalai.
                </p>
              </div>

              {/* Images */}
              <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/2.jpg" 
                    alt="Vaazhvaham History" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img 
                    src="/fd658.jpg" 
                    alt="Dr. Annaluxmi Sinnathamby" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  The establishment work began with thirteen children in a rented house near the Thellipalay Kasi Vinayagar Temple. However, due to the war situation of that time, Vaazhvaham had to be shifted from there in 1990. Again in 1992, a rented house was obtained in the Malvam area of ​​Uduvil and the establishment work continued there.
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  However, in 1995 again had to meet another massive displacement. There were also huge material losses. Dr. Annaladsumy Sinnathamby the leader and founder of Vaazhvaham, was not disheartened by these displacements. With the help of the Manipai Sathyasai Samiti, a house was rented in Manipai and in 1997 the work of Vaazhvaham was resumed there. Meanwhile, Chenchotselvar Dr.Aru.Thirumurugan's efforts, a sum of money was received from the Tamil Orphans' Trust fund in London to purchase a plot of land for vaazhvaham. As a result, the vaazhvaham was established in 2003 at its present residence.
                </p>
              </div>

              {/* Single Image */}
              <div className="overflow-hidden rounded-lg shadow-md max-w-3xl mx-auto">
                <img 
                  src="/1.jpg" 
                  alt="Vaazhvaham Current Building" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
