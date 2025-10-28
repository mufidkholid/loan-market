"use client";
import { useState } from "react";
import { FiMinus, FiPlus, FiCalendar, FiSave } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditBankProductForm() {
  const [form, setForm] = useState({
    bank: "Mandiri",
    jenisProduct: "Kredit Pemilikan Rumah Secondary (KPR Secondary)",
    isPromo: false,
    promoStart: null as Date | null,
    promoEnd: null as Date | null,
    jaminan: ["Ruko", "Rukan", "Rumah", "Apartemen"],
    targetMarket: ["Pengusaha", "Karyawan"],
    komisi: 1,
    appraisal: 1,
    floating: 1,
    loanToValue: 1,
    penaltyFee: 0,
    interestRate: 3.65,
    fixRate: 3.88,
    fixRateYear: 3,
    maxTenor: 12,
    keterangan: "Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak.",
    url: "null",
  });

  const handleNumberChange = (key: keyof typeof form, delta: number) => {
    setForm((prev) => ({
      ...prev,
      [key]: Math.max(0, Number(prev[key]) + delta),
    }));
  };

  return (
    <form className="bg-white border border-gray-200 rounded-md shadow-sm p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* === Kolom Kiri === */}
        <div className="space-y-4">
          {/* Bank */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bank</label>
            <select className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm" value={form.bank} onChange={(e) => setForm({ ...form, bank: e.target.value })}>
              <option>Mandiri</option>
              <option>BNI</option>
              <option>BRI</option>
              <option>BCA</option>
            </select>
          </div>

          {/* Jenis Product */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Product</label>
            <select className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm" value={form.jenisProduct} onChange={(e) => setForm({ ...form, jenisProduct: e.target.value })}>
              <option>KPR Primary</option>
              <option>Kredit Pemilikan Rumah Secondary (KPR Secondary)</option>
            </select>
          </div>

          {/* Promotional Product + Date Picker */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input type="checkbox" checked={form.isPromo} onChange={(e) => setForm({ ...form, isPromo: e.target.checked })} />
              Promotional Product
            </label>

            <div className="flex items-center justify-between border border-gray-300 bg-gray-100 rounded-sm px-3 py-2 relative">
              <div className="flex items-center text-sm text-gray-700">
                <DatePicker
                  selected={form.promoStart}
                  onChange={(date) => setForm({ ...form, promoStart: date })}
                  dateFormat="dd/MM/yyyy"
                  className="bg-transparent text-sm text-gray-700 w-auto text-left focus:outline-none"
                  value={form.promoStart ? form.promoStart.toLocaleDateString("id-ID") : new Date().toLocaleDateString("id-ID")}
                />
                <span className="mx-2 -ml-20 text-gray-500 font-bold text-lg">→</span>

                <DatePicker
                  selected={form.promoEnd}
                  onChange={(date) => setForm({ ...form, promoEnd: date })}
                  dateFormat="dd/MM/yyyy"
                  className="bg-transparent text-sm text-gray-700 w-auto text-left focus:outline-none"
                  value={form.promoEnd ? form.promoEnd.toLocaleDateString("id-ID") : new Date().toLocaleDateString("id-ID")}
                />
              </div>
              <FiCalendar className="text-gray-500" size={18} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Jaminan</label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["Ruko", "Rukan", "Rumah", "Apartemen", "Kendaraan Pribadi", "Sertifikat Perusahaan", "Slip Gaji"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.jaminan.includes(item)}
                    onChange={(e) => {
                      const newVal = e.target.checked ? [...form.jaminan, item] : form.jaminan.filter((v) => v !== item);
                      setForm({ ...form, jaminan: newVal });
                    }}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Market</label>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {["Pengusaha", "Karyawan", "Profesional", "Milenial", "ASN", "POLRI", "TNI", "Lainnya"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.targetMarket.includes(item)}
                    onChange={(e) => {
                      const newVal = e.target.checked ? [...form.targetMarket, item] : form.targetMarket.filter((v) => v !== item);
                      setForm({ ...form, targetMarket: newVal });
                    }}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {["komisi", "appraisal", "floating"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field}</label>
              <div className="flex items-center relative">
                <button type="button" onClick={() => handleNumberChange(field as any, -1)} className="absolute left-0 top-0 bottom-0 px-3 flex items-center justify-center text-white bg-[#17A9E2] hover:bg-[#005274] rounded-l-sm">
                  <FiMinus size={14} />
                </button>
                <input type="text" className="w-full border border-gray-300 rounded-sm px-10 py-2 text-sm text-center" value={`${form[field as keyof typeof form]}%`} readOnly />
                <button type="button" onClick={() => handleNumberChange(field as any, 1)} className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center text-white bg-[#17A9E2] hover:bg-[#005274] rounded-r-sm">
                  <FiPlus size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* === Kolom Kanan === */}
        <div className="space-y-4">
          {[
            { key: "loanToValue", label: "Loan to Value" },
            { key: "penaltyFee", label: "Penalty Fee" },
            { key: "interestRate", label: "Interest Rate" },
            { key: "fixRate", label: "Fix Rate" },
            { key: "fixRateYear", label: "Fix Rate (Year)" },
            { key: "maxTenor", label: "Max Tenor (Year)" },
          ].map(({ key, label }) => {
            const showPercent = !["fixRateYear", "maxTenor"].includes(key);

            return (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <div className="flex items-center relative">
                  <button type="button" onClick={() => handleNumberChange(key as any, -1)} className="absolute left-0 top-0 bottom-0 px-3 flex items-center justify-center text-white bg-[#17A9E2] hover:bg-[#005274] rounded-l-sm">
                    <FiMinus size={14} />
                  </button>

                  <input type="text" className="w-full border border-gray-300 rounded-sm px-10 py-2 text-sm text-center" value={`${form[key as keyof typeof form]}${showPercent ? "%" : ""}`} readOnly />

                  <button type="button" onClick={() => handleNumberChange(key as any, 1)} className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center text-white bg-[#17A9E2] hover:bg-[#005274] rounded-r-sm">
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>
            );
          })}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Keterangan</label>
            <textarea className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm" rows={4} value={form.keterangan} onChange={(e) => setForm({ ...form, keterangan: e.target.value })} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
            <input type="text" className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button type="submit" className="flex items-center gap-2 bg-[#17A9E2] hover:bg-[#005274] text-white font-medium px-6 py-2 rounded-sm shadow-sm transition-all">
          <FiSave size={18} />
          UPDATE
        </button>
      </div>
    </form>
  );
}
