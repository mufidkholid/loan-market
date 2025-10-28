"use client";

import { dummyLoanProgress, dummyTarget } from "../../lib/data";
import { SquarePen } from "lucide-react";

const LoanAndTarget = () => {
  const { approved, total, percentage: loanPercentage } = dummyLoanProgress;
  const { achieved, goal, percentage: targetPercentage } = dummyTarget;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);

  const ringProgress = Math.min(targetPercentage, 100);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col sm:flex-row relative">
      {/* Loan Progress */}
      <div className="flex flex-1 flex-col items-center justify-center text-center space-y-3 p-6">
        <h3 className="text-sm font-bold">PINJAMAN DISETUJUI</h3>

        <div className="relative flex items-center justify-center w-28 h-28">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="50%" cy="50%" r="40%" stroke="#e5e7eb" strokeWidth="10" fill="none" />
            <circle cx="50%" cy="50%" r="40%" stroke="#17A9E2" strokeWidth="10" fill="none" strokeDasharray="251.2" strokeDashoffset={(1 - loanPercentage / 100) * 251.2} strokeLinecap="round" />
          </svg>
          <div className="absolute text-xl font-semibold text-gray-800">{loanPercentage}%</div>
        </div>

        <p className="text-sm font-bold">
          {approved}/{total} Pinjaman telah disetujui
        </p>
      </div>

      <div className="hidden sm:block absolute top-[5%] bottom-[5%] left-1/2 w-px bg-gray-200" />

      <div className="relative flex flex-1 flex-col items-center justify-center text-center space-y-3 p-6">
        <button className="absolute top-4 right-4 p-1 rounded-md border border-[#17A9E2] text-[#17A9E2] hover:bg-[#17A9E2]/10 transition" title="Edit Target">
          <SquarePen size={16} />
        </button>

        <h3 className="text-sm font-bold">TARGET</h3>

        <div className="relative w-28 h-28">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-gray-200"
              strokeWidth="3"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#17A9E2]"
              strokeWidth="3"
              strokeDasharray={`${ringProgress}, 100`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              transform="rotate(90 18 18)"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="fill-gray-800 text-[8px] font-semibold" textAnchor="middle">
              {targetPercentage}%
            </text>
          </svg>
        </div>

        <p className="text-sm font-bold">
          {formatCurrency(achieved)} / {formatCurrency(goal)}
        </p>
      </div>
    </div>
  );
}

export default LoanAndTarget
