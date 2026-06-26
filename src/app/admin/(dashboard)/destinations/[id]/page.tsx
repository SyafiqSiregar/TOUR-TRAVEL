import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { createDestination, updateDestination } from "../../../actions";
import DestinationFormClient from "./DestinationFormClient";

export default async function EditDestination({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const isNew = resolvedParams.id === "new";
  
  let destination = null;
  if (!isNew) {
    destination = await prisma.destination.findUnique({
      where: { id: resolvedParams.id },
    });
  }

  // Bind the server action to include the ID if updating
  const action = isNew ? createDestination : updateDestination.bind(null, resolvedParams.id);

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/destinations" 
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {isNew ? "Tambah Paket Destinasi" : "Edit Paket Destinasi"}
          </h2>
          <p className="text-gray-600 text-sm mt-1">Isi form di bawah ini untuk menyimpan data.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 sm:p-8">
        <form action={action} className="space-y-8">
          <DestinationFormClient initialData={destination} />

          <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
            <Link 
              href="/admin/destinations"
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
