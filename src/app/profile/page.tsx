import InputHolder, { InputProps } from "@/components/InputHolder";
import PageTitle from "@/components/ui/PageTItle";
import { CalendarDays, ChevronDown, Copy, Image, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import React from "react";
import { Progress } from "@/components/ui/progress";
import CustomSwitch, { SwitchProps } from "@/components/CustomSwtich";
import { Button } from "@/components/ui/button";

type Props = {};

const inputData: InputProps[] = [
  {
    placeHolder: "First Name",
    value: "Mayur",
  },
  {
    placeHolder: "Last Name",
    value: "Hanwate",
  },
  {
    placeHolder: "Email Address",
    value: "mayur1710hanwate@gmail.com",
    icon: Copy,
  },
  {
    placeHolder: "Phone Number",
    value: "+91 1234567890",
    icon: Copy,
  },
  {
    placeHolder: "Position",
    value: "MERN Developer",
  },
];

const teamData: InputProps[] = [
  {
    placeHolder: "HR",
    value: "Aman Thakur",
    icon: ChevronDown,
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    placeHolder: "Manager",
    value: "Aniket Vishwakarma",
    icon: ChevronDown,
    image:
      "https://images.unsplash.com/photo-1712847333453-740d9665aa5d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    placeHolder: "Lead",
    value: "Swapnil Nikule",
    icon: ChevronDown,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const onboardingData: SwitchProps[] = [
  {
    title: "Office Tour",
    percentage: 100,
  },
  {
    title: "Management Introdoctory",
    // percentage: 100,
  },
  {
    title: "Work Tools",
    percentage: 20,
  },
  {
    title: "Meet Your Colleagues",
    percentage: 0,
  },
  {
    title: "Duties Journal",
    percentage: 0,
  },
  {
    title: "Request Handling",
    percentage: 0,
  },
  {
    title: "Activity Tracking",
    percentage: 0,
  },
];

export default function ProfilePage({}: Props) {
  return (
    <div className="flex flex-col gap-5 w-full bg-gray-100 min-h-screen">
      <PageTitle title="User Profile" className="mt-5 ml-4 p-2" />
      <section className="mx-4 p-2 flex justify-between">
        <div className="flex gap-2 items-center">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocK4HOMAUmzsbMDCegO9UspAC-tpu8yX5wvXFcCOCZLKJQbRd1ET=s360-c-no"
            width={70}
            height={70}
            className="rounded-full max-sm:w-14"
          />
          <h1 className="font-semibold text-3xl max-sm:text-xl  ">
            Mayur Hanwate
          </h1>
        </div>
        <div className="flex gap-5 items-center">
          <p className="text-gray-500 max-lg:hidden">Added on 29.06.2024</p>
          <button className="text-red-500 font-semibold text-xl flex gap-2 rounded-xl bg-red-100 p-5 max-sm:p-2 items-center">
            <Trash />
            <p className="max-lg:hidden">Delete</p>
          </button>
        </div>
      </section>
      <hr />
      <section className="flex justify-evenly max-[1054px]:gap-20 max-[1054px]:justify-start mx-4 p-2 flex-wrap">
        <div className="flex flex-col gap-5">
          <p className="uppercase font-semibold text-gray-500">Profile Image</p>
          <div className="flex gap-3 flex-col">
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocK4HOMAUmzsbMDCegO9UspAC-tpu8yX5wvXFcCOCZLKJQbRd1ET=s360-c-no"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <p className="font-semibold text-blue-400 flex gap-2 items-center justify-center">
              <Image className="" />
              Change Profile Image
            </p>
          </div>
          <div className="flex gap-3 flex-col mt-5">
            <p className="uppercase font-semibold text-gray-500">
              Employee Details
            </p>
            {inputData.map((item, index) => (
              <InputHolder
                key={index}
                placeHolder={item.placeHolder}
                value={item.value}
                icon={item.icon}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-10 flex-col ">
          <div className="flex gap-3 flex-col">
            <p className="uppercase font-semibold text-gray-500">ROLE</p>
            <InputHolder
              key={1}
              placeHolder="Role"
              value="Employee"
              icon={ChevronDown}
            />
          </div>
          <div className="flex gap-3 flex-col">
            <p className="uppercase font-semibold text-gray-500">Team</p>
            {teamData.map((item, index) => (
              <InputHolder
                key={index}
                placeHolder={item.placeHolder}
                value={item.value}
                icon={item.icon}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <p className="uppercase font-semibold text-gray-500">Onboarding</p>
          <InputHolder
            key={1}
            placeHolder="Starts on"
            value="29.06.2024"
            icon={CalendarDays}
          />
          <div className="flex gap-2 mt-5">
            <Switch className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300" />
            <p className="font-semibold text-gray-800">Onboarding required</p>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <p className="text-gray-400 font-semibold text-sm">
              Current Status
            </p>
            <div className="flex gap-2">
              <div className="bg-green-200 p-2 rounded-xl">Onboarding</div>
              <div className="border p-2 rounded-xl shadow flex items-center gap-2">
                <Progress
                  value={35}
                  className="w-32 max-sm:w-20 h-1 bg-gray-300 text-blue-500 rounded-xl"
                  indicatorColor="bg-blue-500"
                />{" "}
                <p className="text-sm">35%</p>
              </div>
            </div>
            <p className="w-full flex justify-center  mt-5 text-blue-400 font-semibold">
              View Answers
            </p>
          </div>
          <div className="flex gap-3 flex-col gap-9 mt-10">
            <p className="uppercase font-semibold text-gray-400 text-sm">
              Onboarding Script
            </p>
            <div className="flex flex-col gap-5">
              {onboardingData.map((item, index) => {
                return (
                  <div className="flex flex-col gap-2" key={index}>
                    <CustomSwitch
                      title={item.title}
                      percentage={item.percentage}
                    />{" "}
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
