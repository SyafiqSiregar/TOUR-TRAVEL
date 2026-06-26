"use client";

import { Trash2 } from "lucide-react";

export default function DeleteButton({ 
  action, 
  confirmMessage = "Apakah Anda yakin ingin menghapus data ini?" 
}: { 
  action: (payload: FormData) => void,
  confirmMessage?: string 
}) {
  return (
    <form action={action}>
      <button 
        type="submit"
        className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
        title="Hapus"
        onClick={(e) => {
          if (!confirm(confirmMessage)) e.preventDefault();
        }}
      >
        <Trash2 size={16} />
      </button>
    </form>
  );
}
