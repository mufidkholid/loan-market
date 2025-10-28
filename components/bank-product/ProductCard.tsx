"use client";
import { FaStar } from "react-icons/fa";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import { FiShield, FiPercent } from "react-icons/fi";
import { BiCoinStack } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductCardProps } from "@/types/product";

const ProductCard: React.FC<ProductCardProps> = ({ logoSrc, title, subtitle, fixRate, maxTenor, loanToValue, komisi, rating, reviews, users, jaminan, target, productId }) => {
    const router = useRouter();

    const handleDetailClick = () => {
      router.push(`bank-product/${productId}`);
    };

  return (
    <div className="w-full bg-white rounded-md shadow-sm p-5 grid grid-cols-1 lg:grid-cols-[220px_1fr_120px] items-center gap-6">
      <div className="flex flex-col items-center sm:items-start lg:items-center">
        {/* Logo */}
        <Image src={logoSrc} alt={title} width={120} height={60} className="object-contain" />

        <div className="mt-4 flex justify-between w-full sm:w-auto lg:w-full gap-8">
          <div className="flex flex-col items-center sm:items-start lg:items-center">
            <p className="text-xs text-gray-600 font-medium mb-1">Rating :</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`h-4 w-4 ${i < rating ? "text-sky-500" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-[11px] text-gray-500 mt-1">{reviews} Reviews</span>
          </div>

          <div className="flex flex-col items-center sm:items-start lg:items-center">
            <p className="text-xs text-gray-600 font-medium mb-1">User :</p>
            <p className="font-semibold text-sm leading-tight">{users}</p>
            <p className="text-[10px] text-gray-500 leading-tight">Users yearly</p>
          </div>
        </div>
      </div>

      <div className="lg:ml-6">
        <h2 className="text-lg font-semibold text-gray-800 text-center sm:text-left">
          {title} <span className="text-sky-600 font-medium">{subtitle}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FiPercent className="text-sky-500" />
            <span>Fix Rate (Year): {fixRate}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiShield className="text-sky-500" />
            <span>Jaminan: {jaminan}</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineClockCircle className="text-sky-500" />
            <span>Max Tenor: {maxTenor}</span>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineUser className="text-sky-500" />
            <span>Target: {target}</span>
          </div>
          <div className="flex items-center gap-2">
            <BiCoinStack className="text-sky-500" />
            <span>Loan to Value: {loanToValue}</span>
          </div>
          <div className="flex items-center gap-2">
            <BiCoinStack className="text-sky-500" />
            <span>Komisi: {komisi}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
        <button onClick={handleDetailClick} className="bg-white border border-sky-400 text-sky-600 hover:bg-sky-50 text-sm font-medium px-6 py-1.5 rounded-sm shadow-sm">Detail</button>
      </div>
    </div>
  );
};

export default ProductCard;
