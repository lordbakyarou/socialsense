import React from "react";
import { Switch } from "./ui/switch";

export type SwitchProps = {
  title: string;
  percentage?: number;
};

export default function CustomSwitch(props: SwitchProps) {
  return (
    <div className="flex justify-between text-sm items-center">
      <div className="flex gap-2 font-semibold ">
        <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" />
        {props.title}
      </div>
      {props.percentage}%
    </div>
  );
}
