"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function LoginButton() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email) {
      addEmailToDatabase(session.user.email);
    }
  }, [session]);

  const addEmailToDatabase = async (email: string) => {
    try {
      const response = await fetch("/api/addToEmailsTable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        console.error("Failed to add email:", await response.json());
      }
    } catch (error) {
      console.error("Error adding email:", error);
    }
  };

  return (
    <div>
      {session ? (
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login with Google
        </button>
      )}
    </div>
  );
}
