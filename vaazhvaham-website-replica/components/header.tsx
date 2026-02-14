"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { ChevronDown, Globe, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export function Header() {
  const [language, setLanguage] = useState<"en" | "ta">("en")
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Load language from sessionStorage on mount
  useEffect(() => {
    const storedLanguage = sessionStorage.getItem('language')
    if (storedLanguage === 'ta' || storedLanguage === 'en') {
      setLanguage(storedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ta" : "en"
    setLanguage(newLanguage)
    sessionStorage.setItem('language', newLanguage)
    // Trigger a storage event for other components
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#1e3a8a] backdrop-blur">
      <div className="container mx-auto">
        <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Logo on the left */}
          <div className="flex items-center flex-1">
            <Link href="/" className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/Logo.png" 
                alt="Vaazhvaham Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
              />
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white" suppressHydrationWarning>{language === "en" ? "Vaazhvaham" : "வாழ்வகம்"}</span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 2xl:gap-10 flex-1">
            <Link href="/" className={`text-sm md:text-base font-medium transition-colors hover:text-white text-white/90 whitespace-nowrap pb-1 ${pathname === '/' ? 'border-b-2 border-white' : ''}`} suppressHydrationWarning>
              {language === "en" ? "Home" : "முகப்பு"}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-sm md:text-base font-medium transition-colors hover:text-white text-white/90 whitespace-nowrap pb-1 ${pathname === '/about' || pathname === '/history' || pathname === '/founder' ? 'border-b-2 border-white' : ''}`} suppressHydrationWarning>
                {language === "en" ? "Who We Are" : "நாம்"}
                <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-base">
                <DropdownMenuItem asChild>
                  <Link href="/about" className="text-base" suppressHydrationWarning>{language === "en" ? "About Us" : "எங்களை பற்றி"}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/history" className="text-base" suppressHydrationWarning>{language === "en" ? "History" : "வரலாறு"}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/founder" className="text-base" suppressHydrationWarning>{language === "en" ? "Founder" : "நிறுவனர்"}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/events" className={`text-sm md:text-base font-medium transition-colors hover:text-white text-white/90 whitespace-nowrap pb-1 ${pathname === '/events' || pathname?.startsWith('/events/') ? 'border-b-2 border-white' : ''}`} suppressHydrationWarning>
              {language === "en" ? "Events" : "நிகழ்வு"}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-sm md:text-base font-medium transition-colors hover:text-white text-white/90 whitespace-nowrap pb-1 ${pathname === '/news' || pathname?.startsWith('/news/') || pathname === '/publication' ? 'border-b-2 border-white' : ''}`} suppressHydrationWarning>
                {language === "en" ? "News" : "செய்தி"}
                <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-base">
                <DropdownMenuItem asChild>
                  <Link href="/news" className="text-base" suppressHydrationWarning>{language === "en" ? "News" : "செய்திகள்"}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/publication" className="text-base" suppressHydrationWarning>{language === "en" ? "Publication" : "வெளியீடு"}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/gallery" className={`text-sm md:text-base font-medium transition-colors hover:text-white text-white/90 whitespace-nowrap pb-1 ${pathname === '/gallery' ? 'border-b-2 border-white' : ''}`} suppressHydrationWarning>
              {language === "en" ? "Gallery" : "தொகுப்பு"}
            </Link>

            <Link href="/contact" className={`text-sm md:text-base font-medium transition-colors hover:text-white text-white/90 whitespace-nowrap pb-1 ${pathname === '/contact' ? 'border-b-2 border-white' : ''}`} suppressHydrationWarning>
              {language === "en" ? "Contact Us" : "தொடர்பு கொள்ள"}
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-end">
            <Button
              variant="ghost"
              size="default"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm md:text-base text-white hover:text-white hover:bg-white/10"
              aria-label="Toggle language"
              suppressHydrationWarning
            >
              <Globe className="h-4 w-4 md:h-5 md:w-5 text-white" />
              <span className="font-medium text-white">{language === "en" ? "தமிழ்" : "EN"}</span>
            </Button>

            <Button asChild className="hidden md:flex text-sm md:text-base bg-white hover:bg-white/90 text-black" size="default" suppressHydrationWarning>
              <Link href="/support">{language === "en" ? "Support Us" : "ஆதரவு வழங்க"}</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <VisuallyHidden>
                  <SheetTitle>{language === "en" ? "Navigation Menu" : "வழிசெலுத்தல் பட்டி"}</SheetTitle>
                </VisuallyHidden>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link 
                    href="/" 
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-2" 
                    onClick={() => setIsOpen(false)}
                    suppressHydrationWarning
                  >
                    {language === "en" ? "Home" : "முகப்பு"}
                  </Link>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground px-2" suppressHydrationWarning>
                      {language === "en" ? "Who We Are" : "நாம்"}
                    </div>
                    <Link 
                      href="/about" 
                      className="block text-base font-medium transition-colors hover:text-primary px-4 py-2" 
                      onClick={() => setIsOpen(false)}
                      suppressHydrationWarning
                    >
                      {language === "en" ? "About Us" : "எங்களை பற்றி"}
                    </Link>
                    <Link 
                      href="/history" 
                      className="block text-base font-medium transition-colors hover:text-primary px-4 py-2" 
                      onClick={() => setIsOpen(false)}
                      suppressHydrationWarning
                    >
                      {language === "en" ? "History" : "வரலாறு"}
                    </Link>
                    <Link 
                      href="/founder" 
                      className="block text-base font-medium transition-colors hover:text-primary px-4 py-2" 
                      onClick={() => setIsOpen(false)}
                      suppressHydrationWarning
                    >
                      {language === "en" ? "Founder" : "நிறுவனர்"}
                    </Link>
                  </div>

                  <Link 
                    href="/events" 
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-2" 
                    onClick={() => setIsOpen(false)}
                    suppressHydrationWarning
                  >
                    {language === "en" ? "Events" : "நிகழ்வு"}
                  </Link>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-muted-foreground px-2" suppressHydrationWarning>
                      {language === "en" ? "News" : "செய்தி"}
                    </div>
                    <Link 
                      href="/news" 
                      className="block text-base font-medium transition-colors hover:text-primary px-4 py-2" 
                      onClick={() => setIsOpen(false)}
                      suppressHydrationWarning
                    >
                      {language === "en" ? "News" : "செய்தி"}
                    </Link>
                    <Link 
                      href="/publication" 
                      className="block text-base font-medium transition-colors hover:text-primary px-4 py-2" 
                      onClick={() => setIsOpen(false)}
                      suppressHydrationWarning
                    >
                      {language === "en" ? "Publication" : "வெளியீடு"}
                    </Link>
                  </div>

                  <Link 
                    href="/gallery" 
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-2" 
                    onClick={() => setIsOpen(false)}
                    suppressHydrationWarning
                  >
                    {language === "en" ? "Gallery" : "தொகுப்பு"}
                  </Link>

                  <Link 
                    href="/contact" 
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-2" 
                    onClick={() => setIsOpen(false)}
                    suppressHydrationWarning
                  >
                    {language === "en" ? "Contact Us" : "தொடர்பு கொள்ள"}
                  </Link>

                  <Button asChild className="mt-4 w-full" suppressHydrationWarning>
                    <Link href="/support" onClick={() => setIsOpen(false)}>
                      {language === "en" ? "Support Us" : "ஆதரவு வழங்க"}
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
