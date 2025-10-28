"use client";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { steps } from "@/lib/data";

const AddressHeader = () => {
  const [currentStep] = useState(2);
  const router = useRouter();

  return (
    <div>
      <div className="-mt-4 -ml-4 -mr-4 sm:-mt-6 sm:-ml-6 sm:-mr-6 bg-white border-b border-gray-200 shadow-sm">
        <div className="relative px-4 py-6 sm:px-6 sm:py-8">
          <div className="relative w-full flex flex-col items-center">
            {/* Container titik dan label */}
            <div className="flex justify-between w-full relative z-10 flex-wrap sm:flex-nowrap">
              {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;
                const circleColor = isCompleted ? "#005274" : isActive ? "#17A9E2" : "#d1d5db";
                const textColor = isCompleted ? "#005274" : isActive ? "#17A9E2" : "#6b7280";
                const fontWeight = isCompleted || isActive ? "font-medium" : "font-normal";

                return (
                  <div key={index} className="flex flex-col items-center relative flex-1 min-w-[50px] mb-2 sm:mb-0">
                    {/* Garis progress untuk setiap segment */}
                    {index > 0 && <div className="absolute top-2 sm:top-2 left-0 right-1/2 h-0.5 sm:h-[3px] bg-gray-200 z-0" style={{ backgroundColor: index <= currentStep ? "#005274" : "#d1d5db" }} />}
                    {index < steps.length - 1 && <div className="absolute top-2 sm:top-2 left-1/2 right-0 h-0.5 sm:h-[3px] bg-gray-200 z-0" style={{ backgroundColor: index < currentStep ? "#005274" : "#d1d5db" }} />}

                    {/* Titik progress */}
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-sm relative z-10" style={{ backgroundColor: circleColor }} />
                    <div className="w-14 sm:w-20 text-center mt-1 sm:mt-2">
                      <span className={`text-[10px] sm:text-xs ${fontWeight} whitespace-normal leading-tight block`} style={{ color: textColor }}>
                        {step}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-6 mb-6 space-y-2 sm:space-y-0">
        <button onClick={() => router.back()} className="flex items-center justify-center w-9 h-9 bg-[#17A9E2] text-white rounded-full hover:bg-[#1495c9] transition-colors">
          <FiArrowLeft size={20} />
        </button>

        <div className="text-center flex flex-col items-center px-2">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">Alamat</h1>
        </div>

        <button onClick={() => router.push("/loan/upload-document")} className="flex items-center justify-center w-9 h-9 bg-[#17A9E2] text-white rounded-full hover:bg-[#1495c9] transition-colors">
          <FiArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default AddressHeader;
