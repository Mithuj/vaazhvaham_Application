import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename with timestamp
    const timestamp = Date.now()
    const originalName = file.name.replace(/\s+/g, '_') // Replace spaces with underscores
    const filename = `news_${timestamp}_${originalName}`

    // Define path to public folder
    const publicPath = join(process.cwd(), 'public', filename)

    // Write file to public folder
    await writeFile(publicPath, buffer)

    return NextResponse.json(
      { 
        success: true, 
        filename: filename,
        message: 'Image uploaded successfully'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}
