"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone } from "lucide-react";
import "../styles/globals.css";

export default function SignUpPage() {
  const [formState, setFormState] = useState({

  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send the email containing the form data
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Email response:', data);
      } else {
        console.log('Email response:', data);
      }
    } catch (error) {
      console.log("Error occurred while sending the email:", error);
    }

    // Also add the form data to the sign-up records table
    try {
      const response = await fetch("/api/signUpTable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User added:', data);
      } else {
        console.log('Error:', data);
        console.log('This is what we tried to add to the table:',JSON.stringify(formState))
      }
    } catch (error) {
      console.log("Error occurred while adding the user to the records table:", error);
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
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-green-700 to-green-800 text-white relative">
                <h1 className="text-3xl font-bold mb-2">Join Our Bonsai Family</h1>
                <p className="opacity-90">Start your journey in the art of bonsai</p>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {['fname', 'lname', 'email', 'phone'].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                    <div className="relative">
                      <Input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formState[field as keyof typeof formState]}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                      {field === 'email' ? (
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      ) : field === 'phone' ? (
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      ) : (
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      )}
                    </div>
                  </div>
                ))}
                <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white">
                  Join Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
