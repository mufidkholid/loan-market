"use client";
import BankCard from "./BankCard";
import { banks } from "@/lib/data";

export default function BankCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {banks.map((bank) => (
        <BankCard key={bank.id} {...bank} />
      ))}
    </div>
  );
}
