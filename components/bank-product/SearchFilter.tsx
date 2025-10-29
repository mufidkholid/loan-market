import { HiOutlineSearch } from "react-icons/hi";
import { RiSortAlphabetAsc } from "react-icons/ri";

const SearchFilter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
      {/* Search input */}
      <div className="relative w-full md:col-span-1 lg:col-span-2 bg-white">
        <input type="text" placeholder="Cari berdasarkan nama" className="w-full px-4 py-3 lg:py-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 pr-10" />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <HiOutlineSearch size={16} className="text-[#17A9E2]" />
        </div>
      </div>

      {/* Select dropdown */}
      <div className="w-full md:col-span-1 lg:col-span-2">
        <select className="w-full px-4 py-3 lg:py-4 text-sm border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
          <option>Kredit Pemilikan...</option>
          <option>Semua Kredit</option>
          <option>Kredit Aktif</option>
          <option>Kredit Selesai</option>
        </select>
      </div>

      {/* Sort button */}
      <div className="w-full md:col-span-1 lg:col-span-1">
        <button className="flex items-center justify-center lg:justify-start gap-3 lg:gap-6 px-4 py-3 lg:py-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 w-full">
          <RiSortAlphabetAsc size={16} />
          <span>Sort</span>
        </button>
      </div>

      {/* Add product button */}
      <div className="w-full md:col-span-1 lg:col-span-1">
        <button className="px-4 py-3 lg:py-4 text-sm w-full font-medium text-white bg-[#17A9E2] rounded-md hover:bg-blue-600">+ Tambah Product</button>
      </div>
    </div>
  );
};

export default SearchFilter;
