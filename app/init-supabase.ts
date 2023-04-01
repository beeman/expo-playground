import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

// Better put your these secret keys in .env file
export const supabase = createClient(
  'https://ogceblcjdipdjinuuaak.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nY2VibGNqZGlwZGppbnV1YWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAyODA0MzgsImV4cCI6MTk5NTg1NjQzOH0.w1I98W0t3SDAVyRVje2goamkTkRj7ZqEN21zFw1SNfM',
  {
    auth: {
      storage: AsyncStorage as any,
      detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
    },
  },
)
