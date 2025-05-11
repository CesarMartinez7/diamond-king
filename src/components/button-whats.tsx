"use client";
import { Icon } from "@iconify/react";

export default function Whatsapp() {
  const handleClick = () => {
    window.open("https://wa.me/5491123456789", "_blank");
  };

  return (
    <button
      title="Whats Button"
      onClick={handleClick}
      className="bottom-7 fixed right-7 p-2 w-fit max-h-fit rounded-full bg-green-400"
    >
      <Icon
        icon="ic:baseline-whatsapp"
        className="text-white "
        width="24"
        height="24"
      />
    </button>
  );
}
