"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Home, Users } from "lucide-react"
import { useState, useEffect } from "react"

export default function AboutPage() {
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#1E3A8A' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {language === "en" ? "About Us" : "எங்களைப் பற்றி"}
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed px-4">
              {language === "en"
                ? "Discover our mission, values, and commitment to empowering the visually impaired community"
                : "பார்வையற்ற சமூகத்தை மேம்படுத்துவதற்கான எங்கள் நோக்கம், மதிப்புகள் மற்றும் அர்ப்பணிப்பைக் கண்டறியவும்"}
            </p>
          </div>
        </div>
      </section>

      {/* Vaazhvaham And Its Prosperous Tasks Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 sm:mb-8 text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight" style={{ color: '#1E3A8A' }}>
              {language === "en" ? "Vaazhvaham And Its Prosperous Tasks" : "வாழ்வகம் மற்றும் அதன் வளமான பணிகள்"}
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
              {language === "en" ? (
                <>
                  <p>
                    Vaazhvaham provides all the facilities in a free manner that the visually impaired children need to pursue their education without any hindrance and enrich their lives by getting all possible other opportunities. At present, there are fifty-three children, both male and female, in the vaazhvaham. All of them are pursuing their education along with other normal children as per the current education trend of our country. Nine students are pursuing their degrees at the University of Jaffna. Another student, Ms. Usha Kesavan, is pursuing her degree at Peradanai University. Three of them are going to complete their degree this year (2024).
                  </p>
                  
                  <p>
                    All the other students are pursuing their education at J/Union College, J/Ramanathan College, and J/Thanthai Selva Primary School. All the facilities like food, clothing, shelter, daily necessities, medical, transport facilities, and special equipment needed for education are provided completely free of cost. Special classes are held after school hours. A few students are given the opportunity to study in private educational institutes as per their needs. Computer and English education is provided exclusively. Besides, arts like singing and dancing are also taught.
                  </p>
                  
                  <p>
                    Mobility training is also provided to visually impaired students, which is especially essential for self-movement, handling of objects, and daily tasks. And, monthly stipends are given to the students who are studying in the university and all their needs are met by vaazhvaham. Along with this, transportation allowance for parents is also provided once a month.
                  </p>
                  
                  <p>
                    In memory of our founder Dr.Annaladsumy Sinnathamby, we are also carrying out a project to provide free spectacles to poor students studying in normal schools outside the vaazhvaham. Furthermore, we have started a fund named "Dr. Annalakshmi Chinnathambi Memorial Welfare Fund" in memory of our founder and first chairman, Dr. Annaladsumy Sinnathamby. Through this, we plan to carry out welfare programs for the families of our students, alumni, employees, future employees, etc.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    விழிப்புலவலுவிழந்த பிள்ளைகள் தடையேதுமின்றித் தமது கல்வியை மேற்கொள்ளவும் சாத்தியமான இதர வாய்ப்புக்கள் அனைத்தையும் பெற்றுத் தமது வாழ்வை வளப்படுத்திக்கொள்ளவும் வேண்டிய அனைத்து வசதிகளையும் வாழ்வகம் முற்றிலும் இலவசமாக வழங்கி வருகின்றது. தற்போது வாழ்வகத்தில் ஆண் பெண் இரு பாலாருமாக ஐம்பத்துமூன்று பிள்ளைகள் உள்ளனர். இவர்கள் யாவரும் எமது நாட்டின் தற்போதய கல்வி செல்நெறிகளுக்கமைவாக ஏனைய சாதாரண பிள்ளைகளோடு இணைந்து தமது கல்வியினை மேற்கொண்டு வருகின்றனர். ஒன்பது மாணவர்கள் யாழ். பல்கலைக்கழகத்தில் தமது பட்டப்படிப்பினை மேற்கொண்டுள்ளனர். மற்றுமொரு மாணவியான செல்வி உஷா கேசவன் பேராதனைப் பல்கலைக்கழகத்தில் தனது பட்டப் படிப்பினை மேற்கொண்டுள்ளார். இவர்களுள் மூவர் இவ்வாண்டு தமது பட்டப் படிப்பினை நிறைவுசெய்ய உள்ளனர்.
                  </p>
                  
                  <p>
                    ஏனைய மாணவர்கள் யாவரும் தெல்லிப்பளை யூனியன் கல்லூரியிலும் சுன்னாகம் இராமநாதன் கல்லூரியிலும் யா/தந்தை செல்வா தொடக்க நிலைப் பள்ளியிலும் தமது கல்வியை மேற்கொண்டு வருகின்றனர். இவர்களுக்கு வேண்டிய உணவு, உடை, தங்குமிடம், அன்றாடப் பாவனைப் பொருட்கள், மருத்துவம், போக்குவரத்து வசதிகள், கல்விக்குத் தேவையான விசேட உபகரணங்கள் போன்ற அனைத்து வசதிகளும் முற்றிலும் இலவசமாக வழங்கப்படுகின்றன. பாடசாலை தவிர்ந்த ஏனைய நேரங்களில் பிரத்தியேக வகுப்புக்கள் நடைபெறுகின்றன. தேவை கருதி ஒருசில மாணவர்கள் தனியார் கல்வி நிலையங்களுக்குச் சென்று கற்பதற்கும் வாய்ப்பளிக்கப்படுகின்றது. கணனிக் கல்வி, ஆங்கிலக் கல்வி என்பன பிரத்தியேகமாக அளிக்கப்படுகின்றன. அத்தோடு, சங்கீதம், நடனம் போன்ற கலைகளும் பயிற்றுவிக்கப்படுகின்றன.
                  </p>
                  
                  <p>
                    விழிப்புல வலுவிழந்த மாணவர்களுக்கு விசேடமாக இன்றியமையாத சுயமாக நடமாடுதல், பொருட்களைக் கையாளுதல், அன்றாட வேலைகளை மேற்கொள்ளல் போன்ற இயக்கத்திறன் சார் பயிற்சிகளும் அளிக்கப்படுகின்றன. மேலும் பல்கலைக்கழகத்தில் பயிலும் மாணவர்களுக்கான மாதாந்த உதவு தொகைகள் வழங்கப்படுவதோடு, அவர்களின் தேவைகள் யாவுமே வாழ்வகத்தால் பூர்த்திசெய்யப்படுகின்றன. அத்தோடு மாதம் ஒரு தடவை பெற்றோர்களுக்கான போக்குவரத்துக் கொடுப்பனவும் வழங்கப்பட்டு வருகின்றது.
                  </p>
                  
                  <p>
                    வாழ்வகத்துக்கு வெளியே உள்ள சாதாரண பாடசாலைகளில் பயிலும் வறிய மாணவர்களுக்கான இலவச மூக்குக் கண்ணாடி வழங்கும் திட்டமொன்றினையும் எமது ஸ்தாபகர் கலாநிதி அன்னலட்சுமி சின்னத்தம்பி அம்மையாரின் ஞாபகார்த்தமாக முன்னெடுத்துவருகின்றோம். மேலும், எமது நிறுவனத்தின் ஸ்தாபகரும் முதலாவது தலைவருமான கலாநிதி அன்னலட்சுமி சின்னத்தம்பி அவர்களின் நினைவாக "கலாநிதி அன்னலட்சுமி சின்னத்தம்பி ஞாபகார்த்த நலன்புரி நிதியம்" என்னும் பெயரில் நிதியம் ஒன்றினையும் ஆரம்பித்துள்ளோம். இதன்மூலம் எமது மாணவர்களின் குடும்பங்கள், பழைய மாணவர்கள், ஊழியர்கள், முன்னைநாள் ஊழியர்கள் போன்றோருக்கான நலத்திட்டங்களை முன்னெடுக்கத் திட்டமிட்டுள்ளோம்.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Members Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl" style={{ color: '#1E3A8A' }}>
              {language === "en" ? "Executive Members" : "நிர்வாக உறுப்பினர்கள்"}
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* President */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/president.jpg" 
                    alt="President" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "President" : "தலைவர்"}
                  </h3>
                  <p className="font-medium mb-1">Mr. A. Raveendran J.P(WI)</p>
                  <p className="text-sm text-muted-foreground">
                    B.A, PGDE (Hons), M.Ed, SLTES – 3
                  </p>
                </CardContent>
              </Card>

              {/* Vice President */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/VicePres.jpg" 
                    alt="Vice President" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Vice President" : "துணைத் தலைவர்"}
                  </h3>
                  <p className="font-medium mb-1">Mrs. M.V. Raveendran</p>
                  <p className="text-sm text-muted-foreground">
                    B.A(Hons), PGDE, PGDSE, SLTS – 1
                  </p>
                </CardContent>
              </Card>

              {/* Secretary */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/secretary.jpg" 
                    alt="Secretary" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Secretary" : "செயலாளர்"}
                  </h3>
                  <p className="font-medium mb-1">Mr. V.K. Raveeharan J.P(WI)</p>
                  <p className="text-sm text-muted-foreground">
                    B.Com, PGDE, M.Ed (Hons), M.Com (Hons), SLTS
                  </p>
                </CardContent>
              </Card>

              {/* Assistant Secretary */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/AssSecr.jpg" 
                    alt="Assistant Secretary" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Asst. Secretary" : "உதவி செயலாளர்"}
                  </h3>
                  <p className="font-medium mb-1">Mr. T. Akilan</p>
                  <p className="text-sm text-muted-foreground">
                    B.Sc(Computer Science, UK)
                  </p>
                </CardContent>
              </Card>

              {/* Treasurer */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/Treasurer.jpg" 
                    alt="Treasurer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Treasurer" : "பொருளாளர்"}
                  </h3>
                  <p className="font-medium mb-1">Mr. T. Vamadevan J.P(WI)</p>
                  <p className="text-sm text-muted-foreground">
                    Spe. Trd (Primary), B.Ed, Dip.in.School Mgt, M.Ed (Hons), SLPS
                  </p>
                </CardContent>
              </Card>

              {/* Committee Member 1 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/Committee1.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                  <p className="font-medium mb-1">Mr. S. Tharumathan</p>
                  <p className="text-sm text-muted-foreground">
                    LL.B, Attorney-at-law
                  </p>
                </CardContent>
              </Card>

              {/* Committee Member 2 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/Committee2.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                  <p className="font-medium">Mr. R. Suththananthan</p>
                </CardContent>
              </Card>

              {/* Committee Member 3 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/Committee3.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                  <p className="font-medium">Mr. T. Shanmuganathan</p>
                </CardContent>
              </Card>

              {/* Committee Member 4 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/Committee4.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                  <p className="font-medium">Mr. P. Thirukumaran</p>
                </CardContent>
              </Card>

              {/* Committee Member 5 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/Committee5.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                  <p className="font-medium mb-1">Miss. D. Gnanaseelan</p>
                  <p className="text-sm text-muted-foreground">
                    B.A(Hons), Dip. in Counselling
                  </p>
                </CardContent>
              </Card>

              {/* Committee Member 6 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src="/Committee6.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                  <p className="font-medium">Mrs. P. Neminathan</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
