"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { UserButton } from "@/components/auth/UserButton";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-secondary flex items-center p-4 rounded-xl w- [660px] shadow-sm">
      <div className="flex gap-x-6 justify-between items-center">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href={"/server"}>Server</Link>
        </Button>

        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href={"/client"}>Client</Link>
        </Button>

        <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href={"/admin"}>Admin</Link>
        </Button>

        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href={"/settings"}>Setting</Link>
        </Button>
        <UserButton />
      </div>
    </div>
  );
};
