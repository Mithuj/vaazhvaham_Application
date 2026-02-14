"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Footer } from "@/components/footer"

type EventItem = {
  id: string
  event_heading_english: string
  event_heading_tamil: string
  event_gallery_code: string[]
  date: string
  event_english_paragraph: string
  event_tamil_paragraph: string
  person_id: string
  person_type: string
}

export default function EditEventPage() {
  const router = useRouter()
  const [showHeadingForm, setShowHeadingForm] = useState(false)
  const [showParagraphForm, setShowParagraphForm] = useState(false)
  const [allEvents, setAllEvents] = useState<EventItem[]>([])
  const [selectedEventId, setSelectedEventId] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [hasPermission, setHasPermission] = useState(false)
  
  const [formData, setFormData] = useState({
    headingEnglish: "",
    headingTamil: "",
    newImages: [] as File[],
    existingImages: [] as string[],
    eventDate: "",
    paragraphEnglish: "",
    paragraphTamil: ""
  })

  // Fetch all events on component mount using supabase client (which uses .env)
  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId')
    const storedRole = sessionStorage.getItem('userRole')
    const storedPermission = sessionStorage.getItem('userPermission')
    
    setUserId(storedUserId)
    setUserRole(storedRole)
    setHasPermission(storedPermission === 'Yes')
    
    fetchAllEvents(storedUserId, storedRole, storedPermission === 'Yes')
  }, [])

  const fetchAllEvents = async (currentUserId: string | null, currentRole: string | null, permission: boolean) => {
    try {
      let query = supabase
        .from('eventmanagement')
        .select('*')
        .order('created_at', { ascending: false })

      // Filter based on role and permission
      // Admin or users with permission can edit all events
      // Staff without permission CANNOT edit - show empty list
      // Management without permission can only edit their own events
      if (currentRole === 'lecturer' || currentRole === 'staff') {
        if (!permission) {
          // Staff without permission cannot edit - show empty list
          setAllEvents([])
          setMessage({ type: 'error', text: 'You do not have permission to edit events. Contact admin for access.' })
          return
        }
        // Staff with permission can edit all events (no filter needed)
      } else if ((currentRole === 'student' || currentRole === 'management') && !permission && currentUserId) {
        // Management without permission can only edit their own events
        query = query.eq('person_id', currentUserId)
      }
      // Admin or users with permission see all events (no filter)

      const { data, error } = await query

      if (error) {
        console.error('Error fetching events:', error)
        setMessage({ type: 'error', text: 'Failed to load event items' })
      } else if (data) {
        setAllEvents(data)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
    }
  }

  const handleEventSelection = (eventId: string) => {
    setSelectedEventId(eventId)
    setMessage(null)
    
    const selectedEvent = allEvents.find(e => e.id === eventId)
    
    if (selectedEvent) {
      setFormData({
        headingEnglish: selectedEvent.event_heading_english,
        headingTamil: selectedEvent.event_heading_tamil,
        newImages: [],
        existingImages: selectedEvent.event_gallery_code || [],
        eventDate: selectedEvent.date,
        paragraphEnglish: selectedEvent.event_english_paragraph,
        paragraphTamil: selectedEvent.event_tamil_paragraph
      })
      setShowHeadingForm(true)
      setShowParagraphForm(true)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    if (!selectedEventId) {
      setMessage({ type: 'error', text: 'Please select an event item first' })
      setLoading(false)
      return
    }

    try {
      const allImageFileNames = [...formData.existingImages]

      // Upload new images if any
      if (formData.newImages && formData.newImages.length > 0) {
        for (const image of formData.newImages) {
          const formDataToSend = new FormData()
          formDataToSend.append('image', image)
          
          const uploadResponse = await fetch('/api/upload-event-image', {
            method: 'POST',
            body: formDataToSend
          })
          
          if (!uploadResponse.ok) {
            throw new Error(`Failed to upload image: ${image.name}`)
          }
          
          const uploadResult = await uploadResponse.json()
          allImageFileNames.push(uploadResult.filename)
        }
      }

      // Update event data in eventmanagement table using supabase client
      const { error } = await supabase
        .from('eventmanagement')
        .update({
          event_heading_english: formData.headingEnglish,
          event_heading_tamil: formData.headingTamil,
          event_gallery_code: allImageFileNames,
          date: formData.eventDate,
          event_english_paragraph: formData.paragraphEnglish,
          event_tamil_paragraph: formData.paragraphTamil
        })
        .eq('id', selectedEventId)

      if (error) {
        console.error('Database error:', error)
        setMessage({ type: 'error', text: 'Failed to update event' })
      } else {
        setMessage({ type: 'success', text: 'Event updated successfully!' })
        // Refresh events list
        fetchAllEvents(userId, userRole, hasPermission)
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred' })
    } finally {
      setLoading(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files)
      setFormData({ ...formData, newImages: [...formData.newImages, ...filesArray] })
    }
  }

  const removeNewImage = (index: number) => {
    const newImages = formData.newImages.filter((_, i) => i !== index)
    setFormData({ ...formData, newImages })
  }

  const removeExistingImage = async (filename: string) => {
    const newExistingImages = formData.existingImages.filter(img => img !== filename)
    setFormData({ ...formData, existingImages: newExistingImages })
    
    // Delete the file from server
    try {
      await fetch('/api/delete-file', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: filename.trim() })
      })
    } catch (error) {
      console.warn('Failed to delete image:', error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-3 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 relative">
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-3 sm:top-6 sm:left-6 md:top-8 md:left-8 flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors z-10 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="text-sm sm:text-base hidden sm:inline">Back</span>
      </button>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 mt-12 sm:mt-14 md:mt-16 px-4">
        Edit Event
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
            {/* Select Event Dropdown */}
            <div className="space-y-2 md:space-y-3">
              <Label htmlFor="eventSelect" className="text-sm sm:text-base font-medium">
                Select Event to Edit
              </Label>
              <Select onValueChange={handleEventSelection} value={selectedEventId}>
                <SelectTrigger className="h-10 sm:h-11 md:h-12 text-sm sm:text-base">
                  <SelectValue placeholder="Choose an event" />
                </SelectTrigger>
                <SelectContent>
                  {allEvents.map((event) => (
                    <SelectItem key={event.id} value={event.id}>
                      {event.event_heading_english}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedEventId && (
              <>
                <div className="space-y-4 md:space-y-5">
                  <Button
                    type="button"
                    variant={showHeadingForm ? "default" : "outline"}
                    onClick={() => setShowHeadingForm(!showHeadingForm)}
                    className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium transition-all"
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {showHeadingForm ? "Hide Heading Form" : "Edit Heading of Event"}
                  </Button>

                  {showHeadingForm && (
                    <Card className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-5 border-2 animate-in slide-in-from-top-2">
                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="headingEnglish" className="text-sm sm:text-base font-medium">
                          Event Heading in English
                        </Label>
                        <Input
                          id="headingEnglish"
                          type="text"
                          placeholder="Enter event heading in English"
                          value={formData.headingEnglish}
                          onChange={(e) => setFormData({ ...formData, headingEnglish: e.target.value })}
                          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                        />
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="headingTamil" className="text-sm sm:text-base font-medium">
                          Event Heading in Tamil
                        </Label>
                        <Input
                          id="headingTamil"
                          type="text"
                          placeholder="Enter event heading in Tamil"
                          value={formData.headingTamil}
                          onChange={(e) => setFormData({ ...formData, headingTamil: e.target.value })}
                          className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                        />
                      </div>
                    </Card>
                  )}
                </div>

                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="images" className="text-sm sm:text-base font-medium">
                    Event Images
                  </Label>
                  
                  {/* Existing Images */}
                  {formData.existingImages.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Current images:</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {formData.existingImages.map((filename, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={`/api/images-to-show/${filename}`}
                              alt={`Existing ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg border-2 border-border"
                            />
                            <button
                              type="button"
                              onClick={() => removeExistingImage(filename)}
                              className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ×
                            </button>
                            <p className="text-xs mt-1 truncate">{filename}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add New Images */}
                  <Input
                    id="images"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="h-10 sm:h-11 md:h-12 text-sm sm:text-base cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                  />
                  
                  {/* New Images Preview */}
                  {formData.newImages.length > 0 && (
                    <div className="mt-3">
                      <p className="text-sm text-green-600 mb-2">New images to be added ({formData.newImages.length}):</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {formData.newImages.map((file, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`New ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg border-2 border-green-500"
                            />
                            <button
                              type="button"
                              onClick={() => removeNewImage(index)}
                              className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ×
                            </button>
                            <p className="text-xs mt-1 truncate">{file.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2 md:space-y-3">
                  <Label htmlFor="eventDate" className="text-sm sm:text-base font-medium">
                    Select the Event Date
                  </Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-4 md:space-y-5">
                  <Button
                    type="button"
                    variant={showParagraphForm ? "default" : "outline"}
                    onClick={() => setShowParagraphForm(!showParagraphForm)}
                    className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-medium transition-all"
                  >
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {showParagraphForm ? "Hide Paragraph Form" : "Edit the Paragraph"}
                  </Button>

                  {showParagraphForm && (
                    <Card className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-5 border-2 animate-in slide-in-from-top-2">
                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="paragraphEnglish" className="text-sm sm:text-base font-medium">
                          Event Paragraph in English
                        </Label>
                        <Textarea
                          id="paragraphEnglish"
                          placeholder="Enter event paragraph in English"
                          value={formData.paragraphEnglish}
                          onChange={(e) => setFormData({ ...formData, paragraphEnglish: e.target.value })}
                          rows={5}
                          className="text-sm sm:text-base min-h-[120px] sm:min-h-[140px] md:min-h-[160px] resize-y"
                        />
                      </div>

                      <div className="space-y-2 md:space-y-3">
                        <Label htmlFor="paragraphTamil" className="text-sm sm:text-base font-medium">
                          Event Paragraph in Tamil
                        </Label>
                        <Textarea
                          id="paragraphTamil"
                          placeholder="Enter event paragraph in Tamil"
                          value={formData.paragraphTamil}
                          onChange={(e) => setFormData({ ...formData, paragraphTamil: e.target.value })}
                          rows={5}
                          className="text-sm sm:text-base min-h-[120px] sm:min-h-[140px] md:min-h-[160px] resize-y"
                        />
                      </div>
                    </Card>
                  )}
                </div>

                <div className="pt-4 sm:pt-6 md:pt-8">
                  <Button 
                    type="submit" 
                    className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
                    disabled={loading}
                  >
                    {loading ? 'Updating...' : 'Update Event'}
                  </Button>
                </div>
              </>
            )}
          </form>
        </Card>
      </div>
      <div className="mt-32 md:mt-40 lg:mt-48"><Footer /></div>
    </div>
  )
}
