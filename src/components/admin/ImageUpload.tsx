"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { UploadCloud, X, Loader2 } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUpload({ value, onChange, label = "Upload Gambar" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        onChange(data.url);
      } else {
        alert("Upload gagal: " + data.error);
      }
    } catch (err) {
      alert("Terjadi kesalahan saat upload");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 block">{label}</label>
      
      {value ? (
        <div className="relative w-full max-w-sm h-48 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 group">
          <Image src={value} alt="Preview" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
              type="button"
              onClick={() => onChange("")}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="w-full max-w-sm h-48 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
        >
          {isUploading ? (
            <>
              <Loader2 size={32} className="animate-spin text-primary" />
              <span className="text-sm text-gray-500 font-medium">Mengunggah...</span>
            </>
          ) : (
            <>
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-primary mb-2">
                <UploadCloud size={24} />
              </div>
              <span className="text-sm text-gray-500 font-medium">Klik untuk upload gambar</span>
              <span className="text-xs text-gray-400">PNG, JPG up to 5MB</span>
            </>
          )}
        </div>
      )}
      
      <input 
        type="hidden" 
        name="img" 
        value={value} 
      />
      <input 
        type="file" 
        accept="image/*" 
        className="hidden" 
        ref={fileInputRef}
        onChange={handleUpload}
      />
    </div>
  );
}
