"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AddEventPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background relative">
      {/* Back Button */}
      <Link
        href="/eventmanagement"
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="hidden sm:inline">Back</span>
      </Link>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        Add Event
      </h1>

      {/* Content will be added here */}
      <div className="w-full max-w-4xl mx-auto">
        <p className="text-center text-muted-foreground">Add event form coming soon...</p>
      </div>
    </div>
  )
}
