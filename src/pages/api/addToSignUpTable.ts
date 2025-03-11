import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPA_URL || "no supa table url in env";
const supabaseKey = process.env.SUPA_SECRET_KEY || "no supa key in env";
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { fname, lname, email, phone } = req.body;

    try {
      console.log("Received a request to add a user with the following data:", req.body);
      const { data, error } = await supabase.from("SIGNUPs").insert([
        { fname: fname, lname: lname, email: email, phone: phone },
      ]);

      if (error) {
        return res
          .status(400)
          .json({ message: "Error inserting user data", error });
      }

      return res.status(200).json({ message: "User successfully added", data });
    } catch (error) {
      console.error("This is the error in the api/signupTable.ts file:", error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  } else {
    console.log("Called a method other than POST for supa operations");
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
