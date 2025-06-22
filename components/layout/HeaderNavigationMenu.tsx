"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { menuData } from "./data";

export function HeaderNavigationMenu() {
  const [openDropdown, setOpenDropdown] = React.useState<number | null>(null);

  return (
    <nav>
      <div className="hidden lg:flex items-center space-x-8">
        {menuData.map((menu, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setOpenDropdown(index)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {/* Main Menu Button */}
            <button
              className={`px-6 py-3 font-semibold transition-all duration-300 rounded-full ${
                openDropdown === index
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {menu.title}
              {menu.items.length > 0 && <ChevronDown size={16} className="ml-1 inline" />}
            </button>

            {/* Dropdown Menu */}
            {menu.items.length > 0 && openDropdown === index && (
              <div className="absolute left-0 w-64 z-[9999] pt-8">
                <div className="p-4 glass-card rounded-2xl">
                  {menu.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-gradient-to-r hover:from-blue-100 hover:to-green-100 rounded-xl transition-all duration-300 font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <Link
          href="/gallery"
          className="px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:bg-blue-50 rounded-full"
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:bg-blue-50 rounded-full"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
