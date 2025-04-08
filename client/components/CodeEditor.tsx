"use client";
import React from "react";

export default function CodeEditor({ code }: { code: string }) {
  const lines = code.trim().split("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cnc_code.txt";
    link.click();
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md w-full h-[600px]">
      <div className="flex justify-between gap-2 p-2 py-3 border-b border-gray-700 bg-gray-900">
        <p className="text-white text-xl max-xl:text-[16px]">Generated Code</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleCopy}
            className="text-sm text-white bg-gray-700 hover:bg-gray-600 px-3 xl:py-1 max-xl:px-1  rounded"
          >
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="text-sm text-white bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
          >
            Download
          </button>
        </div>
      </div>
      <div className="h-full overflow-y-scroll bg-black text-white font-mono text-sm">
        {lines.map((line, index) => (
          <div key={index} className="flex px-4 py-1">
            <div className="w-10 text-right pr-4 text-gray-500 select-none">
              {index + 1}
            </div>
            <pre className="whitespace-pre-wrap">{line}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
