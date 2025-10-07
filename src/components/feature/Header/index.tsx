"use client";

import { Oswald } from "next/font/google";
import Link from "next/link";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/ui/logos";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: "500",
  subsets: ["latin"],
});

interface Links {
  href: string;
  title: string;
}

interface NavLinks {
  onClick?: () => void;
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const links: Links[] = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/experience",
      title: "Experience",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  const NavLinks: React.FC<NavLinks> = ({ onClick }) => (
    <nav className="space-x-4 flex flex-col md:flex-row">
      {links.map((link: Links, i: number) => (
        <Link
          href={link.href}
          key={i}
          className={clsx(
            "hover:text-blue-600 px-1 font-[600] transition-all duration-100 ease-in-out",
            {
              "border-b-4 border-blue-500 text-black-600":
                pathname === link.href,
            }
          )}
          onClick={onClick}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="min-w-full pt-5 shadow-blue-300 shadow-[1px_1px_0_0,2px_2px_0_0,3px_3px_0_0,4px_4px_0_0,5px_5px_0_0]">
      <div className="flex mx-3 justify-between items-center">
        <div className="flex-grow border-l-4 border-red-500">
          <p className={`${oswald.variable} ${styles.oswald} antialiased`}>
            Rhedge Michael Navarro
          </p>
        </div>
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <button
          className="md:hidden p-1 text-gray-700 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
        <div
          className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
        `}
        >
          <div className="flex justify-end p-4">
            <button
              className="p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>

        {/* 4. Backdrop (Dark overlay when the drawer is open) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
