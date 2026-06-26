import Link from "next/link";
import { Map, Star, Image as ImageIcon } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Selamat Datang di Panel Admin!</h2>
        <p className="text-gray-600">
          Dari sini Anda bisa mengubah konten website M One Travelindo dengan mudah. Tidak perlu mengerti kode, cukup isi form dan simpan!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
            <Map size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Kelola Paket Destinasi</h3>
          <p className="text-gray-600 text-sm mb-4">
            Ubah harga, gambar, atau deskripsi paket wisata yang ditampilkan di halaman utama.
          </p>
          <Link href="/admin/destinations" className="text-primary font-medium text-sm flex items-center hover:underline">
            Kelola Sekarang &rarr;
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
            <Star size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Program Spesial</h3>
          <p className="text-gray-600 text-sm mb-4">
            Atur program-program khusus seperti Study Tour, Overland, atau Mudik.
          </p>
          <Link href="/admin/programs" className="text-primary font-medium text-sm flex items-center hover:underline">
            Kelola Sekarang &rarr;
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
            <ImageIcon size={24} />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Galeri Perjalanan</h3>
          <p className="text-gray-600 text-sm mb-4">
            Unggah foto-foto perjalanan terbaru untuk menarik lebih banyak klien.
          </p>
          <Link href="/admin/gallery" className="text-primary font-medium text-sm flex items-center hover:underline">
            Kelola Sekarang &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
