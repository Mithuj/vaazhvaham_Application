"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Home, Users } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [language] = useState<"en" | "ta">("en")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "About Us" : "எங்களை பற்றி"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Discover our mission, values, and commitment to empowering the visually impaired community"
                : "பார்வையற்றோர் சமூகத்தை மேம்படுத்துவதற்கான எங்கள் பணி, மதிப்புகள் மற்றும் அர்ப்பணிப்பைக் கண்டறியுங்கள்"}
            </p>
          </div>
        </div>
      </section>

      {/* Vaazhvaham And Its Prosperous Tasks Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Vaazhvaham And Its Prosperous Tasks" : "வாழ்வஹம் மற்றும் அதன் செழிப்பான பணிகள்"}
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
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
                    பார்வையற்ற குழந்தைகள் தங்கள் கல்வியை எந்தத் தடையும் இல்லாமல் தொடரவும், சாத்தியமான அனைத்து வாய்ப்புகளையும் பெற்று தங்கள் வாழ்க்கையை வளப்படுத்தவும் தேவையான அனைத்து வசதிகளையும் வாழ்வஹம் இலவசமாக வழங்குகிறது. தற்போது வாழ்வஹத்தில் ஐம்பத்து மூன்று ஆண் மற்றும் பெண் குழந்தைகள் உள்ளனர். அவர்கள் அனைவரும் நமது நாட்டின் தற்போதைய கல்விப் போக்கின்படி மற்ற சாதாரண குழந்தைகளுடன் சேர்ந்து தங்கள் கல்வியைத் தொடர்கின்றனர். ஒன்பது மாணவர்கள் யாழ்ப்பாணப் பல்கலைக்கழகத்தில் தங்கள் பட்டப்படிப்பைத் தொடர்கின்றனர். மற்றொரு மாணவி திருமதி உஷா கேசவன் பேராதனைப் பல்கலைக்கழகத்தில் தனது பட்டப்படிப்பைத் தொடர்கிறார். அவர்களில் மூன்று பேர் இந்த ஆண்டு (2024) தங்கள் பட்டப்படிப்பை முடிக்கப் போகிறார்கள்.
                  </p>
                  
                  <p>
                    மற்ற எல்லா மாணவர்களும் ஜே/யூனியன் கல்லூரி, ஜே/ராமநாதன் கல்லூரி மற்றும் ஜே/தந்தை செல்வா ஆரம்பப் பள்ளி ஆகியவற்றில் தங்கள் கல்வியைத் தொடர்கின்றனர். உணவு, உடை, தங்குமிடம், அன்றாட தேவைகள், மருத்துவம், போக்குவரத்து வசதிகள் மற்றும் கல்விக்குத் தேவையான சிறப்பு உபகரணங்கள் போன்ற அனைத்து வசதிகளும் முற்றிலும் இலவசமாக வழங்கப்படுகின்றன. பள்ளி நேரத்திற்குப் பிறகு சிறப்பு வகுப்புகள் நடத்தப்படுகின்றன. சில மாணவர்களுக்கு அவர்களின் தேவைகளுக்கு ஏற்ப தனியார் கல்வி நிறுவனங்களில் படிக்க வாய்ப்பு வழங்கப்படுகிறது. கணினி மற்றும் ஆங்கிலக் கல்வி பிரத்யேகமாக வழங்கப்படுகிறது. தவிர, பாடல் மற்றும் நடனம் போன்ற கலைகளும் கற்பிக்கப்படுகின்றன.
                  </p>
                  
                  <p>
                    பார்வையற்ற மாணவர்களுக்கு இயக்கப் பயிற்சியும் வழங்கப்படுகிறது, இது சுய இயக்கம், பொருட்களைக் கையாளுதல் மற்றும் அன்றாட பணிகளுக்கு குறிப்பாக அத்தியாவசியமானது. மேலும், பல்கலைக்கழகத்தில் படிக்கும் மாணவர்களுக்கு மாதாந்திர உதவித்தொகை வழங்கப்படுகிறது மற்றும் அவர்களின் அனைத்துத் தேவைகளும் வாழ்வஹத்தால் பூர்த்தி செய்யப்படுகின்றன. இதனுடன், பெற்றோருக்கு மாதம் ஒருமுறை போக்குவரத்து கொடுப்பனவும் வழங்கப்படுகிறது.
                  </p>
                  
                  <p>
                    எங்கள் நிறுவனர் டாக்டர் அன்னலட்சுமி சின்னத்தம்பியின் நினைவாக, வாழ்வஹத்திற்கு வெளியே சாதாரண பள்ளிகளில் படிக்கும் ஏழை மாணவர்களுக்கு இலவச கண்ணாடிகளை வழங்கும் திட்டத்தையும் நாங்கள் மேற்கொண்டு வருகிறோம். மேலும், எங்கள் நிறுவனர் மற்றும் முதல் தலைவரான டாக்டர் அன்னலட்சுமி சின்னத்தம்பியின் நினைவாக "டாக்டர் அன்னலட்சுமி சின்னத்தம்பி நினைவு நல வாழ்வு நிதி" என்ற பெயரில் ஒரு நிதியைத் தொடங்கியுள்ளோம். இதன் மூலம், எங்கள் மாணவர்கள், முன்னாள் மாணவர்கள், ஊழியர்கள், எதிர்கால ஊழியர்கள் போன்றவர்களின் குடும்பங்களுக்கு நலன்புரி திட்டங்களை மேற்கொள்ள திட்டமிட்டுள்ளோம்.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Members Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Executive Members" : "நிர்வாக உறுப்பினர்கள்"}
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* President */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/president.jpg" 
                    alt="President" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "President" : "தலைவர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Vice President */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/VicePres.jpg" 
                    alt="Vice President" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Vice President" : "துணைத் தலைவர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Secretary */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/secretary.jpg" 
                    alt="Secretary" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Secretary" : "செயலாளர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Assistant Secretary */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/AssSecr.jpg" 
                    alt="Assistant Secretary" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Assistant Secretary" : "உதவி செயலாளர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Treasurer */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Treasurer.jpg" 
                    alt="Treasurer" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Treasurer" : "பொருளாளர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 1 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee1.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 2 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee2.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 3 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee3.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 4 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee4.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 5 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee5.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>

              {/* Committee Member 6 */}
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img 
                    src="/Committee6.jpg" 
                    alt="Committee Member" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? "Committee Member" : "குழு உறுப்பினர்"}
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
