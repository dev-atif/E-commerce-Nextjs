"use client";
import React, { useState } from "react";
import Authlayout from "../layout";
import { FaRegUserCircle } from "react-icons/fa";
import Inputfield from "@/app/components/shared/Inputfield";
import PaswordInput from "@/app/components/shared/PaswordInput";
import Link from "next/link";
const page = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className=" flex  justify-center items-center h-screen ">
        <div className="bg-white py-10 h-screen md:h-auto md:px-20  p-6 md:rounded-lg shadow flex-1 max-w-2xl">
          <div className="flex items-center justify-center gap-3">
            <span className="text-red-400">
              <FaRegUserCircle size={80} />
            </span>
            <span className="text-4xl font-semibold">Login Now </span>
          </div>
          <div className="my-10">
            <div className="  mt-5">
              <Inputfield
                name={"email"}
                value={data.email}
                label="Enter Your Email"
                type={"email"}
                onChange={handleChange}
              />
            </div>
            <div className="  mt-5">
              <label className=" font-normal">Enter Your Password</label>
              <PaswordInput
                name={"password"}
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div className="mt-5 text-end">
              <span className=" hover:text-red-400 cursor-pointer font-normal">
                Forget Password ?
              </span>
            </div>
            <div className="w-full my-10 text-center">
              <button className="bg-red-400 hover:bg-black transition-all transform duration-500 py-2 rounded-md w-1/2 font-medium text-white  text-lg">
                Login Now{" "}
              </button>
            </div>
            <div className="mt-3 flex  items-center gap-2 text-lg ">
              <span>Don't have an account ?</span>
              <Link href={'/signup'} className=" text-red-400 cursor-pointer font-normal">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
