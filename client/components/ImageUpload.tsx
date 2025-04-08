"use client";
import axios from "axios";
import { useState } from "react";

const ImageUpload = ({
  isModal,
  code,
  setCode,
}: {
  isModal: boolean;
  code: string;
  setCode: React.Dispatch<string>;
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) validateAndSetFile(file);
  };

  const validateAndSetFile = (file: File) => {
    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Only PNG, JPEG, or JPG files are allowed.");
      return;
    }
    setSelectedFile(file);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files[0];
    if (file) validateAndSetFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      const response = await axios.post(
        "https://mp89gf3osc.execute-api.ap-south-1.amazonaws.com/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setCode(response?.data);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className={`flex flex-col items-center p-4 border rounded-lg shadow-lg xl:max-h-[600px] mx-auto ${
        !isModal ? "xl:w-[80%] w-[96%]" : "max-w-xl"
      }`}
    >
      {!isModal && (
        <h2 className="text-lg font-semibold mb-2 text-black">
          Upload an Image
        </h2>
      )}

      {/* Drag & Drop Area */}
      <div
        className={`border-2 flex items-center justify-center border-dashed rounded-lg p-6 w-full text-center cursor-pointer  ${
          dragging ? "border-blue-500 bg-blue-50" : "border-gray-400"
        } ${!isModal && "h-[500px] max-xl:h-[200px]"}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)} // this is to create a url of the selected photo
            alt="Preview"
            className="max-w-full h-full object-contain mx-auto"
          />
        ) : (
          <p className="text-gray-500 text-xl">
            Drag & Drop an image or Click to Select
          </p>
        )}
      </div>

      <input
        id="fileInput"
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleFileChange}
        className="hidden"
      />

      {selectedFile && (
        <p className="text-sm text-gray-500 mt-2">{selectedFile.name}</p>
      )}

      <button
        onClick={handleUpload}
        className="mt-2 bg-blue-500 text-white text-2xl px-4 py-2 rounded-md disabled:bg-gray-400"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {code && <p className="mt-2 text-sm">Cnc Code Generated</p>}
    </div>
  );
};

export default ImageUpload;
