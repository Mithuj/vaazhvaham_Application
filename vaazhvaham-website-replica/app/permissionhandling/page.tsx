"use client"

import Link from "next/link"

export default function PermissionHandlingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background">
      <div className="w-full max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Page Not Available
        </h1>
        <p className="text-muted-foreground">
          Permission handling has been integrated into the staff forms.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}
