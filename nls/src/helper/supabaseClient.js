import {createClient} from  "@supabase/supabase-js"

//access keys to for Supabase database
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL

const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANONKEY

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;