import prisma from "@/lib/prisma";
import Link from "next/link";
import { Edit, Plus, GraduationCap, Bus, Users, MapPin, Map } from "lucide-react";
import { deleteProgram } from "../../actions";
import DeleteButton from "@/components/admin/DeleteButton";

export const revalidate = 0;

export default async function ManagePrograms() {
  const programs = await prisma.program.findMany({
    orderBy: { createdAt: "desc" },
  });

  const getIcon = (iconName: string, colorClass: string) => {
    const iconProps = { size: 24, className: "text-white" };
    let IconComponent = MapPin;
    
    if (iconName === "GraduationCap") IconComponent = GraduationCap;
    if (iconName === "Bus") IconComponent = Bus;
    if (iconName === "Users") IconComponent = Users;
    if (iconName === "Map") IconComponent = Map;

    return (
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass}`}>
        <IconComponent {...iconProps} />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Kelola Program Spesial</h2>
          <p className="text-gray-600 text-sm mt-1">Daftar layanan atau program perjalanan khusus.</p>
        </div>
        <Link 
          href="/admin/programs/new"
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <Plus size={18} />
          Tambah Program
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-600">
                <th className="p-4">Ikon</th>
                <th className="p-4">Nama Program</th>
                <th className="p-4">Deskripsi Singkat</th>
                <th className="p-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {programs.map((prog) => (
                <tr key={prog.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4">
                    {getIcon(prog.icon, prog.color)}
                  </td>
                  <td className="p-4 font-medium text-gray-800">{prog.title}</td>
                  <td className="p-4 text-gray-600 text-sm max-w-xs truncate">{prog.description}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        href={`/admin/programs/${prog.id}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </Link>
                      <DeleteButton 
                        action={deleteProgram.bind(null, prog.id)}
                        confirmMessage="Hapus program ini?"
                      />
                    </div>
                  </td>
                </tr>
              ))}

              {programs.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    Belum ada data program spesial.
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
