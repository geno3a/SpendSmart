"use client";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import { ThemeSwitchButton } from "./ThemeSwitcherButton";

function Navbar() {
  return (
    <>
      <DesktopNavbar />
    </>
  );
}

const items = [
  { label: "Dashboard", href: "/" },
  { label: "Transactions", href: "/transactions" },
  { label: "Manage", href: "/manage" },
];

function DesktopNavbar() {
  return (
    <div className="hidden border-separate border-b bg-background md:block ">
      <nav className="flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                label={item.label}
                link={item.href}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitchButton />
          <UserButton
            afterSwitchSessionUrl="/sign-in"
            afterSignOutUrl="/sign-in"
          />
        </div>
      </nav>
    </div>
  );
}

function NavbarItem({ link, label }: { link: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-foreground"
        )}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
      )}
    </div>
  );
}
export default Navbar;
