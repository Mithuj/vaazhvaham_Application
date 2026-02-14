"use client"

import Link from "next/link"
import { Facebook, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [language] = useState<"en" | "ta">("en")
  const [showDevelopment, setShowDevelopment] = useState(false)

  return (
    <footer className="border-t" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{language === "en" ? "Vaazhvaham" : "வாழ்வஹம்"}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Home for the visually handicapped, dedicated to empowering lives through education and care."
                : "பார்வையற்றோருக்கான இல்லம், கல்வி மற்றும் பராமரிப்பு மூலம் வாழ்க்கையை மேம்படுத்துகிறது."}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{language === "en" ? "Contact" : "தொடர்பு"}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Sabapathipillai Road, Chunnakam</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:vaazhvaham1988@gmail.com" className="hover:text-primary transition-colors">
                  vaazhvaham1988@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+94212240146" className="hover:text-primary transition-colors">
                  +94 21 224 0146
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{language === "en" ? "Quick Links" : "விரைவு இணைப்புகள்"}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "en" ? "About Us" : "எங்களை பற்றி"}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "en" ? "Events" : "நிகழ்வுகள்"}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "en" ? "News" : "செய்திகள்"}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === "en" ? "Gallery" : "படத்தொகுப்பு"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{language === "en" ? "Connect" : "இணைப்புகள்"}</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/94212240146"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-start gap-4">
            <button 
              onClick={() => setShowDevelopment(!showDevelopment)}
              className="hover:text-primary transition-colors text-sm text-muted-foreground"
            >
              {language === "en" ? "Development" : "மேம்பாடு"}
            </button>
            {showDevelopment && (
              <div className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-lg">
                <p>Design by SRIT and Developed by Mithunan Jeyamohan</p>
              </div>
            )}
            <p className="text-sm text-muted-foreground">
              {language === "en"
                ? "© 2025 Vaazhvaham. All rights reserved."
                : "© 2025 வாழ்வஹம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."}
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright bar with blue background */}
      <div className="w-full py-4" style={{ backgroundColor: '#1E3A8A' }}>
        <div className="container mx-auto px-4">
          <p className="text-sm text-white text-center">
            © 2025 by Vaazhvaham. Powered and secured by SRIT
          </p>
        </div>
      </div>
    </footer>
  )
}
