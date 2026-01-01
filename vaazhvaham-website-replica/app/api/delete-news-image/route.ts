import { NextRequest, NextResponse } from 'next/server'
import { unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const { filename } = await request.json()
    
    if (!filename) {
      return NextResponse.json(
        { error: 'No filename provided' },
        { status: 400 }
      )
    }

    // Define path to the file in public folder
    const filePath = join(process.cwd(), 'public', filename)

    // Check if file exists before trying to delete
    if (!existsSync(filePath)) {
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

    return NextResponse.json(
      { 
        success: true, 
        message: 'Image deleted successfully'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting image:', error)
    return NextResponse.json(
      { error: 'Failed to delete image' },
      { status: 500 }
    )
  }
}
