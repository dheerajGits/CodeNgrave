"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText({ texts }: { texts: string[] }) {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: texts,
      typeSpeed: 150,
      backSpeed: 50,
      showCursor: true,
      cursorChar: "|",
      loop: false,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);
  return <span ref={typedRef} className="text-blue-400"></span>;
}
