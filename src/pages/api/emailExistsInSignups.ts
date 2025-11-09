import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPA_URL || "no supa table url in env";
const supabaseKey = process.env.NEXT_PUBLIC_SUPA_SECRET_KEY || "no supa key in env";
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {

    const { data, error } = await supabase
      .from("SIGNUPs")
      .select("email")
      .eq("email", email)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error checking email:", error);
      return res.status(500).json({ message: "Error checking email", error });
    }

    const isRegistered = !!data;

    return res.status(200).json({ isRegistered });
  } catch (error) {
    console.error("Error in API:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
}
