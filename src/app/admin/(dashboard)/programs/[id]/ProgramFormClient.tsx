"use client";

import { GraduationCap, Bus, Users, MapPin, Map } from "lucide-react";

export default function ProgramFormClient({ initialData }: { initialData: any }) {
  const icons = [
    { name: "GraduationCap", icon: GraduationCap, label: "Edukasi/Sekolah" },
    { name: "Bus", icon: Bus, label: "Transportasi/Overland" },
    { name: "Users", icon: Users, label: "Grup/Perusahaan" },
    { name: "Map", icon: Map, label: "Eksplorasi" },
    { name: "MapPin", icon: MapPin, label: "Tujuan Umum" },
  ];

  const colors = [
    { name: "bg-blue-600", label: "Biru", hex: "#2563eb" },
    { name: "bg-green-600", label: "Hijau", hex: "#16a34a" },
    { name: "bg-purple-600", label: "Ungu", hex: "#9333ea" },
    { name: "bg-red-600", label: "Merah", hex: "#dc2626" },
    { name: "bg-orange-600", label: "Oranye", hex: "#ea580c" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">Nama Program</label>
        <input 
          type="text" 
          name="title" 
          defaultValue={initialData?.title} 
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="Contoh: Study Tour Sekolah"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 block mb-2">Deskripsi Singkat</label>
        <textarea 
          name="description" 
          defaultValue={initialData?.description} 
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
          placeholder="Jelaskan secara singkat tentang layanan ini..."
          required
        ></textarea>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 block mb-3">Pilih Ikon</label>
        <div className="flex flex-wrap gap-4">
          {icons.map(({ name, icon: IconComponent, label }) => (
            <label key={name} className="relative cursor-pointer group">
              <input 
                type="radio" 
                name="icon" 
                value={name} 
                defaultChecked={initialData?.icon === name || (!initialData && name === "MapPin")}
                className="peer sr-only"
              />
              <div className="w-14 h-14 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-500 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/5 hover:bg-gray-50 transition-all">
                <IconComponent size={24} />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                {label}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <label className="text-sm font-medium text-gray-700 block mb-3">Warna Latar Ikon</label>
        <div className="flex flex-wrap gap-4">
          {colors.map(({ name, label, hex }) => (
            <label key={name} className="relative cursor-pointer group">
              <input 
                type="radio" 
                name="color" 
                value={name} 
                defaultChecked={initialData?.color === name || (!initialData && name === "bg-blue-600")}
                className="peer sr-only"
              />
              <div 
                className="w-10 h-10 rounded-full border-2 border-transparent peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-gray-400 transition-all"
                style={{ backgroundColor: hex }}
              />
            </label>
          ))}
        </div>
      </div>
      
      <input type="hidden" name="href" value="#" />
    </div>
  );
}
