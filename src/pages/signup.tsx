"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, CheckCircle } from "lucide-react";
import "../styles/globals.css";

export default function SignUpPage() {
  const [formState, setFormState] = useState({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      console.log("Email response:", data);
    } catch (error) {
      console.log("Error occurred while sending the email:", error);
    }

    try {
      const response = await fetch("/api/signUpTable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      console.log("User added:", data);
    } catch (error) {
      console.log("Error occurred while adding the user:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-8 items-start ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-green-700 to-green-800 text-white relative">
                <h1 className="text-3xl font-bold mb-2">
                  Join Our Bonsai Family
                </h1>
                <p className="opacity-90">
                  Start your journey in the art of bonsai
                </p>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {["fname", "lname", "email", "phone"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </Label>
                    <div className="relative">
                      <Input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        value={formState[field as keyof typeof formState] || ""}
                        onChange={handleChange}
                        className="pl-10"
                        required
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


          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <h2 className="text-2xl font-bold text-green-700">
                Membership Benefits
              </h2>
              <ul className="space-y-4">
                {[
                  "Community Access - Join a vibrant bonsai community",
                  "Monthly Workshops - Hands-on sessions with expert guidance",
                  "Learning Resources - Access our extensive bonsai care library",
                  "Exhibition Space - Showcase your bonsai at our annual exhibition",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-700" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-700">
              Member Stories
            </h2>
            <div className="mt-4 space-y-6">
              {[
                {
                  quote:
                    "Joining the club transformed my bonsai journey. The community is incredibly supportive!",
                  name: "Sarah K.",
                  year: "Member since 2020",
                },
                {
                  quote:
                    "The workshops and expert guidance helped me develop my skills tremendously.",
                  name: "Michael R.",
                  year: "Member since 2019",
                },
              ].map((testimonial, index) => (
                <div key={index} className="border-l-4 border-green-700 pl-4">
                  <p className="italic text-gray-700">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-sm font-semibold text-green-700 mt-2">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.year}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold text-green-700">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 space-y-4">
              {[
                {
                  question: "What does membership include?",
                  answer:
                    "Membership includes access to workshops, resources, exhibitions, and a supportive community.",
                },
                {
                  question: "How often do you meet?",
                  answer:
                    "We hold monthly workshops and additional events throughout the year.",
                },
                {
                  question:
                    "I&apos;m a complete beginner. Is this club for me?",
                  answer:
                    "Absolutely! Our club welcomes all skill levels and provides guidance for beginners.",
                },
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
