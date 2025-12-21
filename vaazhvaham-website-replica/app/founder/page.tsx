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

      {/* Founder Profile Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 flex flex-col items-center gap-8 md:flex-row">
              <div className="flex-shrink-0">
                <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl">
                  <Image src="/elderly-tamil-woman-founder-portrait.jpg" alt="Miss A. Sinnaththamby" fill className="object-cover" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="mb-4 text-3xl font-bold">
                  {language === "en" ? "Miss A. Sinnaththamby" : "திருமதி ஏ. சின்னத்தம்பி"}
                </h2>
                <p className="mb-4 text-lg text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Miss A. Sinnaththamby founded Vaazhvaham in 1988 with a singular mission: to provide a home where visually impaired individuals could receive education, care, and the opportunity to lead dignified, independent lives."
                    : "திருமதி ஏ. சின்னத்தம்பி 1988 இல் வாழ்வஹம் நிறுவினார் ஒரே பணியுடன்: பார்வையற்ற நபர்கள் கல்வி, பராமரிப்பு மற்றும் கண்ணியமான, சுதந்திரமான வாழ்க்கையை நடத்த வாய்ப்பு பெறக்கூடிய ஒரு இல்லத்தை வழங்குவது."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Her unwavering dedication and compassionate leadership laid the foundation for what Vaazhvaham has become today—a sanctuary of hope and empowerment for the visually handicapped community."
                    : "அவரது அசைக்க முடியாத அர்ப்பணிப்பு மற்றும் இரக்கமுள்ள தலைமை இன்று வாழ்வஹம் ஆனதற்கு அடித்தளமிட்டது—பார்வையற்றோர் சமூகத்திற்கான நம்பிக்கை மற்றும் அதிகாரமளிப்பின் சரணாலயம்."}
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{language === "en" ? "Compassion" : "இரக்கம்"}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "Her deep empathy for the visually impaired drove her to create a safe haven where individuals could thrive despite their challenges."
                      : "பார்வையற்றோர் மீதான அவரது ஆழ்ந்த பரிவு, சவால்களை எதிர்கொண்டும் தனிநபர்கள் வளரக்கூடிய ஒரு பாதுகாப்பான புகலிடத்தை உருவாக்க அவரை உந்தியது."}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{language === "en" ? "Education Focus" : "கல்வி கவனம்"}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "She believed education was the key to independence, establishing comprehensive learning programs that transformed lives."
                      : "கல்வி சுதந்திரத்திற்கான திறவுகோல் என்று அவர் நம்பினார், வாழ்க்கையை மாற்றும் விரிவான கற்றல் திட்டங்களை நிறுவினார்."}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-secondary/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {language === "en" ? "Community Builder" : "சமூக கட்டமைப்பாளர்"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "She fostered a sense of family and belonging, creating lasting bonds between residents, staff, and the broader community."
                      : "அவர் குடும்பம் மற்றும் சொந்த உணர்வை வளர்த்தார், குடியிருப்பாளர்கள், ஊழியர்கள் மற்றும் பரந்த சமூகத்திற்கு இடையே நீடித்த பிணைப்புகளை உருவாக்கினார்."}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{language === "en" ? "Legacy" : "மரபு"}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "Her vision continues to inspire our work today, touching the lives of countless individuals and their families."
                      : "அவரது பார்வை இன்றும் எங்கள் பணியை ஊக்குவிக்கிறது, எண்ணற்ற தனிநபர்கள் மற்றும் அவர்களின் குடும்பங்களின் வாழ்க்கையைத் தொடுகிறது."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Current Leadership Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Current Leadership" : "தற்போதைய தலைமை"}
            </h2>
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col items-center gap-6 md:flex-row">
                  <div className="flex-shrink-0">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
                      <Image src="/tamil-man-director-portrait.jpg" alt="Mr. A. Raveendran" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="mb-2 text-2xl font-bold">
                      {language === "en" ? "Mr. A. Raveendran" : "திரு. ஏ. ரவீந்திரன்"}
                    </h3>
                    <p className="mb-4 text-lg font-medium text-primary">
                      {language === "en" ? "Managing Director" : "நிர்வாக இயக்குநர்"}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === "en"
                        ? "Mr. A. Raveendran currently manages Vaazhvaham, carrying forward the founder's vision with dedication and compassion. Under his leadership, the institution continues to grow and serve the visually impaired community with excellence, maintaining the high standards of care and education established by Miss A. Sinnaththamby."
                        : "திரு. ஏ. ரவீந்திரன் தற்போது வாழ்வஹம் நிர்வகிக்கிறார், அர்ப்பணிப்பு மற்றும் இரக்கத்துடன் நிறுவனரின் பார்வையை முன்னெடுத்துச் செல்கிறார். அவரது தலைமையில், நிறுவனம் தொடர்ந்து வளர்ந்து பார்வையற்றோர் சமூகத்திற்கு சிறப்பாக சேவை செய்கிறது, திருமதி ஏ. சின்னத்தம்பி நிறுவிய உயர் தர பராமரிப்பு மற்றும் கல்வியை பராமரிக்கிறது."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <h3 className="mb-4 text-2xl font-bold">
                {language === "en" ? "Dr. Annaladsumy Sinnaththamby Memorial" : "டாக்டர் அன்னலட்சுமி சின்னத்தம்பி நினைவு"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "In honor of our founder's legacy, we hold an annual memorial day and sermon every September 11th. This special day celebrates her life, her contributions to the visually impaired community, and her enduring impact on all those whose lives she touched. The memorial service brings together current and former residents, staff, supporters, and community members to remember and celebrate a life dedicated to service."
                  : "எங்கள் நிறுவனரின் மரபு நினைவாக, நாங்கள் ஒவ்வொரு செப்டம்பர் 11 ஆம் தேதியும் ஆண்டு நினைவு நாள் மற்றும் பிரசங்கத்தை நடத்துகிறோம். இந்த சிறப்பு நாள் அவரது வாழ்க்கை, பார்வையற்றோர் சமூகத்திற்கான அவரது பங்களிப்புகள் மற்றும் அவர் தொட்ட அனைத்து வாழ்க்கைகளிலும் அவரது நீடித்த தாக்கத்தை கொண்டாடுகிறது. நினைவு சேவை தற்போதைய மற்றும் முன்னாள் குடியிருப்பாளர்கள், ஊழியர்கள், ஆதரவாளர்கள் மற்றும் சமூக உறுப்பினர்களை ஒன்றிணைத்து சேவைக்கு அர்ப்பணிக்கப்பட்ட வாழ்க்கையை நினைவுகூர்ந்து கொண்டாட உதவுகிறது."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
