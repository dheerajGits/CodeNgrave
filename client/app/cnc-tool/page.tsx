"use client";
import CodeEditor from "@/components/CodeEditor";
import ImageUpload from "@/components/ImageUpload";
import React, { useState } from "react";

export default function CncTool() {
  const [cncCode, setCncCode] = useState("");
  return (
    <div className="flex flex-col gap-6 items-center justify-center text-center mt-12 w-full mb-10">
      <h1 className="text-5xl max-xl:text-3xl font-bold text-[#33333b]">
        Generate CNC Code <br />
        from Image
      </h1>
      <p className="text-center text-2xl max-xl:text-lg text-[#333337] px-2">
        Select{" "}
        <b className="text-blue-400 hover:cursor-pointer">JPG, PNG, SVG</b>{" "}
        image by clicking below and press upload, <br />
        and let our tool do the magic
      </p>
      <div className="flex flex-row max-xl:flex-col items-center justify-center w-full xl:px-20 px-5 gap-20 xl:h-[600px]">
        <ImageUpload isModal={false} code={cncCode} setCode={setCncCode} />
        {cncCode && <CodeEditor code={cncCode} />}
      </div>
    </div>
  );
}
