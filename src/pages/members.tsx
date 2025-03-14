"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { supabase } from "@/lib/supabase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

// Message type definition
type Message = {
  id: number;
  user_email: string;
  content: string;
  created_at: string;
};

export default function MembersPage() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");



  // Fetch messages from Supabase
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) console.error("Error fetching messages:", error);
    else setMessages(data || []);
  };

  useEffect(() => {
    fetchMessages(); // Initial fetch

    // Set interval to refresh chat every 30 seconds
    const interval = setInterval(() => {
      fetchMessages();
    }, 30000);

    // Subscribe to Supabase real-time updates
    const channel = supabase
      .channel("realtime-chat")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      clearInterval(interval);
      supabase.removeChannel(channel);
    };
  }, []);

  // Send message function
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !session?.user?.email) return;

    const { error } = await supabase.from("messages").insert([
      {
        user_email: session.user.email,
        content: newMessage,
      },
    ]);

    if (error) {
      console.error("Error sending message:", error);
    } else {
      setNewMessage("");
      fetchMessages(); // Immediately refresh chat after sending a message
    }
  };

  // If session is loading, show a loading message
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl font-bold text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Members Area
        </h1>

        {session ? (
          <p className="text-center text-lg text-gray-700">
            Welcome, <span className="font-bold">{session.user?.name}</span> (
            {session.user?.email})
          </p>
        ) : (
          <p className="text-center text-red-500 font-bold">
            Please log in to use the chat.
          </p>
        )}

        <Card className="relative mt-6">
          <CardHeader>
            <CardTitle>Member Chat</CardTitle>
          </CardHeader>
          <CardContent className={`relative ${!session ? "blur-md" : ""}`}>
            <ScrollArea className="h-[400px] mb-4 border p-2 rounded">
              {messages.map((message) => (
                <div key={message.id} className="mb-3">
                  <p className="text-sm text-gray-600">
                    <strong>{message.user_email}</strong> - {" "}
                    {new Date(message.created_at).toLocaleTimeString()}
                  </p>
                  <p className="bg-green-100 p-2 rounded-lg">{message.content}</p>
                </div>
              ))}
            </ScrollArea>

            <form onSubmit={sendMessage} className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit" disabled={!session}>
                <Send className="h-4 w-4 mr-2" /> Send
              </Button>
            </form>
          </CardContent>

          {!session && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 text-gray-700 font-bold">
              Log in to send messages
            </div>
          )}
        </Card>
      </main>
      <Footer />
    </div>
  );
}
