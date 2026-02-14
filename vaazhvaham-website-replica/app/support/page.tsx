"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Gift, Users, Briefcase } from "lucide-react"
import { useState, useEffect } from "react"

export default function SupportPage() {
  const [language, setLanguage] = useState<"en" | "ta">("en")

  useEffect(() => {
    const storedLanguage = sessionStorage.getItem("language") as "en" | "ta" | null
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }

    const handleStorageChange = () => {
      const newLanguage = sessionStorage.getItem("language") as "en" | "ta" | null
      if (newLanguage) {
        setLanguage(newLanguage)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#1E3A8A' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {language === "en" ? "Support Us" : "எங்களை ஆதரியுங்கள்"}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed px-4">
              {language === "en"
                ? "Your support helps us provide education, care, and opportunities to those who need it most"
                : "உங்கள் ஆதரவு எங்களுக்கு மிகவும் தேவைப்படுபவர்களுக்கு கல்வி, பராமரிப்பு மற்றும் வாய்ப்புகளை வழங்க உதவுகிறது"}
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            {/* Commitment Statement */}
            <div className="mb-8 sm:mb-12 text-center">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4">
                {language === "en"
                  ? "Your commitment allows us to face any situation, but also to accompany the dynamics of sustainable development, in a responsible, transparent, and effective way, for maximum impact."
                  : "உங்களது ஈடுபாடு எந்த ஒரு நிலமைக்கும் முகம் கொடுப்பதற்கும், எமது பணியை சிறப்பாகவும் வெளிப்படைத்தன்மையுடனும் பொறுப்புடனும் முன்னெடுக்க உதவும்."}
              </p>
            </div>

            {/* Donations Section */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/Donate.jpg" 
                  alt="Donation" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Donations Information */}
              <div className="order-1 lg:order-2">
                <h2 className="mb-6 text-3xl font-bold tracking-tight">
                  {language === "en" ? "Donations For" : "நன்கொடைகள்"}
                </h2>

                <div className="space-y-6">
                  {/* Food Section */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {language === "en" ? "Food (minimum contribution)" : "உணவு (குறைந்தபட்ச பங்களிப்பு)"}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          {language === "en" 
                            ? "Breakfast – Vegetarian meals- 10000/- Non vegetarian meals – 15000/-"
                            : "காலை உணவு - சைவ உணவுகள் - 10000/- அசைவ உணவுகள் – 15000/-"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          {language === "en" 
                            ? "Lunch - Vegetarian meals- 15000/- Non vegetarian meals – 20000/-"
                            : "மதிய உணவு - சைவ உணவுகள் - 15000/- அசைவ உணவுகள் – 20000/-"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          {language === "en" 
                            ? "Dinner - Vegetarian meals- 10000/- Non vegetarian meals – 15000/-"
                            : "இரவு உணவு - சைவ உணவுகள் - 10000/- அசைவ உணவுகள் – 15000/-"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          {language === "en" 
                            ? "Whole day- Vegetarian meals- 35000/- Non vegetarian meals – 45000/-"
                            : "முழு நாள் - சைவ உணவுகள் - 35000/- அசைவ உணவுகள் – 45000/-"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          {language === "en" 
                            ? "Tea time snacks – 5000/-"
                            : "தேநீர் நேர சிற்றுண்டி – 5000/-"}
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Other Donation Categories */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {language === "en" ? "Education" : "கல்வி"}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {language === "en" ? "Medical" : "மருத்துவம்"}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {language === "en" ? "Common" : "பொதுவானது"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr.Annaluxmi Sinnathambi Memorial Welfare Fund Section */}
            <div className="grid gap-8 lg:grid-cols-2 items-start mt-16">
              {/* Welfare Fund Information */}
              <div className="order-1 lg:order-1">
                <h2 className="mb-6 text-3xl font-bold tracking-tight">
                  {language === "en" 
                    ? "Dr.Annaluxmi Sinnathambi Memorial Welfare Fund" 
                    : "கலாநிதி அன்னலட்சுமி சின்னத்தம்பி ஞாபகார்த்த நலன்புரி நிதியம்"}
                </h2>

                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    {language === "en"
                      ? "The objective of this fund is to give them a high status in the society by improving the educational and economic status of the mentally challenged, their dependents, other special needs and other relevant parties. To achieve this objective the following activities will be undertaken."
                      : "விழிப்புல வலுவிழந்தோர், அவர்களைச் சார்ந்தோர், ஏனைய விசேட தேவையுடையோர் மற்றும், பொருத்தமான தரப்பினரின் கல்வி, பொருளாதார நிலையினை மேம்படுத்துவதன்மூலம் அவர்களுக்கு சமூகத்தில் உயர் அந்தஸ்தைப் பெற்றுக்கொடுப்பதே இந்நிதியத்தின் நோக்கமாகும். இந்த நோக்கத்தை அடைவதற்குப் பின்வரும் செயற்பாடுகள் மேற்கொள்ளப்படும்."}
                  </p>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-justify">
                        {language === "en"
                          ? "Welfare schemes for families of vaazhvaham students. (Students must be in vaazhvaham for at least one year and not subject to disciplinary action.)"
                          : "வாழ்வக மாணவர்களின் குடும்பங்களுக்கான நலன்புரித் திட்டங்கள்.(மாணவர்கள் ஆகக் குறைந்தபட்சம் ஓராண்டேனும் வாழ்வகத்தோடு இணைந்திருப்பவர்களாகவும் ஒழுக்காற்று நடவடிக்கைகளுக்கு உட்படாதவர்களாகவும் இருத்தல்வேண்டும்.)"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-justify">
                        {language === "en"
                          ? "Welfare schemes for vaazhvaham's employees and fomer employees. (Those who have worked for at least two years in the vaazhvaham and have not been subject to any disciplinary action or charges will be considered here.)"
                          : "வாழ்வக ஊழியர்கள் மற்றும், முன்னாள் ஊழியர்களுக்கான நலன்புரித்திட்டங்கள். (வாழ்வக நிறுவனத்தில் குறைந்தபட்சம் இரண்டு ஆண்டுகள் பணியாற்றியவர்களும் எவ்வித ஒழுக்காற்று நடவடிக்கைகளுக்கோ அல்லது குற்றச்சாட்டுகளுக்கோ உட்படாதவர்களுமே இங்கு கருத்திற்கொள்ளப்படுவர்.)"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className="order-2 lg:order-2">
                <img 
                  src="/Fund.jpg" 
                  alt="Dr.Annaluxmi Sinnathambi Memorial Welfare Fund" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Requirements Section */}
            <div className="grid gap-8 lg:grid-cols-2 items-start mt-16">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="/Need.jpg" 
                  alt="Requirements" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Requirements Information */}
              <div className="order-1 lg:order-2">
                <h2 className="mb-6 text-3xl font-bold tracking-tight">
                  {language === "en" ? "Requirements" : "தேவைகள்"}
                </h2>

                <div className="space-y-6">
                  {/* Playground */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {language === "en" ? "Playground" : "விளையாட்டு மைதானம்"}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {language === "en"
                        ? "A playground is needed for the children of vaazhvaham. Our efforts to achieve this have not been successful so far."
                        : "வாழ்வக பிள்ளைகளுக்கு விளையாட்டு மைதானம் தேவை. துரதிர்ஷ்டவசமாக, இதை அடைவதற்கான எங்கள் முயற்சிகள் இதுவரை வெற்றிபெறவில்லை."}
                    </p>
                  </div>

                  {/* Special equipments */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {language === "en" ? "Special equipments" : "சிறப்பு உபகரணங்கள்"}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {language === "en"
                        ? "Educational, sports, and other special equipment for visually impaired children are still needed."
                        : "கல்வி, விளையாட்டு மற்றும் பிற சிறப்பு உபகரணங்கள் பார்வையற்ற பிள்ளைகளுக்கு இன்னும் தேவை."}
                    </p>
                  </div>

                  {/* Specially trained personnel */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {language === "en" ? "Specially trained personnel" : "சிறப்பு பயிற்சி பெற்ற பணியாளர்கள்"}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {language === "en"
                        ? "There is a large lack of suitable personnel to train our children in education and other fields."
                        : "கல்வி மற்றும் பிற துறைகளில் எங்கள் பிள்ளைகளுக்கு பயிற்சி அளிக்க தகுதியான பணியாளர்கள் பற்றாக்குறை உள்ளது."}
                    </p>
                  </div>

                  {/* Audiobooks */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {language === "en"
                        ? "Although we are currently working on making audiobooks for the visually impaired, there is still a need for good personnel who can read these books for audio recording."
                        : "தற்போது விழிப்புல வலுவிழந்தோருக்கான ஒலிப் புத்தகங்கள் தயாரிக்கும் பணியில் ஈடுபட்டுள்ளோம், இருப்பினும் ஒலிப் பதிவுக்காக இந்த புத்தகங்களை படிக்கக்கூடிய நல்ல பணியாளர்கள் தேவை இன்னும் உள்ளது."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Voluntary Services Section */}
            <div className="grid gap-8 lg:grid-cols-2 items-center mt-16">
              {/* Voluntary Services Information */}
              <div className="order-1 lg:order-1">
                <h2 className="mb-6 text-3xl font-bold tracking-tight">
                  {language === "en" ? "Voluntary services" : "தன்னார்வ சேவைகள்"}
                </h2>
              </div>

              {/* Image */}
              <div className="order-2 lg:order-2">
                <img 
                  src="/volunteer.jpg" 
                  alt="Volunteers Needed" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways You Can Donate Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl text-primary">
              {language === "en" ? "WAYS YOU CAN DONATE" : "நீங்கள் நன்கொடை அளிக்கும் வழிகள்"}
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Commercial Bank */}
              <div className="p-8 rounded-lg text-center border">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="/com.png" 
                    alt="Commercial Bank" 
                    className="h-16 w-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Account Number" : "கணக்கு எண்"}
                </h3>
                <p className="text-2xl font-bold mb-4">8107009430</p>
                <p className="text-sm mb-2">
                  {language === "en" ? "Commercial Bank" : "கொமர்ஷல் வங்கி"}
                  <br />
                  {language === "en" ? "(Bank code – 7056)" : "(வங்கி குறியீடு – 7056)"}
                </p>
                <p className="text-sm mb-2">
                  {language === "en" ? "Chunnakam" : "சுன்னாகம்"}
                  <br />
                  {language === "en" ? "(Branch code – 107)" : "(கிளை குறியீடு – 107)"}
                </p>
                <p className="text-sm">(Swift {language === "en" ? "code" : "குறியீடு"}: CCEYLKLX)</p>
              </div>

              {/* Bank of Ceylon */}
              <div className="p-8 rounded-lg text-center border">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="/boc.svg" 
                    alt="Bank of Ceylon" 
                    className="h-16 w-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Account Number" : "கணக்கு எண்"}
                </h3>
                <p className="text-2xl font-bold mb-4">7471582</p>
                <p className="text-sm mb-2">
                  {language === "en" ? "Bank of Ceylon" : "இலங்கை வங்கி"}
                  <br />
                  {language === "en" ? "(Bank code – 7010)" : "(வங்கி குறியீடு – 7010)"}
                </p>
                <p className="text-sm mb-2">
                  {language === "en" ? "Chunnakam" : "சுன்னாகம்"}
                  <br />
                  {language === "en" ? "(Branch code – 053)" : "(கிளை குறியீடு – 053)"}
                </p>
                <p className="text-sm">(Swift {language === "en" ? "code" : "குறியீடு"}: BCEYLKLX)</p>
              </div>

              {/* Hatton National Bank */}
              <div className="p-8 rounded-lg text-center border">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="/hnb.png" 
                    alt="Hatton National Bank" 
                    className="h-16 w-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {language === "en" ? "Account Number" : "கணக்கு எண்"}
                </h3>
                <p className="text-2xl font-bold mb-4">117010003186</p>
                <p className="text-sm mb-2">
                  {language === "en" ? "Hatton National Bank" : "ஹட்டன் நேஷனல் வங்கி"}
                  <br />
                  {language === "en" ? "(Bank code – 7083)" : "(வங்கி குறியீடு – 7083)"}
                </p>
                <p className="text-sm mb-2">
                  {language === "en" ? "Chunnakam" : "சுன்னாகம்"}
                  <br />
                  {language === "en" ? "(Branch code – 117)" : "(கிளை குறியீடு – 117)"}
                </p>
                <p className="text-sm">(Swift {language === "en" ? "code" : "குறியீடு"}: SCHBLILKLX)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {language === "en" ? "Ready to Make a Difference?" : "மாற்றத்தை ஏற்படுத்த தயாரா?"}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Contact us today to learn more about how you can support our mission and transform lives."
                : "எங்கள் பணியை ஆதரிக்க மற்றும் வாழ்க்கையை மாற்ற நீங்கள் எப்படி முடியும் என்பதை மேலும் அறிய இன்றே எங்களை தொடர்பு கொள்ளுங்கள்."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="shadow-lg">
                <Heart className="mr-2 h-5 w-5" />
                {language === "en" ? "Donate Now" : "இப்போது நன்கொடை செய்யுங்கள்"}
              </Button>
              <Button size="lg" variant="outline">
                {language === "en" ? "Contact Us" : "தொடர்பு கொள்ளுங்கள்"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
