"use client";
import { dummyBankApprovals } from "@/lib/data";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#4A3764", "#1FFFE1", "#51C4E9", "#146C94", "#6150C1"];

const BankCharts = () => {
  const data = dummyBankApprovals;

  return (
    <div className="w-full h-72 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={60}
            label={(entry: any) => {
              const percent = Number(entry.percent || 0);
              return `${entry.name} ${(percent * 100).toFixed(0)}%`;
            }}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => `${value}%`}
            contentStyle={{
              borderRadius: "10px",
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BankCharts;
