"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { useState, useEffect } from "react"

export default function ContactPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#1E3A8A' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white" suppressHydrationWarning>
              {language === "en" ? "Contact Us" : "எங்களை தொடர்பு கொள்ளவும்"}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed px-4" suppressHydrationWarning>
              {language === "en"
                ? "Get in touch with us for inquiries, support, or to learn more about our programs"
                : "விசாரணைகள், ஆதரவு அல்லது எங்கள் திட்டங்கள் பற்றி மேலும் அறிய எங்களை தொடர்பு கொள்ளவும்"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold tracking-tight text-center">
                {language === "en" ? "Get in Touch" : "தொடர்பில் இருங்கள்"}
              </h2>

              <div className="space-y-6">
                <Card style={{ backgroundColor: '#edf0fb' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      {language === "en" ? "Address" : "முகவரி"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Sabapathipillai Road
                      <br />
                      Chunnakam
                      <br />
                      {language === "en" ? "Sri Lanka" : "இலங்கை"}
                    </p>
                  </CardContent>
                </Card>

                <Card style={{ backgroundColor: '#edf0fb' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      {language === "en" ? "Email" : "மின்னஞ்சல்"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:vaazhvaham1988@gmail.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      vaazhvaham1988@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card style={{ backgroundColor: '#edf0fb' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      {language === "en" ? "Phone" : "தொலைபேசி"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <a href="tel:+94212240146" className="hover:text-primary transition-colors">
                          +94 21 224 0146
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+94212240236" className="hover:text-primary transition-colors">
                          +94 21 224 0236
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a href="tel:+94768286331" className="hover:text-primary transition-colors">
                          +94 76 828 6331
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card style={{ backgroundColor: '#edf0fb' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border">
                        <Phone className="h-5 w-5 text-green-500" />
                      </div>
                      {language === "en" ? "WhatsApp" : "வாட்ஸ்அப்"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="https://wa.me/94768286331"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-green-500 transition-colors flex items-center gap-2"
                    >
                      +94 76 828 6331
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
              {language === "en" ? "Find Us" : "எங்களைக் கண்டுபிடியுங்கள்"}
            </h2>
            <div className="overflow-hidden rounded-lg border">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.371848091014!2d80.0237250750277!3d9.734535290357758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe54be7168d28f%3A0x1359052178bca8a!2zVmFhemh2YWhhbSDgrrXgrr7grrTgr43grrXgrpXgrq7gr40!5e0!3m2!1sen!2slk!4v1767371005370!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={language === "en" ? "Vaazhvaham Location" : "வாழ்வகம் இருப்பிடம்"}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
