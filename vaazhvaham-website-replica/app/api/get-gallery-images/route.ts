import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function GET() {
  try {
    const imagesDir = join(process.cwd(), 'app', 'images-to-show')

    // Check if directory exists
    if (!existsSync(imagesDir)) {
      return NextResponse.json({ images: [] }, { status: 200 })
    }

    // Read all files from the directory
    const files = await readdir(imagesDir)

    // Filter only image files (jpg, jpeg, png, gif, webp)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const imageFiles = files.filter(file => {
      const ext = file.toLowerCase().substring(file.lastIndexOf('.'))
      return imageExtensions.includes(ext)
    })

    // Sort by filename (newest first if timestamps are used)
    imageFiles.sort().reverse()

    return NextResponse.json(
      { 
        images: imageFiles,
        count: imageFiles.length
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error reading gallery images:', error)
    return NextResponse.json(
      { error: 'Failed to load gallery images', images: [] },
      { status: 500 }
    )
  }
}
