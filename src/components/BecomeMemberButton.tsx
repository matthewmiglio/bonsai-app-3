"use client";

const onBecomeMemberClick = () => {
  //redirect to signup page
  window.location.href = "/signup";
};

export default function BecomeMemberButton() {
  return (
    <div>
      <button
        onClick={onBecomeMemberClick}
        className="px-4 py-2 bg-green-700 hover:bg-green-900 border-2 border-green-900 text-white rounded whitespace-nowrap"
      >
        Become a Member
      </button>
    </div>
  );
}
