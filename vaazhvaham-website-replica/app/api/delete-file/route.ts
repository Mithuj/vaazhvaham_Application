import { NextRequest, NextResponse } from 'next/server'
import { unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const { filename } = await request.json()
    
    // Validate filename
    if (!filename || typeof filename !== 'string' || filename.trim() === '') {
      return NextResponse.json(
        { error: 'No valid filename provided' },
        { status: 400 }
      )
    }

    // Trim whitespace and validate
    const cleanFilename = filename.trim()
    
    // Additional security: prevent directory traversal
    if (cleanFilename.includes('..') || cleanFilename.includes('/') || cleanFilename.includes('\\')) {
      return NextResponse.json(
        { error: 'Invalid filename' },
        { status: 400 }
      )
    }

    // Define path to the file in images-to-show folder
    const filePath = join(process.cwd(), 'app', 'images-to-show', cleanFilename)

    // Check if file exists before trying to delete
    if (!existsSync(filePath)) {
      console.log(`File not found: ${cleanFilename}`)
      return NextResponse.json(
        { 
          success: true, 
          message: 'File does not exist (already deleted or never existed)'
        },
        { status: 200 }
      )
    }

    // Delete the file
    await unlink(filePath)
    console.log(`File deleted successfully: ${cleanFilename}`)

    return NextResponse.json(
      { 
        success: true, 
        message: 'File deleted successfully'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting file:', error)
    return NextResponse.json(
      { error: 'Failed to delete file' },
      { status: 500 }
    )
  }
}
