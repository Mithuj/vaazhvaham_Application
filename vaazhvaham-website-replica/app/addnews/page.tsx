"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function AddNewsPage() {
  const router = useRouter()
  const [showHeadingForm, setShowHeadingForm] = useState(false)
  const [showParagraphForm, setShowParagraphForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [userRole, setUserRole] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    headingEnglish: "",
    headingTamil: "",
    image: null as File | null,
    newsDate: "",
    paragraphEnglish: "",
    paragraphTamil: ""
  })

  // Get logged-in user info from sessionStorage
  useEffect(() => {
    const email = sessionStorage.getItem('userEmail')
    const role = sessionStorage.getItem('userRole')
    
    if (!email || !role) {
      setMessage({ type: 'error', text: 'Please login first' })
      return
    }
    
    setUserRole(role)
    
    // Fetch user ID from the correct table using supabase client (which uses .env)
    const fetchUserId = async () => {
      let tableName = ''
      // Handle both 'admin' and 'administrator' role values
      if (role === 'admin' || role === 'administrator') tableName = 'admin'
      else if (role === 'staff') tableName = 'staff'
      else if (role === 'management') tableName = 'managementstaff'
      
      // Validate tableName is not empty
      if (!tableName) {
        console.error('Invalid role:', role)
        setMessage({ type: 'error', text: 'Invalid user role. Please login again.' })
        return
      }
      
      // Query using supabase client (which uses process.env variables from .env.local)
      const { data, error } = await supabase
        .from(tableName)
        .select('id')
        .eq('email_address', email)
        .single()
      
      if (error) {
        console.error('Error fetching user ID:', error)
        setMessage({ type: 'error', text: 'Failed to get user information' })
      } else if (data) {
        setUserId(data.id)
      }
    }
    
    fetchUserId()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    if (!userId) {
      setMessage({ type: 'error', text: 'User ID not found. Please login again.' })
      setLoading(false)
      return
    }

    // Validate all required fields
    if (!formData.headingEnglish || !formData.headingTamil) {
      setMessage({ type: 'error', text: 'Please fill both English and Tamil headings' })
      setLoading(false)
      return
    }

    if (!formData.image) {
      setMessage({ type: 'error', text: 'Please select an image' })
      setLoading(false)
      return
    }

    if (!formData.newsDate) {
      setMessage({ type: 'error', text: 'Please select a news date' })
      setLoading(false)
      return
    }

    if (!formData.paragraphEnglish || !formData.paragraphTamil) {
      setMessage({ type: 'error', text: 'Please fill both English and Tamil paragraphs' })
      setLoading(false)
      return
    }

    try {
      let imageFileName = ''
      
      // Handle image upload to public folder
      if (formData.image) {
        const formDataToSend = new FormData()
        formDataToSend.append('image', formData.image)
        
        // Upload image to public folder via API route
        const uploadResponse = await fetch('/api/upload-news-image', {
          method: 'POST',
          body: formDataToSend
        })
        
        if (!uploadResponse.ok) {
          throw new Error('Failed to upload image')
        }
        
        const uploadResult = await uploadResponse.json()
        imageFileName = uploadResult.filename
      }

      // Determine person type for tracking
      let personType = 'admin'
      if (userRole === 'staff') personType = 'staff'
      else if (userRole === 'management') personType = 'managementstaff'
      else if (userRole === 'admin' || userRole === 'administrator') personType = 'admin'

      // Insert news data into newsmanagement table using supabase client
      const { data, error } = await supabase
        .from('newsmanagement')
        .insert([{
          news_heading_english: formData.headingEnglish,
          news_heading_tamil: formData.headingTamil,
          news_gallery_code: imageFileName,
          date: formData.newsDate,
          news_english_paragraph: formData.paragraphEnglish,
          news_tamil_paragraph: formData.paragraphTamil,
          person_id: userId,
          person_type: personType
        }])
        .select()

      if (error) {
        console.error('Database error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
          fullError: error
        })
        setMessage({ type: 'error', text: `Error: ${error.message || 'Failed to add news. Please check console for details.'}` })
      } else {
        console.log('News added successfully:', data)
        setMessage({ type: 'success', text: 'News added successfully!' })
        // Reset form
        setFormData({
          headingEnglish: "",
          headingTamil: "",
          image: null,
          newsDate: "",
          paragraphEnglish: "",
          paragraphTamil: ""
        })
        setShowHeadingForm(false)
        setShowParagraphForm(false)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] })
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 bg-background relative">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-3 sm:top-6 sm:left-6 md:top-8 md:left-8 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors z-10 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-sm sm:text-base hidden sm:inline">Back</span>
      </button>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 mt-12 sm:mt-14 md:mt-16 px-4">
        Add News
      </h1>

      {/* Message Display */}
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
            {/* Add Heading of News Button */}
            <div className="space-y-4 md:space-y-5">
              <Button
                type="button"
                variant={showHeadingForm ? "default" : "outline"}
                onClick={() => setShowHeadingForm(!showHeadingForm)}
                className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium transition-all"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                {showHeadingForm ? "Hide Heading Form" : "Add Heading of News"}
              </Button>

              {/* Heading Sub-form */}
              {showHeadingForm && (
                <Card className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-5 bg-muted/50 border-2 animate-in slide-in-from-top-2">
                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="headingEnglish" className="text-sm sm:text-base font-medium">
                      News Heading in English
                    </Label>
                    <Input
                      id="headingEnglish"
                      type="text"
                      placeholder="Enter news heading in English"
                      value={formData.headingEnglish}
                      onChange={(e) => setFormData({ ...formData, headingEnglish: e.target.value })}
                      className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="headingTamil" className="text-sm sm:text-base font-medium">
                      News Heading in Tamil
                    </Label>
                    <Input
                      id="headingTamil"
                      type="text"
                      placeholder="Enter news heading in Tamil"
                      value={formData.headingTamil}
                      onChange={(e) => setFormData({ ...formData, headingTamil: e.target.value })}
                      className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                    />
                  </div>
                </Card>
              )}
            </div>

            {/* Add Image from Gallery */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="image" className="text-sm sm:text-base font-medium">
                Add Image from Gallery
              </Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="h-10 sm:h-11 md:h-12 text-sm sm:text-base cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {formData.image && (
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 px-1">
                  ✓ Selected: {formData.image.name}
                </p>
              )}
            </div>

            {/* Select News Date */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="newsDate" className="text-sm sm:text-base font-medium">
                Select the News Date
              </Label>
              <Input
                id="newsDate"
                type="date"
                value={formData.newsDate}
                onChange={(e) => setFormData({ ...formData, newsDate: e.target.value })}
                className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
              />
            </div>

            {/* Add Paragraph Button */}
            <div className="space-y-4 md:space-y-5">
              <Button
                type="button"
                variant={showParagraphForm ? "default" : "outline"}
                onClick={() => setShowParagraphForm(!showParagraphForm)}
                className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium transition-all"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                {showParagraphForm ? "Hide Paragraph Form" : "Add the Paragraph"}
              </Button>

              {/* Paragraph Sub-form */}
              {showParagraphForm && (
                <Card className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-5 bg-muted/50 border-2 animate-in slide-in-from-top-2">
                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="paragraphEnglish" className="text-sm sm:text-base font-medium">
                      News Paragraph in English
                    </Label>
                    <Textarea
                      id="paragraphEnglish"
                      placeholder="Enter news paragraph in English"
                      value={formData.paragraphEnglish}
                      onChange={(e) => setFormData({ ...formData, paragraphEnglish: e.target.value })}
                      rows={5}
                      className="text-sm sm:text-base min-h-[120px] sm:min-h-[140px] md:min-h-[160px] resize-y"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <Label htmlFor="paragraphTamil" className="text-sm sm:text-base font-medium">
                      News Paragraph in Tamil
                    </Label>
                    <Textarea
                      id="paragraphTamil"
                      placeholder="Enter news paragraph in Tamil"
                      value={formData.paragraphTamil}
                      onChange={(e) => setFormData({ ...formData, paragraphTamil: e.target.value })}
                      rows={5}
                      className="text-sm sm:text-base min-h-[120px] sm:min-h-[140px] md:min-h-[160px] resize-y"
                    />
                  </div>
                </Card>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6 md:pt-8">
              <Button 
                type="submit" 
                className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
                disabled={loading || !userId}
              >
                {loading ? 'Submitting...' : 'Submit News'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
