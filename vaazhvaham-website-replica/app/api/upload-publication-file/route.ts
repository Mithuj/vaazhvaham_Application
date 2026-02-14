import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get('image') as File | null
    const pdf = formData.get('pdf') as File | null
    
    const results: { imageFilename?: string; pdfFilename?: string } = {}

    // Upload image if provided
    if (image) {
      const bytes = await image.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const timestamp = Date.now()
      const originalName = image.name.replace(/\s+/g, '_')
      const filename = `publication_image_${timestamp}_${originalName}`
      const imagePath = join(process.cwd(), 'app', 'images-to-show', filename)
      await writeFile(imagePath, buffer)
      results.imageFilename = filename
    }

    // Upload PDF if provided
    if (pdf) {
      const bytes = await pdf.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const timestamp = Date.now()
      const originalName = pdf.name.replace(/\s+/g, '_')
      const filename = `publication_pdf_${timestamp}_${originalName}`
      const pdfPath = join(process.cwd(), 'app', 'images-to-show', filename)
      await writeFile(pdfPath, buffer)
      results.pdfFilename = filename
    }

    if (!image && !pdf) {
      return NextResponse.json(
        { error: 'No files uploaded' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        ...results,
        message: 'Files uploaded successfully'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error uploading files:', error)
    return NextResponse.json(
      { error: 'Failed to upload files' },
      { status: 500 }
    )
  }
}
