"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

type PublicationItem = {
  id: string
  publication_heading_english: string
  publication_gallery_code: string
  pdf_code: string
}

export default function DeletePublicationPage() {
  const router = useRouter()
  const [allPublications, setAllPublications] = useState<PublicationItem[]>([])
  const [selectedPublicationId, setSelectedPublicationId] = useState<string>("")
  const [selectedPublication, setSelectedPublication] = useState<PublicationItem | null>(null)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [hasPermission, setHasPermission] = useState(false)

  // Fetch all publications on component mount using supabase client (which uses .env)
  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId')
    const storedRole = sessionStorage.getItem('userRole')
    const storedPermission = sessionStorage.getItem('userPermission')
    
    setUserId(storedUserId)
    setUserRole(storedRole)
    setHasPermission(storedPermission === 'Yes')
    
    fetchAllPublications(storedUserId, storedRole, storedPermission === 'Yes')
  }, [])

  const fetchAllPublications = async (currentUserId: string | null, currentRole: string | null, permission: boolean) => {
    try {
      let query = supabase
        .from('publicationmanagement')
        .select('id, publication_heading_english, publication_gallery_code, pdf_code, person_id')
        .order('created_at', { ascending: false })

      // Filter based on role and permission
      // Admin or users with permission can delete all publications
      // Staff CANNOT delete (no delete option for staff)
      // Management without permission can only delete their own publications
      if (currentRole === 'lecturer' || currentRole === 'staff') {
        if (!permission) {
          // Staff without permission cannot delete - show empty list
          setAllPublications([])
          setMessage({ type: 'error', text: 'You do not have permission to delete publications. Contact admin for access.' })
          return
        }
        // Staff with permission can delete all publications (no filter needed)
      } else if ((currentRole === 'student' || currentRole === 'management') && !permission && currentUserId) {
        // Management without permission can only delete their own publications
        query = query.eq('person_id', currentUserId)
      }
      // Admin or users with permission see all publications (no filter)

      const { data, error } = await query

      if (error) {
        console.error('Error fetching publications:', error)
        setMessage({ type: 'error', text: 'Failed to load publication items' })
      } else if (data) {
        setAllPublications(data)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  const handlePublicationSelection = (publicationId: string) => {
    setSelectedPublicationId(publicationId)
    setMessage(null)
    setConfirmDelete(false)
    
    const publication = allPublications.find(p => p.id === publicationId)
    setSelectedPublication(publication || null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedPublicationId || !selectedPublication) {
      setMessage({ type: 'error', text: 'Please select a publication item first' })
      return
    }

    if (!confirmDelete) {
      setMessage({ type: 'error', text: 'Please confirm deletion by checking the box' })
      return
    }

    setLoading(true)
    setMessage(null)

    try {
      // Delete from database using supabase client
      const { error: dbError } = await supabase
        .from('publicationmanagement')
        .delete()
        .eq('id', selectedPublicationId)

      if (dbError) {
        console.error('Database error:', dbError)
        setMessage({ type: 'error', text: `Error: ${dbError.message}` })
        setLoading(false)
        return
      }

      // Delete image file from images-to-show folder if it exists
      if (selectedPublication.publication_gallery_code && selectedPublication.publication_gallery_code.trim() !== '') {
        try {
          const deleteResponse = await fetch('/api/delete-file', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: selectedPublication.publication_gallery_code.trim() })
          })

          if (!deleteResponse.ok) {
            console.warn('Failed to delete image file, but database record was deleted')
          }
        } catch (imageError) {
          console.warn('Error deleting image:', imageError)
        }
      }

      // Delete PDF file from images-to-show folder if it exists
      if (selectedPublication.pdf_code && selectedPublication.pdf_code.trim() !== '') {
        try {
          const deleteResponse = await fetch('/api/delete-file', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: selectedPublication.pdf_code.trim() })
          })

          if (!deleteResponse.ok) {
            console.warn('Failed to delete PDF file, but database record was deleted')
          }
        } catch (pdfError) {
          console.warn('Error deleting PDF:', pdfError)
        }
      }

      setMessage({ type: 'success', text: 'Publication deleted successfully!' })
      setSelectedPublicationId("")
      setSelectedPublication(null)
      setConfirmDelete(false)
      await fetchAllPublications(userId, userRole, hasPermission)
    } catch (error) {
      console.error('Unexpected error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-background relative">
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-3 sm:top-6 sm:left-6 md:top-8 md:left-8 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors z-10 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-sm sm:text-base hidden sm:inline">Back</span>
      </button>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 mt-12 sm:mt-14 md:mt-16 px-4">
        Delete Publication
      </h1>

      {message && (
        <div className={`w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message.text}
        </div>
      )}

      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
        <Card className="p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 md:space-y-8">
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="publicationSelect" className="text-sm sm:text-base font-medium">
                Select Publication to Delete
              </Label>
              <Select onValueChange={handlePublicationSelection} value={selectedPublicationId}>
                <SelectTrigger className="h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                  <SelectValue placeholder="Choose a publication" />
                </SelectTrigger>
                <SelectContent>
                  {allPublications.map((publication) => (
                    <SelectItem key={publication.id} value={publication.id}>
                      {publication.publication_heading_english}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedPublication && (
              <>
                <Card className="p-4 sm:p-5 md:p-6 bg-red-50 border border-red-200">
                  <p className="text-sm sm:text-base text-red-800 font-medium">
                    Warning: This action cannot be undone. The publication "{selectedPublication.publication_heading_english}" will be permanently deleted.
                  </p>
                </Card>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="confirm"
                    checked={confirmDelete}
                    onCheckedChange={(checked) => setConfirmDelete(checked as boolean)}
                  />
                  <label
                    htmlFor="confirm"
                    className="text-sm sm:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    I confirm that I want to delete this publication
                  </label>
                </div>

                <div className="pt-4 sm:pt-6 md:pt-8">
                  <Button 
                    type="submit" 
                    className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all bg-red-600 hover:bg-red-700"
                    disabled={loading || !confirmDelete}
                  >
                    {loading ? 'Deleting...' : 'Delete Publication'}
                  </Button>
                </div>
              </>
            )}
          </form>
        </Card>
      </div>
    </div>
  )
}
