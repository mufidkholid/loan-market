import { Building, CreditCard, Mail, Phone } from "lucide-react";
import Image from "next/image";

const ContactCard = () => {
  return (
    <div className="-mt-6 -ml-6 -mr-6">
      <div className="w-full bg-white border-b border-gray-200 flex flex-col sm:flex-row items-center sm:items-start p-5 sm:p-7 gap-4 shadow-sm">
        {/* Foto Profil */}
        <Image src="/profile.png" alt="Yohannes Affandy" width={80} height={80} className="mt-4 rounded-full object-cover flex-shrink-0" />

        <div className="flex-1 min-w-0 text-center sm:text-left sm:ml-3">
          <h1 className="text-lg sm:text-xl font-semibold text-[#17A9E2] mb-2">YOHANNES AFFANDY (JOJO)</h1>

          {/* Info Detail */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-6">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-sm justify-center sm:justify-start">
                <div className="bg-[#E2F0FF] p-1 rounded-full mr-2 shrink-0">
                  <Building size={16} color="#17A9E2" />
                </div>
                <span>Loan Market Office Dev</span>
              </div>
              <div className="flex items-center text-sm justify-center sm:justify-start">
                <div className="bg-[#E2F0FF] p-1 rounded-full mr-2 shrink-0">
                  <p className="text-[#17A9E2] font-semibold">ID:</p>
                </div>
                <span className="font-medium">LM9990001</span>
              </div>
            </div>

            <div className="hidden sm:block h-16 w-px bg-gray-300"></div>

            <div className="flex flex-col space-y-2 mt-3 sm:mt-0">
              <div className="flex items-center text-sm justify-center sm:justify-start">
                <div className="bg-[#E2F0FF] p-1 rounded-full mr-2 shrink-0">
                  <Mail size={16} color="#17A9E2" />
                </div>
                <span className=" truncate max-w-[180px] sm:max-w-none">it@loanmarket.co.id</span>
              </div>
              <div className="flex items-center text-sm justify-center sm:justify-start">
                <div className="bg-[#E2F0FF] p-1 rounded-full mr-2 shrink-0">
                  <Phone size={16} color="#17A9E2" />
                </div>
                <span className="font-medium ">6281234567890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
