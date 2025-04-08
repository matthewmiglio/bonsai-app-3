"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import LoginButton from "@/components/LoginButton";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, CheckCircle, XCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import "../styles/globals.css";

export default function SignUpPage() {
  const { data: session } = useSession();
  const [formState, setFormState] = useState<Record<string, string>>({});
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-populate email field when session loads
  useEffect(() => {
    if (session?.user?.email) {
      setFormState((prev) => ({ ...prev, email: session?.user?.email ?? "" }));
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let emailSuccess = false;
    let tableSuccess = false;

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) emailSuccess = true;
    } catch (error) {
      console.log("Error occurred while sending the email:", error);
    }

    try {
      const response = await fetch("/api/addToSignUpTable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) tableSuccess = true;
    } catch (error) {
      console.log("Error occurred while adding the user:", error);
    }

    let message = "";
    if (!emailSuccess && !tableSuccess) {
      message = "Failed to register. Both email and data submission failed.";
    } else if (!emailSuccess) {
      message = "User added successfully, but email could not be sent.";
    } else if (!tableSuccess) {
      message =
        "Email sent successfully, but user could not be added to the database.";
    } else {
      message = "Registration successful!";
    }

    setModalMessage(message);
    setIsModalOpen(true);

    if (message === "Registration successful!") {
      //redirect to members page
      window.location.href = "/members";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const fieldLabels: Record<string, string> = {
    fname: "First name",
    lname: "Last name",
    email: "Email",
    phone: "Phone",
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto justify-items-center">
          {/* Input Form */}
          <div className="grid lg:grid-cols-2 gap-8 ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
              <div className="p-6 bg-gradient-to-r from-green-700 to-green-800 text-white relative">
                <h1 className="text-3xl font-bold mb-2">
                  Join the West Michigan Bonsai Club
                </h1>
                <p className="opacity-90">
                  Whether you&apos;re a curious newcomer or a seasoned
                  practitioner, join us in cultivating a deeper appreciation for
                  bonsai.
                </p>
              </div>

              <div
                className={`relative ${
                  !session ? "blur-sm pointer-events-none" : ""
                }`}
              >
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {["fname", "lname", "email", "phone"].map((field) => (
                    <div key={field} className="space-y-2">
                      <Label htmlFor={field}>{fieldLabels[field]}</Label>
                      <div className="relative">
                        <Input
                          type={field === "email" ? "email" : "text"}
                          id={field}
                          name={field}
                          value={formState[field] || ""}
                          onChange={handleChange}
                          className="pl-10"
                          required
                          readOnly={field === "email" && !!session?.user?.email}
                        />
                        {field === "email" ? (
                          <Mail
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                        ) : field === "phone" ? (
                          <Phone
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                        ) : (
                          <User
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={18}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                  <Button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white"
                  >
                    Join Now
                  </Button>
                </form>
              </div>

              {!session && (
                <div className=" absolute inset-0 bg-white bg-opacity-70 backdrop-blur-md z-10 flex items-center justify-center">
                  <div className="justify-items-center text-center space-y-4">
                    <p className="text-green-900 font-semibold text-lg">
                      Please log in to sign up and become a member
                    </p>
                    <LoginButton />
                  </div>
                </div>
              )}
            </div>

            {/* Member Benefits */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                <h2 className="text-2xl font-bold text-green-700">
                  Membership Benefits
                </h2>
                <ul className="space-y-4">
                  {[
                    "Community Access - Join a vibrant bonsai community",
                    "Monthly Meetings - Held at Frederik Meijer Gardens and Sculpture Park from March to December",
                    "Workshops - Learn everything from beginner basics to advanced techniques",
                    "Exclusive Exhibits - Showcase your trees at public exhibits",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle
                        className="text-green-700 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                <h2 className="text-2xl font-bold text-green-700">
                  Member Stories
                </h2>
                <div className="mt-4 space-y-6">
                  {[
                    {
                      quote:
                        "Joining the club transformed my bonsai journey. The community is incredibly supportive!",
                      name: "Mark L.",
                      year: "Member since 2018",
                    },
                    {
                      quote:
                        "The workshops and expert guidance really helped me develop my skills.",
                      name: "Matthew M.",
                      year: "Member since 2024",
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-green-700 pl-4"
                    >
                      <p className="italic text-gray-700">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <p className="text-sm font-semibold text-green-700 mt-2">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Modal Popup */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogTitle>
            {modalMessage.includes("Failed") ? (
              <XCircle className="text-red-600 inline mr-2" size={24} />
            ) : (
              <CheckCircle className="text-green-600 inline mr-2" size={24} />
            )}
            {modalMessage}
          </DialogTitle>
        </DialogContent>
      </Dialog>
    </div>
  );
}
