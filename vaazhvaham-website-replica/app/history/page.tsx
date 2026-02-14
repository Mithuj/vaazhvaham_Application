"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Award, Building, Users } from "lucide-react"
import { useState, useEffect } from "react"

export default function HistoryPage() {
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
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1E3A8A' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-white">
              {language === "en" ? "Our History" : "எமது வரலாறு"}
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              {language === "en"
                ? "Over three decades of dedicated service to the visually impaired community"
                : "மூன்று தசாப்தங்களுக்கும் மேலாக பார்வையற்ற சமூகத்திற்காக அர்ப்பணிக்கப்பட்ட சேவை"}
            </p>
          </div>
        </div>
      </section>

      {/* History Content Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-10">
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {language === "en"
                    ? "Eyesight loss or damage can happen to a person due to various reasons. It is completely wrong to assume that if a person loses his eyesight, his life is over. It has been proved today that even the blind can live happily and with honor in this world. We must always remember that education is vital to their well-being. Loss of eyes can only be compensated by education."
                    : "கண் பார்வை இழப்பு அல்லது பாதிப்பு ஒருவருக்குப் பல்வேறு காரணங்களால் ஏற்படக்கூடும். அவ்வாறு ஒருவர் தன் கண் பார்வையை இழந்துவிட்டால் அத்தோடு அவரின் வாழ்வே முடிந்துவிட்டது என கருதுவது முற்றிலும் தவறானது. பார்வையற்றவர்களாலும் இவ்வுலகில் மகிழ்ச்சியாக, கௌரவமாக வாழமுடியும் என்பது இன்று ஆணித்தரமாக நிரூபிக்கப்பட்டுள்ளது. இவர்களின் இவ்விதமான நல்வாழ்வுக்குக் கல்விமிக மிக இன்றியமையாதது என்பதை நாம் ஒருபோதும் மறந்துவிடக்கூடாது. கண்களின் இழப்பைக் கல்வியால் மட்டுமே ஈடுசெய்யமுடியும்."}
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {language === "en"
                    ? "However, even today, there are still many visually impaired children living in our society who do not have access to education. Most of these parents have no or very little awareness of How to lead these children and how to educate them. In this case, Vaazhvaham was established to find such children and make them honorable and useful citizens by providing them with suitable educational opportunities and other opportunities."
                    : "எனினும், இன்றும் கூட நம் சமூகத்தில் கல்வி வாய்ப்புக் கிடைக்காத விழிப்புல வலுவிழந்த பிள்ளைகள் பலர் வாழ்ந்து கொண்டு தான் இருக்கின்றனர். இவர்களின் பெற்றோர்களில் பெரும்பாலானவர்கள் இப்பிள்ளைகளை எவ்வாறு வழிநடத்துவது? இவர்களுக்கு எவ்வாறு கல்வியூட்டுவது என்பவை தொடர்பான விழிப்புணர்வு அற்றவர்களாக அல்லது மிகக் குறைந்தவர்களாகவே உள்ளனர். இந்நிலையில், இவ்வாறான பிள்ளைகளைத் தேடிக் கண்டறிந்து, இவர்களுக்குப் பொருத்தமான கல்வி வாய்ப்புக்களையும் இதர வாய்ப்புக்களையும் பெற்றுக்கொடுப்பதன் மூலம் இவர்களையும் கௌரவமான, பயன் மிக்க பிரஜைகளாக்கும் நோக்குடனேயெ வாழ்வகம் ஸ்தாபிக்கப்பட்டது."}
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {language === "en" ? (
                    <>
                      <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">Dr. Annaluxmi Sinnathamby</span>, an incomparable teacher who played a vital role in the educational development of the Tamil-speaking visually impaired children of Sri Lanka, came into existence on <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">29.06.1988</span> in Thellipalai.
                    </>
                  ) : (
                    <>
                      இலங்கை வாழ் தமிழ் பேசும் விழிப்புல வலுவிழந்த பிள்ளைகளின் கல்வி வளர்ச்சியில் காத்திரமான பங்காற்றிய ஒப்பற்ற ஆசிரியையான <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">கலாநிதி அன்னலட்சுமி சின்னத்தம்பி</span> அவர்களின் அரும் முயற்சியால் வாழ்வகம் <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">29.06.1988</span> அன்று தெல்லிப்பளையில் உதயமாயிற்று.
                    </>
                  )}
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
                  {language === "en"
                    ? "The establishment work began with thirteen children in a rented house near the Thellipalay Kasi Vinayagar Temple. However, due to the war situation of that time, Vaazhvaham had to be shifted from there in 1990. Again in 1992, a rented house was obtained in the Malvam area of ​​Uduvil and the establishment work continued there."
                    : "தெல்லிப்பளை காசி விநாயகர் ஆலயத்துக்கு அருகாமையிலுள்ள வாடகை வீடொன்றில் பதின்மூன்று பிள்ளைகளுடன் வாழ்வகத்தின் பணிகள் ஆரம்பமாயின. எனினும், அன்றைய யுத்த சூழ்நிலை காரணமாக 1990 ஆம் ஆண்டு வாழ்வகம் அங்கிருந்து இடம்பெயர நேர்ந்தது."}
                </p>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {language === "en"
                    ? "However, in 1995 again had to meet another massive displacement. There were also huge material losses. Dr. Annaladsumy Sinnathamby the leader and founder of Vaazhvaham, was not disheartened by these displacements. With the help of the Manipai Sathyasai Samiti, a house was rented in Manipai and in 1997 the work of Vaazhvaham was resumed there. Meanwhile, Chenchotselvar Dr.Aru.Thirumurugan's efforts, a sum of money was received from the Tamil Orphans' Trust fund in London to purchase a plot of land for vaazhvaham. As a result, the vaazhvaham was established in 2003 at its present residence."
                    : "மீண்டும் 1992 ஆம் ஆண்டு உடுவில் மல்வம் பகுதியில் வாடகை வீடொன்று பெறப்பட்டு அங்கு வாழ்வகத்தின் பணிகள் தொடரலாயின. இருந்தபோதிலும் 1995 ஆம் ஆண்டு மீண்டுமொரு பாரிய இடப்பெயர்வைச் சந்திக்க நேர்ந்தது. கூடவே பெருமளவு பொருள் இழப்புக்களும் ஏற்பட்டன. வாழ்வகத்தின் அன்றைய தலைவரும் ஸ்தாபகருமான கலாநிதி அன்னலட்சுமி சின்னத்தம்பி அம்மையார் இந்த இடப்பெயர்வுகளைக் கண்டு சற்றேனும் மனம் தளரவில்லை. மானிப்பாய் சத்தியசாயி சமிதியினரின் உதவியோடு மானிப்பாயில் வீடொன்று வாழகைக்குப் பெறப்பட்டு 1997 ஆம் ஆண்டு வாழ்வகத்தின் பணிகள் மீண்டும் அங்கு ஆரம்பமாயின. இவ்வேளையில், செஞ்சொற்செல்வர் கலாநிதி ஆறு. திருமுருகன் அவர்கள் மேற்கொண்ட அரும் முயற்சியின் பயனாக லண்டனிலுள்ள தமிழ் அனாதைகள் நம்பிக்கை நிதியத்தினரிடமிருந்து, வாழ்வகத்துக்கெனச் சொந்தமாக ஒரு காணியைக் கொள்வனவுசெய்வதற்கென ஒரு தொகை பணம் நன்கொடையாகக் கிடைக்கப்பெற்றது. இதன் பயனாக, வாழ்வகம் 2003 ஆம் ஆண்டு தற்போதய அதன் சொந்த வதிவிடத்தில் நிலைநிறுத்தப்பட்டது."}
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
