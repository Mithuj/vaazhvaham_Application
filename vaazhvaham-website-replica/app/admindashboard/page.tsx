"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Newspaper, Calendar, BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"

export default function AdminDashboardPage() {
  const [userName, setUserName] = useState<string>("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showUnauthorizedError, setShowUnauthorizedError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const checkAuth = () => {
      const userRole = sessionStorage.getItem('userRole')
      const userId = sessionStorage.getItem('userId')
      
      // Redirect to selectrole if not authenticated or not admin
      if (!userRole || !userId || userRole !== 'administrator') {
        // Show error message first
        setShowUnauthorizedError(true)
        // Clear ALL storage
        sessionStorage.clear()
        localStorage.clear()
        // Redirect after showing error
        setTimeout(() => {
          window.location.replace('/selectrole')
        }, 2000)
        return false
      }
      return true
    }
    
    // Initial check
    if (!checkAuth()) {
      return
    }
    
    setIsAuthenticated(true)
    
    // Retrieve user name from sessionStorage (stored during login from Supabase)
    const name = sessionStorage.getItem('userName')
    if (name) {
      setUserName(name)
    }
    
    // Add listener for popstate (browser back/forward)
    const handlePopState = () => {
      if (!checkAuth()) {
        window.location.reload()
      }
    }
    
    // Add listener for visibility change (when user returns to tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (!checkAuth()) {
          window.location.reload()
        }
      }
    }
    
    // Add listener for page focus
    const handleFocus = () => {
      if (!checkAuth()) {
        window.location.reload()
      }
    }
    
    // Add beforeunload to prevent caching
    const handleBeforeUnload = () => {
      // Mark that we're leaving the page
      sessionStorage.setItem('pageLeft', 'true')
    }
    
    window.addEventListener('popstate', handlePopState)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('focus', handleFocus)
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    // Check if page was left before (came from cache)
    if (sessionStorage.getItem('pageLeft') === 'true') {
      sessionStorage.removeItem('pageLeft')
      if (!checkAuth()) {
        window.location.reload()
      }
    }
    
    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const handleBackClick = () => {
    // Clear session data when going back
    sessionStorage.clear()
    localStorage.clear()
    window.location.href = '/selectrole'
  }

  return (
    <>
      {/* Unauthorized Access Error Overlay */}
      {showUnauthorizedError && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-2xl max-w-md mx-4 text-center border-4 border-red-600">
            <div className="text-red-600 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Unauthorized Access</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              You do not have permission to access this page.
              <br />
              Please login with valid credentials.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
              <span>Redirecting to login...</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Dashboard Content - Only show if authenticated */}
      {isAuthenticated && (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative">
      {/* Back Button */}
      <Link
        href="/selectrole"
        onClick={handleBackClick}
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="hidden sm:inline">Back</span>
      </Link>

      {/* Welcome Message */}
      {userName && (
        <div className="mb-4 md:mb-6 text-center">
          <p className="text-lg md:text-xl text-muted-foreground">
            Welcome back,
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            {userName}
          </h2>
        </div>
      )}

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
        Admin Dashboard
      </h1>
      
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Staff Management */}
          <Card className="p-4">
            <Link href="/staffmanagement" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Users className="h-6 w-6 md:h-8 md:w-8" />
                <span>Staff Management</span>
              </Button>
            </Link>
          </Card>
          
          {/* News Management */}
          <Card className="p-4">
            <Link href="/adminnewsmanagement" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Newspaper className="h-6 w-6 md:h-8 md:w-8" />
                <span>News Management</span>
              </Button>
            </Link>
          </Card>
          
          {/* Event Management */}
          <Card className="p-4">
            <Link href="/admineventmanagement" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <Calendar className="h-6 w-6 md:h-8 md:w-8" />
                <span>Event Management</span>
              </Button>
            </Link>
          </Card>
          
          {/* Publication Management */}
          <Card className="p-4">
            <Link href="/adminpublicationmanagement" className="block">
              <Button className="w-full h-20 md:h-24 flex flex-col gap-2 text-base md:text-lg">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8" />
                <span>Publication Management</span>
              </Button>
            </Link>
          </Card>
        </div>
      </div>
      <div className="mt-32 md:mt-40 lg:mt-48"><Footer /></div>
    </div>
      )}
    </>
  )
}
