"use client";

import { Leaf } from "lucide-react";

const onChatWithMembersclick = () => {
  window.location.href = "/members";
};

export default function ChatWithMembersButton() {
  return (
    <button
      onClick={onChatWithMembersclick}
      className="flex items-center gap-4 px-2 py-2 bg-green-800 text-white rounded hover:bg-green-900"
    >
      <Leaf size={20} />
      <span className="whitespace-nowrap">Chat with members</span>
    </button>
  );
}
