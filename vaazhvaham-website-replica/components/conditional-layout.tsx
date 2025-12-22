"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideHeaderFooter = 
    pathname === "/selectrole" || 
    pathname === "/admindashboard" || 
    pathname === "/staffdashboard" || 
    pathname === "/managementdashboard" ||
    pathname === "/staffmanagement" ||
    pathname === "/newsmanagement" ||
    pathname === "/eventmanagement" ||
    pathname === "/publicationmanagement" ||
    pathname === "/addstaff" ||
    pathname === "/editstaff" ||
    pathname === "/permissionhandling"

  if (hideHeaderFooter) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
