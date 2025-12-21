"use client"

import { Newspaper, Calendar, BookOpen } from "lucide-react"

export default function ManagementDashboardPage() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Management Dashboard
      </h1>
      
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Management */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
            <button className="relative w-full h-32 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-6 flex flex-col items-center justify-center gap-3">
              <Newspaper className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">News Management</span>
            </button>
          </div>
          
          {/* Event Management */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
            <button className="relative w-full h-32 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-6 flex flex-col items-center justify-center gap-3">
              <Calendar className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">Event Management</span>
            </button>
          </div>
          
          {/* Publication Management */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
            <button className="relative w-full h-32 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-6 flex flex-col items-center justify-center gap-3">
              <BookOpen className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">Publication Management</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
