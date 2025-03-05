import {createClient} from  "@supabase/supabase-js"


const supabaseUrl = "https://pshnanjsxqipxtalxytv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzaG5hbmpzeHFpcHh0YWx4eXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NTUxNjUsImV4cCI6MjA1NjAzMTE2NX0.V5Z7BlPr94DjyM2_Cvbvy5YdpC2FKsj0Z8J_HY27sFw"


const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;