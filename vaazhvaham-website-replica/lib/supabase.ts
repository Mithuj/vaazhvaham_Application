import { createClient } from '@supabase/supabase-js'

// Get credentials from environment variables
// This way, changing .env.local will update the entire codebase automatically
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Validate that environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
}

// Create and export a single Supabase client instance
// This client will be reused across the entire application
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Export types for TypeScript support
export type Database = {
  public: {
    Tables: {
      admin: {
        Row: {
          id: string
          created_at: string
          full_name: string
          address: string
          email_address: string
          password: string
        }
        Insert: {
          id?: string
          created_at?: string
          full_name: string
          address: string
          email_address: string
          password: string
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string
          address?: string
          email_address?: string
          password?: string
        }
      }
      staff: {
        Row: {
          id: string
          created_at: string
          full_name: string
          address: string
          phone_number: string
          nic: string
          email_address: string
          password: string
          position: string
          activation: string
          give_permission: string
        }
        Insert: {
          id?: string
          created_at?: string
          full_name: string
          address: string
          phone_number: string
          nic: string
          email_address: string
          password: string
          position: string
          activation: string
          give_permission: string
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string
          address?: string
          phone_number?: string
          nic?: string
          email_address?: string
          password?: string
          position?: string
          activation?: string
          give_permission?: string
        }
      }
      managementstaff: {
        Row: {
          id: string
          created_at: string
          full_name: string
          address: string
          phone_number: string
          nic: string
          email_address: string
          password: string
          position: string
          activation: string
          give_permission: string
        }
        Insert: {
          id?: string
          created_at?: string
          full_name: string
          address: string
          phone_number: string
          nic: string
          email_address: string
          password: string
          position: string
          activation: string
          give_permission: string
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string
          address?: string
          phone_number?: string
          nic?: string
          email_address?: string
          password?: string
          position?: string
          activation?: string
          give_permission?: string
        }
      }
      newsmanagement: {
        Row: {
          id: string
          created_at: string
          news_heading_tamil: string
          news_heading_english: string
          news_gallery_code: string
          date: string
          news_english_paragraph: string
          news_tamil_paragraph: string
          person_id: string
          person_type: string
        }
        Insert: {
          id?: string
          created_at?: string
          news_heading_tamil: string
          news_heading_english: string
          news_gallery_code: string
          date: string
          news_english_paragraph: string
          news_tamil_paragraph: string
          person_id: string
          person_type: string
        }
        Update: {
          id?: string
          created_at?: string
          news_heading_tamil?: string
          news_heading_english?: string
          news_gallery_code?: string
          date?: string
          news_english_paragraph?: string
          news_tamil_paragraph?: string
          person_id?: string
          person_type?: string
        }
      }
    }
  }
}
