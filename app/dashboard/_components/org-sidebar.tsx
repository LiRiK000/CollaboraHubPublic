"use client";

import { LayoutDashboard, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });
const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get("favorites");
  return (
    <div
      className="hidden lg:flex flex-col pt-5 space-y-6 
      mx-2"
    >
      <div className="flex w-full flex-col">
        <Link href="/">
          <div className="flex gap-x-2 mb-4 justify-center p-2 rounded-md hover:bg-slate-200 transition duration-200">
            <Image src="/logo.svg" alt="logo" width={60} height={60} />
            <span className={cn("font-semibold", "text-2xl", font.className)}>
              CollaboraHub
            </span>
          </div>
        </Link>
        <div className="w-auto">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                },
                organizationSwitcherTrigger: {
                  padding: "6px",
                  width: "100%",
                  borderRadius: "8px",
                  border: "1px solid #E5E7EB",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                },
              },
            }}
          />
          <div className="space-y-1 w-full mt-1">
            <Button
              variant={favorites ? "ghost" : "secondary"}
              asChild
              size="lg"
              className="font-normal justify-start px-2 w-full"
            >
              <Link href="/dashboard">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Team Boards
              </Link>
            </Button>
            <Button
              variant={favorites ? "secondary" : "ghost"}
              asChild
              size="lg"
              className="font-normal justify-start px-2 w-full"
            >
              <Link
                href={{
                  pathname: "/dashboard",
                  query: { favorites: true },
                }}
              >
                <Star className="h-4 w-4 mr-2" />
                Favorite Boards
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgSidebar;
