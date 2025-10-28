import { ReactNode } from "react";
import { FiCreditCard, FiUser } from "react-icons/fi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { TbPigMoney } from "react-icons/tb";

const MenuBankProduct = ({ title }: { title: string }) => {
  const iconMap: Record<string, ReactNode> = {
    "KPR dan Multiguna": <IoHomeOutline className="text-[#999999]" size={40} />,
    Refinancing: <FiUser className="text-[#999999]" size={40} />,
    "Kredit Modal Usaha dan investasi": <FiCreditCard className="text-[#999999]" size={40} />,
    Deposito: <TbPigMoney className="text-[#999999]" size={40} />,
    "Take Over and Bridging Loan": <HiOutlineBuildingOffice className="text-[#999999]" size={40} />,
  };

  const icon = iconMap[title] ?? <IoHomeOutline className="text-[#999999]" size={40} />;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer">
      <div className="mb-2">{icon}</div>
      <h3 className="text-sm font-medium text-[#999999] text-center">{title}</h3>
    </div>
  );
}

export default MenuBankProduct
