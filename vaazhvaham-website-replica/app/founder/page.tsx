"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, BookOpen } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function FounderPage() {
  const [language] = useState<"en" | "ta">("en")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Our Founder" : "எங்கள் நிறுவனர்"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "A visionary leader whose compassion changed countless lives"
                : "எண்ணற்ற வாழ்க்கைகளை மாற்றிய இரக்கமுள்ள தொலைநோக்கு தலைவர்"}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Image and Name Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl">
                <img 
                  src="/fnd.png" 
                  alt="Dr.Annaluxmi Sinnathambi" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">
              Dr.Annaluxmi Sinnathambi
            </h2>

            {/* Few memories section */}
            <div className="text-left">
              <h3 className="mb-8 text-2xl md:text-3xl font-bold text-center">
                {language === "en" ? "Few memories of the founder" : "நிறுவனரின் சில நினைவுகள்"}
              </h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  "Late Dr.Annaluxmi Sinnathambi Amma is a person who led a life for the sake of others, not for herself" Every moment thousands of people are born and pass away in this world. But it is a rarity to see people who dedicate themselves for the sake of other by enriching others' lives by being the medicines themselves. Among them Annaluxmy Sinnathamby is one of them who had been living with us till 11.09.2006 and have been living in our hearts forever. She dedicated herself towards making the visually handicapped children equal to everyone in the world and found successful when they were left in the lurch without knowing how to survive in this world.
                </p>
                
                <p>
                  The educational activities performed by her as a sole individual are beyond expression. If we happen to delete her name form the 'history of education for the Tamil speaking Sri Lankans' we may visualize a huge vacuum. Those who love humanitarian service, those who think and speak about humanity should know about this Amma and her humane services to a certain extent. She was born in the beautiful village called Maviddapuram in the Northern part of Jaffna as the 7th child of Mr.Sinnathamby and Mrs.Thaiyalpillai on the 1st January, 1937. Parents proudly named this beautiful child as Annaluxmi. As the youngest in the family, she was petted well. She led a happy life by being the youngest sister for the three brothers, Rasaiah, Singaraja and Kanthaiah and the three sisters Rasamma, Thangaratnam and Annamuthu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
