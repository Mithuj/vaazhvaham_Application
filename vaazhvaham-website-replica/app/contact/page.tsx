"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [language] = useState<"en" | "ta">("en")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              {language === "en" ? "Contact Us" : "தொடர்பு கொள்ளுங்கள்"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Get in touch with us for inquiries, support, or to learn more about our programs"
                : "விசாரணைகள், ஆதரவு அல்லது எங்கள் திட்டங்கள் பற்றி மேலும் அறிய எங்களைத் தொடர்பு கொள்ளுங்கள்"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">
                {language === "en" ? "Get in Touch" : "தொடர்பில் இருங்கள்"}
              </h2>

              <div className="space-y-6">
                <Card>
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

                <Card>
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

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      {language === "en" ? "Phone" : "தொலைபேசி"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+94 21 222 3456</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      {language === "en" ? "Office Hours" : "அலுவலக நேரம்"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === "en" ? "Monday - Friday:" : "திங்கள் - வெள்ளி:"} 9:00 AM - 5:00 PM
                      <br />
                      {language === "en" ? "Saturday:" : "சனி:"} 9:00 AM - 1:00 PM
                      <br />
                      {language === "en" ? "Sunday:" : "ஞாயிறு:"} {language === "en" ? "Closed" : "மூடப்பட்டுள்ளது"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight">
                {language === "en" ? "Send us a Message" : "எங்களுக்கு ஒரு செய்தியை அனுப்புங்கள்"}
              </h2>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{language === "en" ? "First Name" : "முதல் பெயர்"}</Label>
                        <Input id="firstName" placeholder={language === "en" ? "John" : "ராஜா"} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{language === "en" ? "Last Name" : "கடைசி பெயர்"}</Label>
                        <Input id="lastName" placeholder={language === "en" ? "Doe" : "குமார்"} required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{language === "en" ? "Email" : "மின்னஞ்சல்"}</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{language === "en" ? "Phone" : "தொலைபேசி"}</Label>
                      <Input id="phone" type="tel" placeholder="+94 xxx xxx xxx" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">{language === "en" ? "Subject" : "பொருள்"}</Label>
                      <Input
                        id="subject"
                        placeholder={language === "en" ? "How can we help you?" : "நாங்கள் உங்களுக்கு எப்படி உதவ முடியும்?"}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{language === "en" ? "Message" : "செய்தி"}</Label>
                      <Textarea
                        id="message"
                        placeholder={
                          language === "en"
                            ? "Please provide details about your inquiry..."
                            : "உங்கள் விசாரணை பற்றிய விவரங்களை வழங்கவும்..."
                        }
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      {language === "en" ? "Send Message" : "செய்தியை அனுப்பவும்"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
              {language === "en" ? "Find Us" : "எங்களைக் கண்டுபிடியுங்கள்"}
            </h2>
            <div className="overflow-hidden rounded-lg border bg-muted">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.856897834!2d80.0!3d9.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDInMDAuMCJOIDgwwrAwMCcwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={language === "en" ? "Vaazhvaham Location" : "வாழ்வஹம் இருப்பிடம்"}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
