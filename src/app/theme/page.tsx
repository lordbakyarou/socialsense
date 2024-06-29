"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import PageTitle from "@/components/ui/PageTItle";
import { MapPin } from "lucide-react";

type Props = {};

export default function ThemePage({}: Props) {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("");

  useEffect(() => {
    const savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
      setSelectedColor(savedColor);
    }
  }, []);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleColortext = (color: string) => {
    setTextColor(color);
  };

  const handleSaveClick = () => {
    localStorage.setItem("selectedColor", selectedColor);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 px-6 bg-gray-50 border-b space-y-3 md:space-y-0 md:space-x-6">
          <PageTitle title="Themes" />
          <button className="flex justify-evenly rounded-md items-center pt-2 pb-2 pl-2 pr-2 rounded bg-gray- font-semibold">
            Mayur Hanwate
            <img
              width={40}
              height={40}
              className="rounded-full"
              src="https://lh3.googleusercontent.com/a/ACg8ocK4HOMAUmzsbMDCegO9UspAC-tpu8yX5wvXFcCOCZLKJQbRd1ET=s360-c-no"
            />
          </button>
        </div>
        <main>
          <div className="flex flex-col md:flex-row m-4 p-4 md:p-8 justify-between items-center bg-gray-200 rounded-md shadow-sm">
            <div className="ml-4 rounded-md text-lg md:text-2xl font-bold">
              Apply a skin to your profile
            </div>
            <div className="flex justify-evenly gap-4 mt-4 md:mt-0">
              <button className="bg-gray-100 pt-2 pb-2 pl-8 pr-8 rounded-md">
                + Custom
              </button>
              <button
                className="rounded-md bg-black text-white pt-2 pb-2 pl-8 pr-8"
                onClick={handleSaveClick}
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="m-4 w-full md:w-[500px]">
              <h1 className="text-lg font-bold">Solids</h1>
              <div className="grid grid-cols-6 md:grid-cols-7 gap-1">
                {[
                  "bg-black",
                  "bg-gray-200",
                  "bg-white",
                  "bg-blue-500",
                  "bg-red-500",
                  "bg-green-500",
                  "bg-yellow-500",
                  "bg-purple-500",
                  "bg-pink-500",
                  "bg-indigo-500",
                  "bg-teal-500",
                  "bg-orange-500",
                ].map((item) => (
                  <div
                    key={item}
                    className={`w-10 h-10 ${item} border cursor-pointer ${
                      selectedColor === item ? "border-black" : ""
                    }`}
                    onClick={() => handleColorClick(item)}
                  />
                ))}
              </div>
              <h1 className="text-lg font-bold">Linear Gradient</h1>
              <div className="grid grid-cols-6 md:grid-cols-7 gap-2">
                {[
                  "bg-gradient-to-r from-cyan-500 to-blue-500",
                  "bg-gradient-to-r from-sky-500 to-indigo-500",
                  "bg-gradient-to-r from-white to-gray-300",
                  "bg-gradient-to-r from-blue-500 to-green-500",
                  "bg-gradient-to-r from-red-500 to-yellow-500",
                  "bg-gradient-to-r from-green-500 to-teal-500",
                  "bg-gradient-to-r from-yellow-500 to-orange-500",
                  "bg-gradient-to-r from-purple-500 to-pink-500",
                  "bg-gradient-to-r from-pink-500 to-red-500",
                  "bg-gradient-to-r from-indigo-500 to-purple-500",
                  "bg-gradient-to-r from-teal-500 to-blue-500",
                  "bg-gradient-to-r from-orange-500 to-red-500",
                ].map((gradient) => (
                  <div
                    key={gradient}
                    className={`w-10 h-10 ${gradient} border cursor-pointer ${
                      selectedColor === gradient ? "border-black" : ""
                    }`}
                    onClick={() => handleColorClick(gradient)}
                  />
                ))}
              </div>
              <h1 className="text-lg font-bold">Radial Gradient</h1>
              <div className="grid grid-cols-6 md:grid-cols-7 gap-1">
                {[
                  "radial-gradient-1",
                  "radial-gradient-2",
                  "radial-gradient-3",
                  "radial-gradient-4",
                  "radial-gradient-5",
                  "radial-gradient-6",
                  "radial-gradient-7",
                  "radial-gradient-8",
                  "radial-gradient-9",
                  "radial-gradient-10",
                  "radial-gradient-11",
                  "radial-gradient-12",
                ].map((gradient) => (
                  <div
                    key={gradient}
                    className={`w-10 h-10 ${gradient} border cursor-pointer ${
                      selectedColor === gradient ? "border-black" : ""
                    }`}
                    onClick={() => handleColorClick(gradient)}
                  />
                ))}
              </div>
              <h1 className="text-lg font-bold">Foreground Color</h1>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-1">
                {["black", "white"].map((color) => (
                  <div
                    key={color}
                    className={`w-10 h-10 bg-${color} border cursor-pointer ${
                      textColor === `text-${color}` ? "border-black" : ""
                    }`}
                    onClick={() => handleColortext(`text-${color}`)}
                  />
                ))}
              </div>
            </div>
            <div className="w-full border rounded-lg" id="preview">
              <div
                className={`w-full ${selectedColor}`}
                style={{
                  color: textColor.includes("white") ? "white" : "black",
                }}
              >
                <div
                  className={`p-2 border-dashed ${selectedColor} rounded-md `}
                >
                  <div className="font-sans  leading-tight min-h-screen bg-grey-lighter p-8">
                    <div className="max-w-lg relative  mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                      <div
                        className="bg-cover h-40"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1655682621708-5e42174d59ce?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        }}
                      ></div>
                      <div
                        className={`border-black ${selectedColor} px-4 pb-6`}
                      >
                        <div className="text-center absolute top-20 sm:text-left sm:flex mb-4">
                          <img
                            width={128}
                            height={128}
                            className="rounded-full"
                            src="https://lh3.googleusercontent.com/a/ACg8ocK4HOMAUmzsbMDCegO9UspAC-tpu8yX5wvXFcCOCZLKJQbRd1ET=s360-c-no"
                          />
                        </div>

                        <div className="py-16">
                          <h3 className="font-bold text-2xl mb-1">
                            Mayur Hanwate
                          </h3>
                          <div className="inline-flex text-grey-dark sm:flex items-center font-semibold text-gray-500">
                            (MERN) Full Stack Developer
                          </div>
                          <div className="inline-flex text-grey-dark sm:flex items-center font-semibold text-gray-500 pt-2">
                            <MapPin />
                            Chandrapur, Maharashtra
                          </div>
                          <div className="mt-4 inline-flex text-grey-dark sm:flex items-center rounded-lg border border-dashed p-2 border-4 bg-gray-50">
                            <p className="text-gray-500">
                              Highly motivated and skilled Frontend Developer
                              with a passion for crafting user-friendly
                              experiences. Proven ability to translate complex
                              ideas into intuitive and engaging web applications
                              using React.js, MERN stack and Tailwind for better
                              UI/UX. Additionally, I possess strong analytical
                              skills honed through experience testing DWH/BI
                              applications using SQL and JavaScript. Eager to
                              leverage expertise to contribute to innovative
                              projects and make a positive impact.
                            </p>
                          </div>
                          <div className="mt-4">
                            <p>Biography</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
