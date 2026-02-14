"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Users, BookOpen } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function FounderPage() {
  const [language, setLanguage] = useState<"en" | "ta">("en")

  // Get language from sessionStorage
  useEffect(() => {
    const storedLanguage = sessionStorage.getItem('language')
    if (storedLanguage === 'ta' || storedLanguage === 'en') {
      setLanguage(storedLanguage)
    }

    // Listen for language changes
    const handleStorageChange = () => {
      const updatedLanguage = sessionStorage.getItem('language')
      if (updatedLanguage === 'ta' || updatedLanguage === 'en') {
        setLanguage(updatedLanguage)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1E3A8A' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-white">
              {language === "en" ? "Our Founder" : "எமது நிறுவுனர்"}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              {language === "en"
                ? "A visionary leader whose compassion changed countless lives"
                : "தொலைநோக்கு தலைவர்"}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Image and Name Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl text-center">
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
              {language === "en" ? "Dr.Annaluxmi Sinnathambi" : "கலாநிதி அன்னலட்சுமி சின்னத்தம்பி"}
            </h2>

            {/* Few memories section */}
            <div className="text-left">
              <h3 className="mb-8 text-2xl md:text-3xl font-bold text-center">
                {language === "en" ? "Few memories of the founder" : "தீபமாய் தெய்வமாய்"}
              </h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p className="text-justify">
                  {language === "en"
                    ? `"Late Dr.Annaluxmi Sinnathambi Amma is a person who led a life for the sake of others, not for herself" Every moment thousands of people are born and pass away in this world. But it is a rarity to see people who dedicate themselves for the sake of other by enriching others' lives by being the medicines themselves. Among them Annaluxmy Sinnathamby is one of them who had been living with us till 11.09.2006 and have been living in our hearts forever. She dedicated herself towards making the visually handicapped children equal to everyone in the world and found successful when they were left in the lurch without knowing how to survive in this world.`
                    : `நமது ஈழமணித் திருநாட்டின் விசேட கல்வி வரலாற்றில் செல்வி. அன்னலட்சுமி சின்னத்தம்பி என்ற நாமம் எப்போதும் தனித்துவமாய் மிளிர்ந்து கொண்டிருக்கும் 'எங்கள் கண்களில் ஒளியில்லையே' 'இந்த ஒளியற்ற கண்களால் இந்தப் பரந்த உலகை நாம் எப்படித் தரிசிக்க முடியும்? களிப்புடன் எப்படி வாழ முடியும்?' என்று கலங்கிக் கண்ணீர் வடித்து நின்ற பிள்ளைகளின் கரங்களைக் கருணையோடு பற்றி, கல்வி வெளிச்சத்தின் முன் அழைத்து வந்தவர் இந்த அன்னை மருத்துவ விஞ்ஞானத்தால் உங்கள் கண்களைப் பெற்றுத்தர முடியாது போகலாம். ஆனால், கல்வி என்னும் ஒப்பிலாக் கண்களை வழங்க என்னால் முடியும். அதன் துணையோடு நீங்களும் இந்தக் காசினியில் களிப்போடு வாழமுடியும் என்று தன்னம்பிக்கையோடு உரைத்தார் இந்தத் தாய். வெறும் வார்த்தையோடு மட்டும் நின்றுவிடாமல், தன் பணிவாழ்வின் மூலம் அதைச் சாதித்தும் காட்டினார்.`}
                </p>
                
                <p className="text-justify">
                  {language === "en"
                    ? `The educational activities performed by her as a sole individual are beyond expression. If we happen to delete her name form the 'history of education for the Tamil speaking Sri Lankans' we may visualize a huge vacuum. Those who love humanitarian service, those who think and speak about humanity should know about this Amma and her humane services to a certain extent. She was born in the beautiful village called Maviddapuram in the Northern part of Jaffna as the 7th child of Mr.Sinnathamby and Mrs.Thaiyalpillai on the 1st January, 1937. Parents proudly named this beautiful child as Annaluxmi. As the youngest in the family, she was petted well. She led a happy life by being the youngest sister for the three brothers, Rasaiah, Singaraja and Kanthaiah and the three sisters Rasamma, Thangaratnam and Annamuthu.`
                    : `1972ல் இலங்கை ஒன்றிணைக்கப்பட்ட கல்வித் திட்டத்தின் கீழ் ஒரு விசேட ஆசிரியையாய் இணைந்துகொண்ட இவர் விழிப்புல வலுவிழந்த பல பிள்ளைகளை வெற்றிகரமாய்க் கல்வி நீரோட்டத்தில் இணைய வைத்தார். தன் பணி ஓய்வுக்குப் பின்னரும் தான் வரித்துக்கொண்ட இந்தச் சீரிய பணியை மேலும் வலுவுடன் முன்னெடுக்கவேண்டும் என்னும் நோக்கோடு 29.06.1988 ல் வாழ்வக நிறுவனத்தை உருவாக்கினார்.

தன் இறுதி மூச்சுள்ளவரை விழிப்புல வலுவிழந்த பிள்ளைகளின் நல்வாழ்வுக்காகப் பலவாறு சிந்தித்து அயராது செயற்பட்ட செல்வி அன்னலட்சுமி சின்னத்தம்பி அம்மையார் 11.09.2006 இறையடி எய்தினார். தான் வாழும் காலத்தில் எந்தவிதப் பெயரையோ புகழையோ விரும்பாத இந்த அன்னைக்கு, 2010 ஆம் ஆண்டு தேகாந்த நிலையில் கௌரவ கலாநிதிப் பட்டம் வழங்கியதன் மூலம் யாழ்ப்பாணப் பல்கலைக்கழகம் தனக்குப் பெருமை தேடிக் கொண்டது.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
