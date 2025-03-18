import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPA_URL || "no supa table url in env";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPA_SECRET_KEY || "no supa key in env";
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    try {
      console.log("Received request to add email:", email);

      const { data, error } = await supabase
        .from("EMAILs")
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (error) {
        return res
          .status(400)
          .json({ message: "Error inserting email", error });
      }

      return res
        .status(200)
        .json({ message: "Email successfully added", data });
    } catch (error) {
      console.error("Error in API:", error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  } else {
    console.log("Invalid method called");
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
