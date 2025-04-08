"use client";
import React, { useState } from "react";
import ImageUploadModal from "./ImageUploadModal";
import { useRouter } from "next/navigation";
export default function GetStartedButton({
  text,
  navigationLink,
}: {
  text: string;
  navigationLink: string;
}) {
  const [isOpen, setISOpen] = useState(false);
  const router = useRouter();
  const onClose = () => {
    setISOpen(false);
  };
  console.log(isOpen);

  return (
    <div>
      <ImageUploadModal isOpen={isOpen} onClose={onClose} />
      <button
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition"
        onClick={() => {
          router.push(navigationLink);
        }}
      >
        {text}{" "}
      </button>
    </div>
  );
}
