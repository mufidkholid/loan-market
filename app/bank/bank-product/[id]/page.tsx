"use client";
import { useRouter, useParams } from "next/navigation";
import BankProductDetail from "@/components/bank-product/BankProductDetail";
import { FiArrowLeft, FiEdit, FiTrash2 } from "react-icons/fi";

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;
  const handleBack = () => router.back();

  const handleEdit = () => {
    router.push(`/bank/bank-product/edit/${productId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="-mt-6 -ml-6 -mr-6 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={handleBack} className="flex items-center justify-center w-9 h-9 bg-[#17A9E2] text-white rounded-full hover:bg-[#1495c9] transition-colors">
              <FiArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-semibold text-[#4F5051] ml-4">Bank Produk Detail</h1>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={handleEdit} className="flex items-center gap-2 bg-[#005274] hover:bg-[#17A9E2] text-white font-medium px-4 py-2 rounded-sm shadow-sm transition-all">
              <FiEdit size={18} />
              Edit Product
            </button>

            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-sm shadow-sm transition-all">
              <FiTrash2 size={18} />
              Delete Product
            </button>
          </div>
        </div>
      </div>
      <BankProductDetail />
    </div>
  );
}
