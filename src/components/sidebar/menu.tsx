"use client";

import { CircleUser, Home, PersonStanding, Users, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      text: "Overview",
      path: "/",
      icon: <Users />,
    },
    {
      text: "Members",
      path: "/",
      icon: <Users />,
    },
    {
      text: "Groups",
      path: "/",
      icon: <Users />,
    },
  ];
  return (
    <div className="w-full h-screen pt-4 pr-4 pl-6">
      <Link href="/dashboard">
        <div className="logo font-bolder text-3xl pl-8">
          <Image
            alt="gfcc-logo"
            src="/images/GFCC-logo.png"
            width={240}
            height={240}
          />
        </div>
      </Link>
      <p className="text-white mt-8 mb-4">MENU</p>
      <div className=" text-white text-lg">
        <Link href="/dashboard/teachers">
          <div
            className={`flex items-center mb-8 pl-4 py-3 rounded-xl text-white ${
              pathname == "/dashboard/teachers"
                ? "bg-[rgb(12,97,244)]"
                : "bg-[rgba(12,97,244,0.45)]"
            }`}>
            <div className="icon mr-2">
              <Home size={30} />
            </div>
            <p>Overview</p>
          </div>
        </Link>
        <Link href="/dashboard/students">
          <div
            className={`flex items-center mb-8 cursor-pointer pl-4 py-3 rounded-xl ${
              pathname == "/dashboard/students"
                ? "bg-[rgb(12,97,244)]"
                : "bg-[rgba(12,97,244,0.45)]"
            }`}>
            <div className="icon mr-2">
              <Users size={30} />
            </div>
            <p>Members</p>
          </div>
        </Link>
        <Link href="/dashboard/students">
          <div
            className={`flex items-center cursor-pointer pl-4 py-3 rounded-xl ${
              pathname == "/dashboard/students"
                ? "bg-[rgb(12,97,244)]"
                : "bg-[rgba(12,97,244,0.45)]"
            }`}>
            <div className="icon mr-2">
              <Users size={30} />
            </div>
            <p>Groups</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarMenu;
