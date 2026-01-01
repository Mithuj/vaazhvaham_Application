"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

type PublicationItem = {
  id: string
  publication_heading_english: string
  publication_heading_tamil: string
  year: number
  publication_gallery_code: string
  pdf_code: string
  person_id: string
  person_type: string
}

export default function EditPublicationPage() {
  const router = useRouter()
  const [showHeadingForm, setShowHeadingForm] = useState(false)
  const [allPublications, setAllPublications] = useState<PublicationItem[]>([])
  const [selectedPublicationId, setSelectedPublicationId] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [hasPermission, setHasPermission] = useState(false)
  
  const [formData, setFormData] = useState({
    headingEnglish: "",
    headingTamil: "",
    year: "",
    image: null as File | null,
    pdf: null as File | null,
    existingImage: "",
    existingPdf: ""
  })

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
        .select('*')
        .order('created_at', { ascending: false })

      // Filter based on role and permission
      // Admin or users with permission can see all publications
      // Staff and Management without permission can only see their own publications
      if (currentRole !== 'administrator' && currentRole !== 'admin' && !permission && currentUserId) {
        query = query.eq('person_id', currentUserId)
      }

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
    
    const selectedPublication = allPublications.find(p => p.id === publicationId)
    
    if (selectedPublication) {
      setFormData({
        headingEnglish: selectedPublication.publication_heading_english,
        headingTamil: selectedPublication.publication_heading_tamil,
        year: selectedPublication.year.toString(),
        image: null,
        pdf: null,
        existingImage: selectedPublication.publication_gallery_code,
        existingPdf: selectedPublication.pdf_code
      })
      setShowHeadingForm(true)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    if (!selectedPublicationId) {
      setMessage({ type: 'error', text: 'Please select a publication item first' })
      setLoading(false)
      return
    }

    try {
      let imageFileName = formData.existingImage
      let pdfFileName = formData.existingPdf

      // If new files are uploaded, save them and delete the old ones
      if (formData.image || formData.pdf) {
        const formDataToSend = new FormData()
        if (formData.image) formDataToSend.append('image', formData.image)
        if (formData.pdf) formDataToSend.append('pdf', formData.pdf)
        
        const uploadResponse = await fetch('/api/upload-publication-file', {
          method: 'POST',
          body: formDataToSend
        })
        
        if (!uploadResponse.ok) {
          throw new Error('Failed to upload files')
        }
        
        const uploadResult = await uploadResponse.json()
        
        // Handle image update and deletion
        if (uploadResult.imageFilename) {
          const newImageFilename = uploadResult.imageFilename
          // Delete old image if it exists and is different from new one
          if (formData.existingImage && formData.existingImage.trim() !== '' && formData.existingImage !== newImageFilename) {
            try {
              await fetch('/api/delete-file', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ filename: formData.existingImage.trim() })
              })
            } catch (deleteError) {
              console.warn('Failed to delete old image:', deleteError)
            }
          }
          imageFileName = newImageFilename
        }
        
        // Handle PDF update and deletion
        if (uploadResult.pdfFilename) {
          const newPdfFilename = uploadResult.pdfFilename
          // Delete old PDF if it exists and is different from new one
          if (formData.existingPdf && formData.existingPdf.trim() !== '' && formData.existingPdf !== newPdfFilename) {
            try {
              await fetch('/api/delete-file', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ filename: formData.existingPdf.trim() })
              })
            } catch (deleteError) {
              console.warn('Failed to delete old PDF:', deleteError)
            }
          }
          pdfFileName = newPdfFilename
        }
      }

      // Update publication data in publicationmanagement table using supabase client
      const { error } = await supabase
        .from('publicationmanagement')
        .update({
          publication_heading_english: formData.headingEnglish,
          publication_heading_tamil: formData.headingTamil,
          year: parseInt(formData.year),
          publication_gallery_code: imageFileName,
          pdf_code: pdfFileName
        })
        .eq('id', selectedPublicationId)

      if (error) {
        console.error('Database error:', error)
        setMessage({ type: 'error', text: 'Failed to update publication' })
      } else {
        setMessage({ type: 'success', text: 'Publication updated successfully!' })
        // Refresh publications list
        fetchAllPublications(userId, userRole, hasPermission)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred' })
    } finally {
      setLoading(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] })
    }
  }

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, pdf: e.target.files[0] })
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
        Edit Publication
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
            {/* Select Publication Dropdown */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="publicationSelect" className="text-sm sm:text-base font-medium">
                Select Publication to Edit
              </Label>
              <Select onValueChange={handlePublicationSelection} value={selectedPublicationId}>
                <SelectTrigger className="h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                  <SelectValue placeholder="Choose a publication" />
                </SelectTrigger>
                <SelectContent>
                  {allPublications.map((publication) => (
                    <SelectItem key={publication.id} value={publication.id}>
                      {publication.publication_heading_english} ({publication.year})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedPublicationId && (
              <>
                <div className="space-y-4 md:space-y-5">
                  <Button
                    type="button"
                    variant={showHeadingForm ? "default" : "outline"}
                    onClick={() => setShowHeadingForm(!showHeadingForm)}
                    className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium transition-all"
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {showHeadingForm ? "Hide Heading Form" : "Edit Heading of Publication"}
                  </Button>

                  {showHeadingForm && (
                    <Card className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-5 bg-muted/50 border-2 animate-in slide-in-from-top-2">
                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="headingEnglish" className="text-sm sm:text-base font-medium">
                          Publication Heading in English
                        </Label>
                        <Input
                          id="headingEnglish"
                          type="text"
                          placeholder="Enter publication heading in English"
                          value={formData.headingEnglish}
                          onChange={(e) => setFormData({ ...formData, headingEnglish: e.target.value })}
                          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                        />
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="headingTamil" className="text-sm sm:text-base font-medium">
                          Publication Heading in Tamil
                        </Label>
                        <Input
                          id="headingTamil"
                          type="text"
                          placeholder="Enter publication heading in Tamil"
                          value={formData.headingTamil}
                          onChange={(e) => setFormData({ ...formData, headingTamil: e.target.value })}
                          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                        />
                      </div>
                    </Card>
                  )}
                </div>

                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="year" className="text-sm sm:text-base font-medium">
                    Publication Year
                  </Label>
                  <Input
                    id="year"
                    type="number"
                    placeholder="Enter year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    min="1900"
                    max="2100"
                    className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="image" className="text-sm sm:text-base font-medium">
                    Add New Image (Optional)
                  </Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="h-10 sm:h-11 md:h-12 text-sm sm:text-base cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  {formData.existingImage && (
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-1">
                      Current image: {formData.existingImage}
                    </p>
                  )}
                  {formData.image && (
                    <p className="text-xs sm:text-sm text-green-600 mt-2 px-1">
                      ✓ New image selected: {formData.image.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="pdf" className="text-sm sm:text-base font-medium">
                    Add New PDF (Optional)
                  </Label>
                  <Input
                    id="pdf"
                    type="file"
                    accept="application/pdf"
                    onChange={handlePdfChange}
                    className="h-10 sm:h-11 md:h-12 text-sm sm:text-base cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  {formData.existingPdf && (
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-1">
                      Current PDF: {formData.existingPdf}
                    </p>
                  )}
                  {formData.pdf && (
                    <p className="text-xs sm:text-sm text-green-600 mt-2 px-1">
                      ✓ New PDF selected: {formData.pdf.name}
                    </p>
                  )}
                </div>

                <div className="pt-4 sm:pt-6 md:pt-8">
                  <Button 
                    type="submit" 
                    className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
                    disabled={loading}
                  >
                    {loading ? 'Updating...' : 'Update Publication'}
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
