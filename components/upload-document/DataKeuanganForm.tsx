"use client";

import { useState } from "react";
import {  Upload } from "lucide-react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const DataKeuanganForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [files, setFiles] = useState<Record<string, File | null>>({});

  const documents = [
    {
      key: "spt",
      label: "Fotokopi SPT / PPh21",
    },
    {
      key: "slipGaji",
      label: "Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir",
    },
    {
      key: "rekeningKoran",
      label: "Fotokopi R/K atau tabungan 6 bulan terakhir",
    },
    {
      key: "suratRekomendasi",
      label: "Surat Keterangan / Rekomendasi Perusahaan",
    },
  ];

  const handleFileChange = (key: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [key]: file }));
  };

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
      {/* Header collapsible */}
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between bg-[#005274] text-white font-semibold px-4 py-3 sm:py-2">
        <div className="flex items-center gap-2">
          {isOpen ? <IoMdArrowDropdown size={18} className="text-white" /> : <IoMdArrowDropup size={18} className="text-white" />}
          <span>Data Keuangan</span>
        </div>
      </button>

      {isOpen && (
        <div className="p-4 space-y-5 sm:space-y-4">
          {documents.map((doc) => (
            <div key={doc.key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              {/* Label */}
              <label htmlFor={doc.key} className="text-sm font-medium text-gray-800 sm:w-1/2">
                {doc.label}
              </label>

              {/* Input upload */}
              <div className="relative w-full sm:w-1/2">
                <input id={doc.key} type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={(e) => handleFileChange(doc.key, e.target.files ? e.target.files[0] : null)} />
                <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-600 bg-white w-full min-h-10">
                  <span className="truncate text-xs sm:text-sm">{files[doc.key]?.name || "Pilih berkas"}</span>
                  <Upload size={16} className="text-gray-500 ml-2 shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DataKeuanganForm
