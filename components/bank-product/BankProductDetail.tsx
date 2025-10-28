"use client";

const BankProductDetail = () => {
  const product = {
    bank: "Mandiri",
    name: "Bunga Special Tengah Imlek 2023",
    jaminan: "Ruko, Rukan, Rumah, Apartemen",
    target: "Karyawan, Pengusaha",
    komisi: "1 %",
    appraisal: "1 %",
    floating: "1 %",
    loanToValue: "1 %",
    penaltyFee: "-",
    interestRate: "3.65 %",
    fixRatePercent: "3.88 %",
    fixRateYear: "3",
    maxTenor: "12",
    keterangan: "Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak.",
    url: "null",
  };

  return (
    <div className="bg-white shadow-sm rounded-md p-6 w-full border border-gray-200">
      <div className="">
        {[
          ["Bank", product.bank],
          ["Nama Product", product.name],
          ["Jaminan", product.jaminan],
          ["Target Market", product.target],
          ["Komisi", product.komisi],
          ["Appraisal", product.appraisal],
          ["Floating", product.floating],
          ["Loan to Value", product.loanToValue],
          ["Penalty Fee", product.penaltyFee],
          ["Interest Rate", product.interestRate],
          ["Fix Rate %", product.fixRatePercent],
          ["Fix Rate (year)", product.fixRateYear],
          ["Max Tenor (year)", product.maxTenor],
          ["Keterangan", product.keterangan],
          ["URL", product.url],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col sm:flex-row sm:items-center py-2 gap-1">
            <label className="sm:w-1/4 text-sm font-medium text-gray-700">{label}</label>

            {label === "Keterangan" ? (
              <textarea readOnly value={value} rows={3} className="sm:w-3/4 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#17A9E2]" />
            ) : (
              <input type="text" readOnly value={value} className="sm:w-3/4 w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#17A9E2]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankProductDetail;
