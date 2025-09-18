import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Teacher",
        href: "/teacher",
      },
      {
        icon: "/student.png",
        label: "Student",
        href: "/student",
      },
      {
        icon: "/parent.png",
        label: "Parent",
        href: "/parent",
      },
      {
        icon: "/class.png",
        label: "Class",
        href: "/class",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="">
      {menuItems.map((item) => (
        <div className="flex flex-col gap-2" key={item.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
          {item.items?.map((item) => (
            <Link className="flex items-center justify-center lg:justify-start gap-4 text-sm font-medium py-2 text-gray-500" href={item.href} key={item.href}>
              <Image src={item.icon} width={20} height={20} alt="icon" />
              <span className="hidden lg:block ">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
