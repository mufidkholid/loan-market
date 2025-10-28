"use client";

import { useState } from "react";
import { FiSave } from "react-icons/fi";

const DataAlamat = () => {
  const [domisiliSesuaiKTP, setDomisiliSesuaiKTP] = useState(false);

  return (
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-[#005274] text-white font-semibold px-4 py-2">Data Alamat Tempat Bekerja</div>

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Kolom Kiri */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Alamat Lengkap (Jalan, Komplek, RT/RW)</label>
              <input type="text" placeholder="--Isi Alamat Lengkap--" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Provinsi</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none">
                <option>--Pilih Provinsi--</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Kecamatan</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none">
                <option>--Pilih Kecamatan--</option>
              </select>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Kode POS</label>
              <input type="text" placeholder="--Isi Kode POS--" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Kabupaten / Kota</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none">
                <option>--Pilih Kota--</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Kelurahan</label>
              <select className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none">
                <option>--Pilih Kelurahan--</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button type="submit" className="flex items-center gap-2 bg-[#005274] hover:bg-[#17A9E2] text-white font-medium px-6 py-2 rounded-sm shadow-sm transition-all">
          <FiSave size={18} />
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default DataAlamat;
