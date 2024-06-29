import { cn } from "@/lib/utils";
import { LucideIcon, MoveUp, ArrowUpLeft } from "lucide-react";
import React from "react";

export type CardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  increase: string;
};

export default function Card(props: CardProps) {
  return (
    <CardContent>
      <section className="flex gap-10 items-center">
        <div className="w-10 h-10  bg-yellow-100 flex items-center justify-center rounded-full">
          <props.icon className="text-orange-700  rounded-full " />
        </div>

        <p className="font-semibold">{props.label}</p>
      </section>
      <section>
        <h1 className="text-3xl font-semibold">{props.amount}</h1>
        <h4 className="font-semibold text-green-500 flex">
          <ArrowUpLeft className="rotate-45" />
          {props.increase}%
        </h4>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow bg-white",
        props.className
      )}
    />
  );
}
