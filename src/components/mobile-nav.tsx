"use client";

import Link from "next/link";
import { useState } from "react";
import { Logs } from "lucide-react";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { name: "home", path: "/" },
  { name: "serviços", path: "/services" },
  { name: "sobre", path: "/resume" },
  { name: "projetos", path: "/work" },
  { name: "contato", path: "/contact" },
];

export const MobileNav = () => {
  const pathname = usePathname();
  const [openSheet, setOpenSheet] = useState(false);

  const handleOpenSheet = () => {
    setOpenSheet(!openSheet);
  };

  return (
    <Sheet open={openSheet} onOpenChange={setOpenSheet}>
      <SheetTrigger
        onClick={handleOpenSheet}
        className="flex justify-center items-center"
      >
        <Logs className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Davi<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={handleOpenSheet}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
