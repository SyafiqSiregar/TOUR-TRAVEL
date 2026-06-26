"use client";

import { useState } from "react";
import ImageUpload from "@/components/admin/ImageUpload";

export default function GalleryFormClient({ initialData }: { initialData: any }) {
  const [imgUrl, setImgUrl] = useState(initialData?.img || "");

  const aspectRatios = [
    { value: "aspect-square", label: "Kotak (1:1)" },
    { value: "aspect-[4/3]", label: "Lanskap (4:3)" },
    { value: "aspect-[3/4]", label: "Potret (3:4)" },
  ];

  return (
    <div className="space-y-6">
      <ImageUpload 
        value={imgUrl} 
        onChange={setImgUrl} 
        label="Foto Perjalanan"
      />

      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">Judul/Keterangan Singkat</label>
        <input 
          type="text" 
          name="title" 
          defaultValue={initialData?.title} 
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="Contoh: Sunrise di Bromo"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Lokasi</label>
          <input 
            type="text" 
            name="location" 
            defaultValue={initialData?.location} 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Contoh: Jawa Timur"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Kategori Paket</label>
          <input 
            type="text" 
            name="category" 
            defaultValue={initialData?.category} 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Contoh: Open Trip"
            required
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 block mb-3">Format Gambar (Aspect Ratio)</label>
        <div className="flex flex-wrap gap-4">
          {aspectRatios.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="aspectRatio" 
                value={value} 
                defaultChecked={initialData?.aspectRatio === value || (!initialData && value === "aspect-square")}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
