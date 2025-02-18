import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Facebook, Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import "../styles/globals.css";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg">
              Have questions about the WMBC? We&apos;d love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <a
                        href="tel:+15862426404"
                        className="text-gray-600 hover:text-green-700 transition-colors"
                      >
                        +1 (586) 242-6404
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a
                        href="mailto:matmigg0804@gmail.com"
                        className="text-gray-600 hover:text-green-700 transition-colors"
                      >
                        matmigg0804@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">West Michigan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-6">
                  Connect With Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Facebook className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Facebook</h3>
                      <Link
                        href="https://www.facebook.com/West.Michigan.Bonsai.Club"
                        target="_blank"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        West Michigan Bonsai Club
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-pink-100 p-3 rounded-full">
                      <Instagram className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Instagram</h3>
                      <Link
                        href="https://www.instagram.com/westmichiganbonsaiclub/"
                        target="_blank"
                        className="text-gray-600 hover:text-pink-600 transition-colors"
                      >
                        @westmichiganbonsaiclub
                      </Link>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                      Join Our Community
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Looking forward to growing our bonsai community with you!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
