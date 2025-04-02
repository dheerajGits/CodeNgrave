"use client";
import { useState } from "react";

const steps = [
  "User Uploads the Image",
  "We Receive the Image",
  "Convert the Image to Grayscale",
  "Resize the Image According to Work Dimensions",
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
              <div className="text-2xl flex flex-col gap-2 text-gray-700">
                <p className="font-bold">Step-{index + 1}:</p>{" "}
                <p className="font-medium ">{step}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
