"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed w-full shadow-lg bg-black/40 backdrop-blur-md z-[90]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center hover:opacity-80 transition-all duration-500">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={60} height={60} />
            </Link>
            <Link href="/">
              <h1 className="text-2xl font-semibold ml-2 text-white">
                CollaboraHub
              </h1>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-baseline gap-x-10 mr-32">
              <Link
                href="https://ch-notes.vercel.app/"
                className="text-xl font-medium text-white hover:text-zinc-300 transition-all duration-500"
              >
                Notes
              </Link>
              <Link
                href="/dashboard"
                className="text-xl font-medium text-white hover:text-zinc-300 transition-all duration-500"
              >
                Boards
              </Link>
              <Link
                href="/kanban"
                className="text-xl font-medium text-white hover:text-zinc-300 transition-all duration-500"
              >
                Kanban
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center md:ml-6">
              {!user ? (
                <>
                  <Button>
                    <SignInButton />
                  </Button>
                  <Button>
                    <SignUpButton />
                  </Button>
                </>
              ) : (
                <div className="flex gap-x-4 items-center ">
                  <UserButton />
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={handleMenuClick}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-500"
            >
              {open ? (
                <FaTimes className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${open ? "block" : "hidden"} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex justify-end h-0">{user && <UserButton />}</div>
          <Link
            href="https://ch-notes.vercel.app/"
            className="block px-3 py-2 rounded-md text-2xl font-medium text-white hover:text-gray-900 hover:bg-gray-50 text-center"
          >
            Notes
          </Link>
          <Link
            href="/landing/features"
            className="block px-3 py-2 rounded-md text-2xl font-medium text-white hover:text-gray-900 hover:bg-gray-50 text-center"
          >
            Features
          </Link>
          <Link
            href="/landing/changelog"
            className="block px-3 py-2 rounded-md text-2xl font-medium text-white hover:text-gray-900 hover:bg-gray-50 text-center"
          >
            Changelog
          </Link>
          <div className="mt-4 flex flex-col items-center justify-center">
            {!user && (
              <>
                <Button>
                  <SignInButton />
                </Button>
                <Button>
                  <SignUpButton />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
