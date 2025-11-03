"use client";

import { ChevronDown, Bell } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const titleMap: Record<string, string> = {
    "/": "Dashboard",
    "/product/bank-product": "Product",
    "/product/bank-product/[id]": "Product",
    "/loan/choose-product": "Edit Application",
    "/loan/address": "Edit Application",
    "/loan/upload-document": "Edit Application",

  };

  const title = titleMap[pathname] || "Product";

  return (
    <header className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-6">
      <h1 className="text-lg font-semibold text-gray-800">{title}</h1>

      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative flex items-center gap-1 px-3 py-1 border-x border-gray-200">
          <Bell size={20} className="text-gray-600" />
          <ChevronDown size={18} className="text-gray-500" />
        </button>

        {/* User Info */}
        <div className="flex items-center gap-2 pl-3">
          <div className="flex flex-col text-sm leading-tight">
            <span className="font-medium text-gray-800">YOHANNES AFFANDY</span>
          </div>
          
          <div className="flex items-center pr-3 border-r border-gray-200">
            <ChevronDown size={18} className="text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
