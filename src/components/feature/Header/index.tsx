"use client";

import { Oswald } from "next/font/google";
import Link from "next/link";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";
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

interface NavLinksProps {
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col md:flex-row md:space-x-4 mt-2 md:mt-0">
      {links.map((link: Links) => (
        <Link
          href={link.href}
          key={link.href}
          className={clsx(
            "hover:text-blue-600 px-4 py-3 md:px-1 md:py-0 font-[600] transition-all duration-100 ease-in-out block",
            {
              "border-l-4 md:border-l-0 md:border-b-4 border-blue-500 text-black-600 bg-gray-100 md:bg-transparent":
                pathname === link.href,
            },
          )}
          onClick={onClick}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);
  return (
    <header className="min-w-full pt-5 shadow-blue-300 shadow-[1px_1px_0_0,2px_2px_0_0,3px_3px_0_0,4px_4px_0_0,5px_5px_0_0] relative z-10 bg-white">
      <div className="flex mx-3 justify-between items-center">
        <div className="flex-grow">
          <p className={`${oswald.variable} ${styles.oswald}`}>
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
