"use client";

import EditBankProductForm from "@/components/bank-product/EditBankProductForm";
import { useRouter, useParams } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();

  const id = Array.isArray(params.id) ? params.id[0] : (params.id as string);

  return (
    <div className="space-y-6">
      <div className="-mt-6 -ml-6 -mr-6 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-3 px-6 py-4">
          <button onClick={() => router.back()} className="flex items-center justify-center w-9 h-9 bg-[#17A9E2] text-white rounded-full hover:bg-[#1495c9] transition-colors">
            <FiArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-[#4F5051] ml-4">Edit Product</h1>
        </div>
      </div>

      <div className="">
        <EditBankProductForm />
      </div>
    </div>
  );
}
