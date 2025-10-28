"use client";

import { useState } from "react";

const DataDomisiliForm = () => {
  const [domisiliSesuaiKTP, setDomisiliSesuaiKTP] = useState(false);

  return (
    <div className="space-y-4">
      <div className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-[#005274] text-white font-semibold px-4 py-2">Data Domisili</div>

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

      {/* Footer (Checkbox + Button) */}
      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm text-gray-700 space-x-2">
          <input type="checkbox" checked={domisiliSesuaiKTP} onChange={(e) => setDomisiliSesuaiKTP(e.target.checked)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <span>Alamat tempat Bekerja / perusahaan Sesuai KTP</span>
        </label>

        <button type="button" className="bg-[#FF0000] text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-red-600">
          CLEAR
        </button>
      </div>
    </div>
  );
}

export default DataDomisiliForm;
