import React from "react";
import { LucideIcon } from "lucide-react";

export type InputProps = {
  placeHolder: string;
  value: string;
  icon?: LucideIcon;
  image?: string;
};

export default function InputHolder(props: InputProps) {
  return (
    <div className="flex p-2 justify-between items-center gap-1 h-16 bg-gray-200 rounded-xl">
      <div className="flex flex-col gap-2 justify-center">
        <p className="text-sm text-gray-500 font-semibold">
          {props.placeHolder}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            {props.image && (
              <img
                src={props.image}
                className="w-7 h-7 rounded-full object-cover"
              />
            )}
            <p className="font-semibold text-sm text-gray-800 truncate">
              {props.value}
            </p>
          </div>
        </div>
      </div>
      {props.icon && (
        <props.icon className="text-gray-500 hover:text-gray-800 cursor-pointer" />
      )}
    </div>
  );
}
