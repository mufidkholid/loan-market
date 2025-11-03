"use client";

import { useState } from "react";
import Link from "next/link";
import {  ChevronDown, ChevronRight, Menu, X, File } from "lucide-react";
import clsx from "clsx";
import { MdHelpOutline, MdManageHistory, MdOutlineContactMail, MdOutlineHome } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AiOutlineBank } from "react-icons/ai";
import { CgPerformance } from "react-icons/cg";
import { IoLayersOutline, IoLogoWhatsapp } from "react-icons/io5";

const menuItems = [
  { label: "Dashboard", icon: MdOutlineHome, href: "/" },
  { label: "Contact", icon: MdOutlineContactMail, href: "#" },
  { label: "Loan", icon: File, href: "/loan/address" },
  {
    label: "Product",
    icon: LiaShoppingBagSolid,
    subItems: [
      { label: "Bank Product", href: "/product/bank-product" },
      { label: "Product", href: "#" },
      { label: "Product Category", href: "#" },
    ],
  },
  { label: "Bank", icon: AiOutlineBank, href: "#" },
  { label: "Credit Scoring", icon: CgPerformance, href: "#" },
  { label: "FAQs", icon: MdHelpOutline, href: "#" },
  { label: "Pipeline", icon: IoLayersOutline, href: "#" },
  { label: "Pipeline Developer", icon: IoLayersOutline, href: "#" },
  { label: "Marketing Tools", icon: MdManageHistory, href: "#" },
  {
    label: "Whatsapp",
    icon: IoLogoWhatsapp,
    subItems: [
      { label: "Report", href: "#" },
      { label: "Engagement", href: "#" },
      { label: "Chat", href: "#" },
    ],
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // untuk mobile

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>

      {/* Sidebar */}
      <aside className={clsx("bg-white border-r border-gray-200 flex flex-col w-64 h-full fixed md:static top-0 left-0 z-50 transition-transform transform md:translate-x-0", sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="hidden md:flex relative items-start justify-center h-22">
          <div className="bg-[#17A9E2] text-white font-semibold flex flex-col items-start justify-center leading-tight px-4 py-2 pt-6 mt-0 text-left">
            <span className="text-lg">Loan</span>
            <span className="text-lg -mt-0.5">Market<sup className="text-[10px]">™</sup></span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {menuItems.map(({ label, icon: Icon, href, subItems }) => {
            const isOpen = openDropdowns.includes(label);
            const isActive = active === label;

            return (
              <div key={label} className="mb-1">
                {subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(label)}
                      className={clsx("flex items-center justify-between w-full px-3 py-2 rounded-md text-left transition", isActive ? "bg-[#17A9E2] text-white" : "text-gray-700 hover:bg-[#17A9E2]/10 hover:text-[#17A9E2]")}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} />
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                      {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                    </button>

                    <div className={clsx("overflow-hidden transition-all duration-300", isOpen ? "max-h-40 mt-1" : "max-h-0")}>
                      {subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setActive(sub.label)}
                          className={clsx("flex items-center gap-2 pl-10 pr-3 py-1.5 text-sm rounded-md transition", active === sub.label ? "bg-[#17A9E2] text-white" : "text-gray-600 hover:bg-[#17A9E2]/10 hover:text-[#17A9E2]")}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={href || "#"}
                    onClick={() => setActive(label)}
                    className={clsx("flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition", isActive ? "bg-[#17A9E2] text-white" : "text-gray-700 hover:bg-[#17A9E2]/10 hover:text-[#17A9E2]")}
                  >
                    <Icon size={18} />
                    {label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setSidebarOpen(false)}></div>}
    </>
  );
}

export default Sidebar;
