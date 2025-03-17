"use client";

import { useEffect, useState, useRef } from "react";
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
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastMessageIdRef = useRef<number | null>(null);
  const userScrolledRef = useRef<boolean>(false);

  // Scroll chat window to bottom when necessary
  const scrollToBottom = (smooth = true) => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Fetch messages from Supabase
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching messages:", error);
      return;
    }

    if (!data || data.length === 0) return;

    const lastFetchedId = data[data.length - 1].id;

    if (lastMessageIdRef.current === null || lastFetchedId > lastMessageIdRef.current) {
      setMessages(data);
      lastMessageIdRef.current = lastFetchedId;

      // Auto-scroll only if user hasn't scrolled manually
      if (!userScrolledRef.current) {
        scrollToBottom();
      }
    }
  };

  useEffect(() => {
    fetchMessages(); // Initial fetch

    const interval = setInterval(fetchMessages, 10000); // Fetch every 10 seconds

    const channel = supabase
      .channel("realtime-chat")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message]);
          lastMessageIdRef.current = payload.new.id;

          // Auto-scroll if user is at the bottom
          if (!userScrolledRef.current) {
            scrollToBottom();
          }
        }
      )
      .subscribe();

    return () => {
      clearInterval(interval);
      supabase.removeChannel(channel);
    };
  }, []);

  // Track user scrolling
  useEffect(() => {
    const chatDiv = chatContainerRef.current;
    if (!chatDiv) return;

    const handleScroll = () => {
      const isAtBottom =
        chatDiv.scrollHeight - chatDiv.scrollTop === chatDiv.clientHeight;
      userScrolledRef.current = !isAtBottom;
    };

    chatDiv.addEventListener("scroll", handleScroll);
    return () => chatDiv.removeEventListener("scroll", handleScroll);
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    console.log('sending message: ', newMessage);
    e.preventDefault();
    if (!newMessage.trim() || !session?.user?.email) {
      console.log('pretty sure email is missing so not sending message');

      return};

    const { data, error } = await supabase.from("messages").insert([
      {
        user_email: session.user.email,
        content: newMessage,
      },
    ]).select(); // Ensure we get the inserted message back

    if (error) {
      console.error("Error sending message:", error);
      return;
    }

    if (data && data.length > 0) {
      console.log('Verified this message was properly sent: ', data[0]);
      setMessages((prev) => [...prev, data[0]]); // Append message immediately
      lastMessageIdRef.current = data[0].id;

      // Auto-scroll to bottom after sending a message
      scrollToBottom();
    }

    setNewMessage("");

    setTimeout(() => {
      scrollToBottom(); // Ensure scrolling happens after DOM update
    }, 100); // Small delay to allow message to render
  };

  const formatTimestamp = (timestamp: string) => {
    const utcDate = new Date(timestamp + "Z");
    return new Intl.DateTimeFormat(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }).format(utcDate);
  };

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
            <ScrollArea
              ref={chatContainerRef}
              className="h-[400px] mb-4 border p-2 rounded overflow-y-auto"
            >
              {messages.map((message) => (
                <div key={message.id} className="mb-3">
                  <p className="text-sm text-gray-600">
                    <strong>{message.user_email}</strong> -{" "}
                    {formatTimestamp(message.created_at)}
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
        </Card>
      </main>
      <Footer />
    </div>
  );
}
