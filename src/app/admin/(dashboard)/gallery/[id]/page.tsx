import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { createGalleryItem, updateGalleryItem } from "../../../actions";
import GalleryFormClient from "./GalleryFormClient";

export default async function EditGallery({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const isNew = resolvedParams.id === "new";
  
  let galleryItem = null;
  if (!isNew) {
    galleryItem = await prisma.galleryItem.findUnique({
      where: { id: resolvedParams.id },
    });
  }

  const action = isNew ? createGalleryItem : updateGalleryItem.bind(null, resolvedParams.id);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/gallery" 
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {isNew ? "Upload Foto Galeri" : "Edit Foto Galeri"}
          </h2>
          <p className="text-gray-600 text-sm mt-1">Tambahkan momen perjalanan terbaik.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 sm:p-8">
        <form action={action} className="space-y-8">
          <GalleryFormClient initialData={galleryItem} />

          <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
            <Link 
              href="/admin/gallery"
              className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Batal
            </Link>
            <button 
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium flex items-center gap-2 transition-colors"
            >
              <Save size={18} />
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
