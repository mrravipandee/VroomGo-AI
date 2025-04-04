"use client";

import { useDropzone } from "react-dropzone";
import React, { useCallback } from "react";
import { Input } from "./ui/input";
import { Camera, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [isImageSearchActive, setIsImageSearchActive] = React.useState<boolean>(false);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const [isUploading, setIsUploading] = React.useState<boolean>(false);
  const [searchImage, setSearchImage] = React.useState<File | null>(null);

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleImageSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Image search triggered.");
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds 5MB");
        return;
      }

      setIsUploading(true);
      setSearchImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
        setIsUploading(false);
        toast.success("Image uploaded successfully");
      };

      reader.onerror = () => {
        setIsUploading(false);
        toast.error("Error uploading image");
      };

      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg", ".webp"],
    },
    maxFiles: 1,
  });

  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <div className="relative flex items-center">
          <Input
            type="text"
            value={searchTerm}
            placeholder="Enter make, model, or use our AI image search..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-12 py-6 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-sm"
          />

          <div className="absolute right-[100px]">
            <Camera
              size={35}
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              className="cursor-pointer rounded-xl p-1.5"
              style={{
                background: isImageSearchActive ? "#194d6f" : "",
                color: isImageSearchActive ? "white" : "",
              }}
            />
          </div>

          <Button type="submit" className="absolute right-2 bg-[#194d6f] text-white rounded-full">
            Search
          </Button>
        </div>
      </form>

      {isImageSearchActive && (
        <div className="mt-4">
          <form onSubmit={handleImageSearch}>
            <div>
              {imagePreview ? (
                <div className="mb-4">
                  <img src={imagePreview} alt="Car Preview" className="h-40 object-contain mb-2 rounded-md" />
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchImage(null);
                      setImagePreview(null);
                      toast.info("Image removed");
                    }}
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div {...getRootProps()} className="p-6 border-2 border-dashed border-gray-300 text-center rounded-lg cursor-pointer hover:border-[#194d6f] transition-all">
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center">
                    <Upload className="h-12 w-12 text-gray-400 mb-2" />

                    <p>
                      {isDragActive && !isDragReject
                        ? "Leave the image here..."
                        : "Drag and drop an image here, or click to select a file"}
                    </p>
                    {isDragReject && <p className="text-red-500">Unsupported file type...</p>}
                    <p className="text-gray-400 text-sm">Supports: JPG, PNG, WEBP, JPEG (max 5MB)</p>
                  </div>
                </div>
              )}
            </div>
            {imagePreview && (
              <Button type="submit" className="mt-4 w-full bg-[#194d6f] text-white">
                Search with Image
              </Button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default HomeSearch;
