"use client";
import { useState } from "react";

const ImageUpload = ({ isModal }: { isModal: boolean }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
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
    setResponseMessage(null);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("YOUR_LAMBDA_ENDPOINT_URL", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();
      setResponseMessage(result);
    } catch (error) {
      console.error("Upload failed:", error);
      setResponseMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg max-w-xl mx-auto">
      {!isModal && (
        <h2 className="text-lg font-semibold mb-2 text-black">
          Upload an Image
        </h2>
      )}

      {/* Drag & Drop Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 w-full text-center cursor-pointer  ${
          dragging ? "border-blue-500 bg-blue-50" : "border-gray-400"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)} // this is to create a url of the selected photo
            alt="Preview"
            className="max-w-full h-32 object-contain mx-auto"
          />
        ) : (
          <p className="text-gray-500">
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
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {responseMessage && <p className="mt-2 text-sm">{responseMessage}</p>}
    </div>
  );
};

export default ImageUpload;
