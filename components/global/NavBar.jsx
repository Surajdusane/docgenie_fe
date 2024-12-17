"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useUser, UserButton } from "@clerk/clerk-react";

const NavBar = () => {
  const { user } = useUser();

  return (
    <div>
      <div className="flex justify-between px-4 py-4 sm:px-32 sm:py-6">
        <Link href="/">
          <Image src="/black.svg" width={100} height={100} alt="logo" className="w-auto h-8" />
        </Link>
        {user ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button variant="custom">Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
