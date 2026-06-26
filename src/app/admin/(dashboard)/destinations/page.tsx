import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Edit, Plus } from "lucide-react";
import { deleteDestination } from "../../actions";
import DeleteButton from "@/components/admin/DeleteButton";

export const revalidate = 0; // Disable cache so admin sees updates immediately

export default async function ManageDestinations() {
  const destinations = await prisma.destination.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Kelola Paket Destinasi</h2>
          <p className="text-gray-600 text-sm mt-1">Daftar paket wisata yang tampil di halaman utama.</p>
        </div>
        <Link 
          href="/admin/destinations/new"
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Plus size={18} />
          Tambah Paket
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-600">
                <th className="p-4">Gambar</th>
                <th className="p-4">Nama Paket</th>
                <th className="p-4">Lokasi</th>
                <th className="p-4">Harga</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {destinations.map((dest) => (
                <tr key={dest.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4">
                    <div className="relative w-16 h-12 rounded-md overflow-hidden bg-gray-100">
                      <Image 
                        src={dest.img} 
                        alt={dest.name} 
                        fill 
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                  </td>
                  <td className="p-4 font-medium text-gray-800">{dest.name}</td>
                  <td className="p-4 text-gray-600 text-sm">{dest.loc}</td>
                  <td className="p-4 text-gray-600 font-medium text-sm">{dest.price}</td>
                  <td className="p-4 text-center">
                    {dest.isPromo ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Promo
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Aktif
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        href={`/admin/destinations/${dest.id}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </Link>
                      <DeleteButton 
                        action={deleteDestination.bind(null, dest.id)} 
                        confirmMessage="Apakah Anda yakin ingin menghapus paket ini?"
                      />
                    </div>
                  </td>
                </tr>
              ))}

              {destinations.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    Belum ada data paket wisata.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
