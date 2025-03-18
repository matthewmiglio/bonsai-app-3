import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf } from "lucide-react";
import LoginButton from "./LoginButton";

export default function SignUpAd() {
  return (
    <div className="pad-10bg-white rounded-lg shadow-md overflow-hidden w-[600px]">
      <div className="p-6 bg-gradient-to-r from-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <Leaf
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <h2 className="text-2xl font-semibold mb-2 relative z-10">
          Grow With Us!
        </h2>
        <p className="text-sm opacity-90 relative z-10">
          Join our community and let your bonsai passion flourish!
        </p>
      </div>
      <div className="p-6 flex flex-col items-center">
        <p className="text-gray-600 text-center mb-4">
          Cultivate your skills, root yourself in tradition, and branch out with
          fellow enthusiasts.
        </p>
        {/* <Link href="/signup">
          <Button
            variant="default"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up Today
          </Button>
        </Link> */}
        <LoginButton showLogout = {false} loginText="Create an Account"/>
      </div>
    </div>
  );
}
