"use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function BankCard({ id, logoSrc, title, description, rating, reviews }: BankCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative bg-white rounded-lg shadow-md border border-gray-200 p-4 w-full h-70 hover:shadow-lg transition">
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className="absolute top-3 left-3 w-4 h-4 accent-[#17A9E2] cursor-pointer" />

      <div className="flex justify-center mt-2 mb-3">
        <div className="relative w-32 h-12">
          <Image src={logoSrc} alt={title} fill className="object-contain" />
        </div>
      </div>

      <div className="flex flex-col items-center mb-3">
        <div className="flex gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} className={i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"} />
          ))}
        </div>
        <p className="text-xs text-gray-600">{reviews.toLocaleString()} Reviews</p>
      </div>

      <h3 className="text-sm font-semibold text-[#17A9E2] text-center mb-1">{title}</h3>
      <p className="text-xs text-gray-600 text-center line-clamp-3">{description || "Tidak ada deskripsi."}</p>
    </div>
  );
}
