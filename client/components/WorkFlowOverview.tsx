"use client";
import { useState } from "react";

const steps = [
  "Upload Image",
  "Receive Image and Process",
  "Convert to Grayscale",
  "Resize According to Work Dimensions",
  "Generate CNC Code",
  "Start Engraving Process",
];

function Card({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-lg shadow-md bg-white p-4 border border-gray-300 ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

function Button({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
}

export default function CNCEngravingSteps() {
  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
      <div className="absolute top-0 bottom-0 w-1 bg-gray-300 left-1/2 transform -translate-x-1/2 border-dashed border-l-2"></div>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex w-full items-center my-4 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <Card className="w-1/2">
            <CardContent>
              <p className="text-lg font-medium text-gray-700">{step}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
