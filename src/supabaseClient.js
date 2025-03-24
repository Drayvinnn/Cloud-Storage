import { createClient } from '@supabase/supabase-js';

// Your Supabase project details
const SUPABASE_URL = "https://exbautqrqnftnaqetffk.supabase.co"; // Replace with your Project URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YmF1dHFycW5mdG5hcWV0ZmZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NDExNDYsImV4cCI6MjA1ODQxNzE0Nn0._eJb4vZ1-PYXkKXdvUGLnaM4a7PhJ301DHuXb1iytYU"; // Replace with your Anon Key

// Create a Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
