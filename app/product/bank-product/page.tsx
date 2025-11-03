import MenuBankProduct from "@/components/bank-product/MenuBankProduct";
import ProductBank from "@/components/bank-product/ProductBank";
import SearchFilter from "@/components/bank-product/SearchFilter";

const BankProductPage = () => {
  return (
    <div className="space-y-6">
      <div className="-mt-6 -ml-6 -mr-6">
        <div className="w-full bg-white border-b border-gray-200 flex justify-center shadow-sm">
          <div className="flex gap-20">
            <div className="flex flex-col items-center pt-4 w-32">
              <span className="text-xl font-bold mb-2 text-[#17A9E2]">Bank</span>
              <span className="w-full h-1 bg-[#17A9E2] rounded-full"></span>
            </div>
            <div className="flex flex-col items-center pt-4 w-32">
              <span className="text-xl font-bold mb-2">Developer</span>
              <span className="w-full h-1"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <MenuBankProduct title="KPR dan Multiguna" />
        <MenuBankProduct title="Refinancing" />
        <MenuBankProduct title="Kredit Modal Usaha dan Investasi" />
        <MenuBankProduct title="Deposito" />
        <MenuBankProduct title="Take Over and Bridging Loan" />
      </div>

      <div className="space-y-6">
        <SearchFilter />
      </div>
      <div className="space-y-6">
        <ProductBank />
      </div>
    </div>
  );
};

export default BankProductPage;
