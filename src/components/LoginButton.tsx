"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { LogOut, Leaf } from "lucide-react";

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
            className="flex items-center gap-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            <LogOut size={20} />
            Logout
          </button>
        )
      ) : (
        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-1 px-4 py-2 bg-green-800 text-white rounded hover:bg-green-900"
        >
          <Leaf size={20} />
          {loginText}
        </button>
      )}
    </div>
  );
}
