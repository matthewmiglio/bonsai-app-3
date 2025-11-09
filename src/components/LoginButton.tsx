"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { User } from "lucide-react";

interface LoginButtonProps {
  loginText?: string;
}

interface LoginButtonProps {
  loginText?: string;
  showLogout?: boolean;
}

export default function LoginButton({
  loginText = "Login",
  showLogout = true,
}: LoginButtonProps) {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        showLogout && (
          <button
            onClick={() => signOut()}
            className="flex items-center gap-1 px-4 py-2 text-black rounded hover:bg-gray-100 border-black border-2"
          >
            <span className="underline">Logout</span>
          </button>
        )
      ) : (
        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-1 px-4 py-2 text-black rounded hover:bg-gray-100 border-black border-2"
        >
          <User size={20} />
          <span className="px-3 whitespace-nowrap">{loginText}</span>
        </button>
      )}
    </div>
  );
}
