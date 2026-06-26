import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Edit, Plus } from "lucide-react";
import { deleteGalleryItem } from "../../actions";
import DeleteButton from "@/components/admin/DeleteButton";

export const revalidate = 0;

export default async function ManageGallery() {
  const galleryItems = await prisma.galleryItem.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Kelola Galeri</h2>
          <p className="text-gray-600 text-sm mt-1">Daftar foto momen perjalanan yang tampil di bagian galeri.</p>
        </div>
        <Link 
          href="/admin/gallery/new"
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Plus size={18} />
          Upload Foto
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6">
        {galleryItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Belum ada foto di galeri.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="group relative rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
                <div className={`relative w-full ${item.aspectRatio === 'aspect-square' ? 'aspect-square' : item.aspectRatio === 'aspect-[4/3]' ? 'aspect-[4/3]' : 'aspect-[3/4]'} bg-gray-200`}>
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                    <div className="flex justify-end gap-2">
                      <Link 
                        href={`/admin/gallery/${item.id}`}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
                        title="Edit"
                      >
                        <Edit size={14} />
                      </Link>
                      <DeleteButton 
                        action={deleteGalleryItem.bind(null, item.id)}
                        confirmMessage="Hapus foto ini dari galeri?"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm truncate">{item.title}</h4>
                      <p className="text-white/70 text-xs">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
