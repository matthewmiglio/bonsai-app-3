import { createClient } from "@supabase/supabase-js";

const verbose = true;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPA_URL || "no supa url in env";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPA_PUBLIC_KEY || "no supa anon key in env";

if (verbose) {
  console.log("This is the supa url: ", supabaseUrl);
}
if (verbose) {
  console.log("This is the supa key: ", supabaseAnonKey);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
