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

      {/* Mission Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                {language === "en" ? "Our Mission" : "எங்கள் பணி"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Vaazhvaham is dedicated to providing a safe, nurturing home for the visually handicapped, where individuals can receive education, vocational training, and comprehensive care to lead independent and fulfilling lives."
                  : "வாழ்வஹம் பார்வையற்றோருக்கு பாதுகாப்பான, வளர்க்கும் இல்லத்தை வழங்குவதில் அர்ப்பணிப்புடன் உள்ளது, அங்கு தனிநபர்கள் சுதந்திரமான மற்றும் நிறைவான வாழ்க்கையை நடத்த கல்வி, தொழிற்பயிற்சி மற்றும் விரிவான பராமரிப்பைப் பெற முடியும்."}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {language === "en" ? "Compassionate Care" : "இரக்கமுள்ள பராமரிப்பு"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "We provide 24/7 care and support, ensuring the physical, emotional, and spiritual well-being of every resident in our home."
                      : "நாங்கள் 24/7 பராமரிப்பு மற்றும் ஆதரவை வழங்குகிறோம், எங்கள் இல்லத்தில் உள்ள ஒவ்வொரு குடியிருப்பாளரின் உடல், உணர்ச்சி மற்றும் ஆன்மீக நல்வாழ்வை உறுதி செய்கிறோம்."}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-accent/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {language === "en" ? "Quality Education" : "தரமான கல்வி"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "Our specialized curriculum includes Braille literacy, academic subjects, vocational training, and life skills development."
                      : "எங்கள் சிறப்பு பாடத்திட்டத்தில் பிரெய்லி கல்வியறிவு, கல்விப் பாடங்கள், தொழிற்பயிற்சி மற்றும் வாழ்க்கைத் திறன்கள் மேம்பாடு ஆகியவை அடங்கும்."}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-secondary/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {language === "en" ? "Community Integration" : "சமூக ஒருங்கிணைப்பு"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "We foster connections between residents and the broader community through events, volunteer programs, and social activities."
                      : "நிகழ்வுகள், தன்னார்வ திட்டங்கள் மற்றும் சமூக நடவடிக்கைகள் மூலம் குடியிருப்பாளர்கள் மற்றும் பரந்த சமூகத்திற்கு இடையே தொடர்புகளை வளர்க்கிறோம்."}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">
                    {language === "en" ? "Safe Environment" : "பாதுகாப்பான சூழல்"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "en"
                      ? "Our facility is specially designed with accessibility features to ensure safety, comfort, and independence for all residents."
                      : "எங்கள் வசதி அனைத்து குடியிருப்பாளர்களுக்கும் பாதுகாப்பு, வசதி மற்றும் சுதந்திரத்தை உறுதி செய்ய அணுகல் அம்சங்களுடன் சிறப்பாக வடிவமைக்கப்பட்டுள்ளது."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "What We Do" : "நாங்கள் என்ன செய்கிறோம்"}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-2xl font-semibold">
                  {language === "en" ? "Education Programs" : "கல்வித் திட்டங்கள்"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "We offer comprehensive educational programs from primary to higher secondary levels, utilizing Braille materials, audio resources, and adaptive technologies. Our curriculum is designed to meet individual learning needs while maintaining high academic standards."
                    : "நாங்கள் முதன்மை முதல் உயர் நிலை வரை விரிவான கல்வித் திட்டங்களை வழங்குகிறோம், பிரெய்லி பொருட்கள், ஆடியோ ஆதாரங்கள் மற்றும் தகவமைப்பு தொழில்நுட்பங்களைப் பயன்படுத்துகிறோம். எங்கள் பாடத்திட்டம் உயர் கல்வி தரங்களை பராமரிக்கும் போது தனிப்பட்ட கற்றல் தேவைகளை பூர்த்தி செய்ய வடிவமைக்கப்பட்டுள்ளது."}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold">
                  {language === "en" ? "Vocational Training" : "தொழிற்பயிற்சி"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Our vocational training programs include skills such as basket weaving, computer training, music, massage therapy, and other marketable skills that enable residents to gain financial independence and contribute meaningfully to society."
                    : "எங்கள் தொழிற்பயிற்சி திட்டங்களில் கூடை பின்னுதல், கணினி பயிற்சி, இசை, மசாஜ் சிகிச்சை மற்றும் பிற சந்தைப்படுத்தக்கூடிய திறன்கள் போன்ற திறன்கள் அடங்கும், இது குடியிருப்பாளர்கள் நிதி சுதந்திரத்தைப் பெறவும் சமுதாயத்திற்கு அர்த்தமுள்ள பங்களிப்பை வழங்கவும் உதவுகிறது."}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold">
                  {language === "en" ? "Healthcare Services" : "சுகாதார சேவைகள்"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Regular medical check-ups, specialized eye care, physical therapy, and mental health support are integral parts of our holistic care approach. We work with healthcare professionals to ensure optimal health outcomes for all residents."
                    : "வழக்கமான மருத்துவ சோதனைகள், சிறப்பு கண் பராமரிப்பு, உடல் சிகிச்சை மற்றும் மன சுகாதார ஆதரவு ஆகியவை எங்கள் முழுமையான பராமரிப்பு அணுகுமுறையின் ஒருங்கிணைந்த பகுதிகளாகும். அனைத்து குடியிருப்பாளர்களுக்கும் உகந்த சுகாதார விளைவுகளை உறுதி செய்ய சுகாதார வல்லுநர்களுடன் நாங்கள் பணியாற்றுகிறோம்."}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-semibold">
                  {language === "en" ? "Social & Recreational Activities" : "சமூக மற்றும் பொழுதுபோக்கு நடவடிக்கைகள்"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "We organize cultural programs, sports activities, outings, and celebrations to ensure residents enjoy a well-rounded life experience. These activities promote social interaction, confidence building, and overall well-being."
                    : "குடியிருப்பாளர்கள் ஒரு முழுமையான வாழ்க்கை அனுபவத்தை அனுபவிக்க உறுதி செய்ய கலாச்சார நிகழ்ச்சிகள், விளையாட்டு நடவடிக்கைகள், வெளியூர் பயணங்கள் மற்றும் கொண்டாட்டங்களை ஏற்பாடு செய்கிறோம். இந்த நடவடிக்கைகள் சமூக தொடர்பு, நம்பிக்கை கட்டுமானம் மற்றும் ஒட்டுமொத்த நல்வாழ்வை ஊக்குவிக்கின்றன."}
                </p>
              </div>
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
                    src="/commitee1.jpg" 
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
