import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rulonjnveeeyaizjxtfg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bG9uam52ZWVleWFpemp4dGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2NTEyMTUsImV4cCI6MjA1NTIyNzIxNX0.R6oySwaR9PDkPycYXfJ-vZ_-_IlaHBdFIppRmBMLDlw';

export const supabase = createClient(supabaseUrl, supabaseKey);
