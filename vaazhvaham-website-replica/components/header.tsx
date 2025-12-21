"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [language, setLanguage] = useState<"en" | "ta">("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ta" : "en")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">V</span>
              </div>
              <span className="text-lg font-semibold">{language === "en" ? "Vaazhvaham" : "வாழ்வஹம்"}</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                {language === "en" ? "Home" : "முகப்பு"}
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                  {language === "en" ? "Who We Are" : "நாங்கள் யார்"}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/about">{language === "en" ? "About Us" : "எங்களை பற்றி"}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/history">{language === "en" ? "History" : "வரலாறு"}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/founder">{language === "en" ? "Founder" : "நிறுவனர்"}</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
                {language === "en" ? "Events" : "நிகழ்வுகள்"}
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                  {language === "en" ? "News" : "செய்திகள்"}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/news">{language === "en" ? "News" : "செய்திகள்"}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/publication">{language === "en" ? "Publication" : "வெளியீடு"}</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
                {language === "en" ? "Gallery" : "படத்தொகுப்பு"}
              </Link>

              <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                {language === "en" ? "Contact Us" : "தொடர்பு கொள்ளுங்கள்"}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language === "en" ? "EN" : "தமிழ்"}</span>
            </Button>

            <Button asChild className="hidden sm:flex">
              <Link href="/support">{language === "en" ? "Support Us" : "எங்களை ஆதரியுங்கள்"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
