"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children, className = "" }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-300 ease-in-out
        ${isActive
          ? "bg-blue-50 text-blue-600 shadow-sm"
          : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
        }
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default Navlink;