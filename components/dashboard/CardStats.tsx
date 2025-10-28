import { Users, File } from "lucide-react";
import { ReactNode } from "react";
import { AiOutlineBank } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdOutlineContactMail } from "react-icons/md";

type CardStatsProps = {
  title: string;
  value: number | string;
};

const CardStats = ({ title, value }: CardStatsProps) => {
  const iconMap: Record<string, ReactNode> = {
    Contact: <MdOutlineContactMail className="text-[#17A9E2]" size={20} />,
    Loan: <File className="text-[#17A9E2]" size={20} />,
    Product: <LiaShoppingBagSolid className="text-[#17A9E2]" size={20} />,
    Bank: <AiOutlineBank className="text-[#17A9E2]" size={20} />,
  };

  return (
    <div className="card flex items-center justify-between">
      <div className="p-3 bg-[#E2F0FF] rounded-full">{iconMap[title]}</div>
      <div className="text-center">
        <h3 className="text-sm font-bold uppercase">{title}</h3>
        <p className="text-2xl font-bold text-[#17A9E2]">{value}</p>
      </div>
    </div>
  );
};

export default CardStats;
