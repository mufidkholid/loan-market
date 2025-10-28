import CardStats from "../components/dashboard/CardStats";
import NotificationList from "../components/dashboard/NotificationList";
import { dummyStats } from "../lib/data";
import BankCharts from "@/components/dashboard/BankCharts";
import ContactCard from "@/components/dashboard/ContactCard";
import LoanAndTarget from "@/components/dashboard/LoanAndTarget";

const Page = () => {
  const stats = dummyStats();

  return (
    <div className="space-y-6">
      <ContactCard />
      <div className="space-y-6">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <CardStats title="Contact" value={stats.contact} />
              <CardStats title="Loan" value={stats.loan} />
              <CardStats title="Product" value={stats.product} />
              <CardStats title="Bank" value={stats.bank} />
            </div>

            <div className="w-full">
              <LoanAndTarget />
            </div>

            <div className="card">
              <h3 className="text-lg font-bold mb-2 text-center">Top 5 Bank Approval Tertinggi</h3>
              <BankCharts />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="card h-full">
              <NotificationList />
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default Page;
