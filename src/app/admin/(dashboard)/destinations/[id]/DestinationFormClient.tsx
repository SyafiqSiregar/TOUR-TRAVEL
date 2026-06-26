"use client";

import { useState } from "react";
import ImageUpload from "@/components/admin/ImageUpload";

export default function DestinationFormClient({ initialData }: { initialData: any }) {
  const [imgUrl, setImgUrl] = useState(initialData?.img || "");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Nama Paket</label>
          <input 
            type="text" 
            name="name" 
            defaultValue={initialData?.name} 
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            placeholder="Contoh: Raja Ampat Explorer"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Lokasi</label>
            <input 
              type="text" 
              name="loc" 
              defaultValue={initialData?.loc} 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Contoh: Papua"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Jarak (Km)</label>
            <input 
              type="text" 
              name="dist" 
              defaultValue={initialData?.dist} 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Contoh: 3,100 Km"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Harga (Tampilan)</label>
            <input 
              type="text" 
              name="price" 
              defaultValue={initialData?.price} 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Contoh: Rp 12.5Jt"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Rating (1-5)</label>
            <input 
              type="number" 
              step="0.1"
              min="1"
              max="5"
              name="rating" 
              defaultValue={initialData?.rating || 5.0} 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input 
              type="checkbox" 
              name="isPromo" 
              defaultChecked={initialData?.isPromo} 
              className="w-5 h-5 text-primary rounded border-gray-300 focus:ring-primary"
            />
            <div>
              <div className="font-medium text-gray-800">Tandai sebagai Promo</div>
              <div className="text-sm text-gray-500">Paket akan mendapatkan label "Promo" warna merah.</div>
            </div>
          </label>
        </div>
      </div>

      <div className="space-y-6">
        <ImageUpload 
          value={imgUrl} 
          onChange={setImgUrl} 
          label="Foto Destinasi"
        />

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">Deskripsi Lengkap</label>
          <textarea 
            name="details" 
            defaultValue={initialData?.details} 
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            placeholder="Tuliskan penjelasan menarik mengenai paket ini..."
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}
