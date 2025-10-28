import { HiOutlineSearch } from "react-icons/hi";
import { RiSortAlphabetAsc } from "react-icons/ri";
import BankCardList from "./BankCardList";
import { FiSave } from "react-icons/fi";
import LoanHeader from "./LoanHeader";

const SearchFilterloan = () => {
  return (
    <div>
      <LoanHeader />
      <div className="card">
        <div className="w-full space-y-3">
          {/* === Baris atas: Search + Sort === */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <div className="relative flex-1 w-full bg-white">
              <input type="text" placeholder="Cari berdasarkan nama" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-10" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <HiOutlineSearch size={18} className="text-[#17A9E2]" />
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 whitespace-nowrap">
              <RiSortAlphabetAsc size={18} />
              <span>Sort</span>
            </button>
          </div>

          {/* === Baris bawah: Checkbox + teks + ikon === */}
          <div className="flex items-start gap-2">
            {/* Checkbox */}
            <input type="checkbox" id="sendToPool" className="mt-1 accent-[#17A9E2] cursor-pointer" />
            <label htmlFor="sendToPool" className="text-xs text-gray-700 leading-snug flex items-center gap-1 flex-1">
              <span className="font-medium flex items-center gap-1">Send to Pool</span>
              <span className="ml-1 text-gray-700">(Pilih opsi ini jika Anda ingin mengirim leads ke semua bank rekanan Loan Market)</span>
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#17A9E2] text-white text-[10px] font-bold cursor-pointer hover:bg-[#005274] transition">?</div>
            </label>
          </div>
          <BankCardList />
          <div className="flex justify-end pt-4">
            <button type="submit" className="flex items-center gap-2 bg-[#005274] hover:bg-[#17A9E2] text-white font-medium px-6 py-2 rounded-sm shadow-sm transition-all">
              <FiSave size={18} />
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterloan;
