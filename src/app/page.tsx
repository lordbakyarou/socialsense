import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/ui/PageTItle";
import Image from "next/image";

import { User, ShoppingCart, Banknote, LineChart } from "lucide-react";
import BarChart from "@/components/BarChart";
import Dot from "@/components/ui/dot";
import CustomerPieChart from "@/components/CustomerPieChart";

const cardData: CardProps[] = [
  { label: "Customers", amount: "3,812", increase: "15.73", icon: User },
  { label: "Orders", amount: "1,658", increase: "21.15", icon: ShoppingCart },
  { label: "Revenue", amount: "2,000", increase: "12.76", icon: Banknote },
  { label: "Growth", amount: "2,000", increase: "32.56", icon: LineChart },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full bg-gray-100 min-h-screen">
      <PageTitle title="Dashboard" />
      <section className="grid  gap-4 transition-all grid-cols-2 max-lg:grid-cols-1">
        <section className="grid grid-cols-2 gap-4 gap-x-8 max-sm:grid-cols-1 w-full">
          {cardData.map((card, index) => (
            <Card
              key={index}
              amount={card.amount}
              label={card.label}
              increase={card.increase}
              icon={card.icon}
            />
          ))}
        </section>
        <CardContent>
          <p className="p-2 font-semibold"> Projections vs Actuals</p>
          <p className="w-full flex justify-end items-center gap-1">
            {" "}
            <Dot color="bg-gray-200" />
            Projection
            <Dot color="bg-yellow-500" /> Actuals
          </p>
          <BarChart />
        </CardContent>
      </section>
      <section>
        <CardContent>
          <p className="p-2 font-semibold">Customer Segmentations</p>
          <CustomerPieChart />
        </CardContent>
      </section>
    </div>
  );
}
