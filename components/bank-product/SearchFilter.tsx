import { HiOutlineSearch } from "react-icons/hi";
import { RiSortAlphabetAsc } from "react-icons/ri";

const SearchFilter = () => {
  return (
    <div className="grid grid-cols-6 gap-4 items-center">
      <div className="relative col-span-2 w-full bg-white">
        <input type="text" placeholder="Cari berdasarkan nama" className="w-full px-4 py-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-10" />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <HiOutlineSearch size={16} className="text-[#17A9E2]" />
        </div>
      </div>

      <div className="flex justify-start sm:justify-center col-span-2">
        <select className="w-80 px-4 py-4 text-sm border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
          <option>Kredit Pemilikan...</option>
          <option>Semua Kredit</option>
          <option>Kredit Aktif</option>
          <option>Kredit Selesai</option>
        </select>
      </div>

      <div className="flex justify-start sm:justify-center col-span-1 mr-6">
        <button className="flex items-center gap-6 px-4 py-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 w-full">
          <RiSortAlphabetAsc size={16} />
          <span>Sort</span>
        </button>
      </div>

      <div className="flex justify-start sm:justify-center col-span-2 sm:col-span-1">
        <button className="px-4 py-4 text-sm w-full font-medium text-white bg-[#17A9E2] rounded-md hover:bg-blue-600">+ Tambah Product</button>
      </div>
    </div>
  );
};

export default SearchFilter;
