import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPA_URL || "no supa url in env";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPA_PUBLIC_KEY || "no supa anon key in env";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
