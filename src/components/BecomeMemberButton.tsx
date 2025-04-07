"use client";

import { Leaf } from "lucide-react";

const onBecomeMemberClick = () => {
  //redirect to signup page
  window.location.href = "/signup";
};

export default function BecomeMemberButton() {
  return (
    <button
      onClick={onBecomeMemberClick}
      className="flex items-center gap-4 px-2 py-2 bg-green-800 text-white rounded hover:bg-green-900"
    >
      <Leaf size={20} />
      <span className="whitespace-nowrap">Become a Member</span>
    </button>
  );
}
