"use client";

import { Leaf } from "lucide-react";

const onBecomeMemberClick = () => {
  //redirect to signup page
  window.location.href = "/signup";
};

export default function BecomeMemberButton() {
  return (
    <div>
      <button
        onClick={onBecomeMemberClick}
        className="flex items-center gap-4 px-2 py-2 bg-green-700 hover:bg-green-900 border-2 border-green-900 text-white rounded "
      >
        <Leaf size={20} />
        <span className="px-3 whitespace-nowrap">Become a Member</span>
      </button>
    </div>
  );
}
