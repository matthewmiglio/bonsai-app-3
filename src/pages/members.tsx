"use client";

import type React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Users, Calendar, Book, Trophy } from "lucide-react";

// Placeholder data for member profiles
const memberProfiles = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    level: "Expert",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    level: "Beginner",
  },
];

// Placeholder data for chat messages
const initialMessages = [
  {
    id: 1,
    sender: "John Doe",
    content: "Has anyone tried the new pruning technique?",
  },
  { id: 2, sender: "Jane Smith", content: "Yes, it works great for maples!" },
  {
    id: 3,
    sender: "Bob Johnson",
    content: "I'm still learning. Any tips for beginners?",
  },
];

export default function MembersPage() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "You", content: newMessage },
      ]);
      setNewMessage("");
    }
  };

  console.log("Status:", status);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Members Area
        </h1>

        {session && (
          <p className="text-center text-lg text-gray-700">
            Welcome, <span className="font-bold">{session.user?.name}</span> (
            {session.user?.email})
          </p>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mt-6">
          {/* Member Profiles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" /> Active Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                {memberProfiles.map((member) => (
                  <div key={member.id} className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.level}</p>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 relative">
            <CardHeader>
              <CardTitle>Member Chat</CardTitle>
            </CardHeader>
            <CardContent
              className={`relative ${
                !session ? "blur-md pointer-events-none" : ""
              }`}
            >
              <ScrollArea className="h-[400px] mb-4">
                {messages.map((message) => (
                  <div key={message.id} className="mb-4">
                    <p className="font-semibold">{message.sender}</p>
                    <p className="bg-green-100 p-2 rounded-lg">
                      {message.content}
                    </p>
                  </div>
                ))}
              </ScrollArea>
              <form onSubmit={handleSendMessage} className="flex">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-grow mr-2"
                />
                <Button type="submit">
                  <Send className="h-4 w-4 mr-2" /> Send
                </Button>
              </form>
            </CardContent>

            {!session && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 text-gray-700 font-bold">
                Log in to view members chat history
              </div>
            )}
          </Card>
        </div>

        {/* Member Resources */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Member Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="events">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                <TabsTrigger value="library">Bonsai Library</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              <TabsContent value="events">
                <div className="flex items-center space-x-4 mt-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Monthly Workshop</h3>
                    <p className="text-sm text-gray-500">
                      June 15, 2023 at 10:00 AM
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="library">
                <div className="flex items-center space-x-4 mt-4">
                  <Book className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">
                      Advanced Pruning Techniques
                    </h3>
                    <p className="text-sm text-gray-500">
                      New article by John Doe
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="achievements">
                <div className="flex items-center space-x-4 mt-4">
                  <Trophy className="h-6 w-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold">First Bonsai Exhibition</h3>
                    <p className="text-sm text-gray-500">
                      Unlock this achievement by participating in our annual
                      show
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
