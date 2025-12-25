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
    pathname === "/adminnewsmanagement" ||
    pathname === "/admineventmanagement" ||
    pathname === "/adminpublicationmanagement" ||
    pathname === "/staffnewsmanagement" ||
    pathname === "/staffeventmanagement" ||
    pathname === "/staffpublicationmanagement" ||
    pathname === "/managementnewsmanagement" ||
    pathname === "/managementeventmanagement" ||
    pathname === "/managementpublicationmanagement" ||
    pathname === "/addstaff" ||
    pathname === "/editstaff" ||
    pathname === "/addnews" ||
    pathname === "/editnews" ||
    pathname === "/deletenews" ||
    pathname === "/addpublication" ||
    pathname === "/editpublication" ||
    pathname === "/deletepublication" ||
    pathname === "/addevent" ||
    pathname === "/editevent" ||
    pathname === "/deleteevent"

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
