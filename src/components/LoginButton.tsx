"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { LogIn, LogOut, Leaf } from "lucide-react";

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
          className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          <LogOut size={20} />
          Logout
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-1 px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900"
        >
          <Leaf size={20} />
          Login
        </button>
      )}
    </div>
  );
}
