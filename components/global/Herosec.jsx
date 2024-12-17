import Image from "next/image";
import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Button } from "../ui/button";
import Link from "next/link";

const Herosec = () => {
  return (
    <div className="">
      <div>
        <div>
          <h1 className="h1 mt-20 sm:mt-36 text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Build Docs in Minutes
          </h1>
          <p className="mx-auto mb-3 mt-4 max-w-xl text-pretty text-center dark:text-gray-400 text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <div className="flex justify-center items-center px-8 gap-4 mt-10"> 
            <Link href={"/sign-in"}>
            <Button variant="outline" className="px-6 py-6 font-medium text-lg">
              Sign In
            </Button>
            </Link>
            <Link href={"/sign-up"}>
            <Button variant="custom" className="px-6 py-6 font-medium text-lg">
              Get Sarted
            </Button>
            </Link>
          </div>
          <div className="mx-auto my-4 h-[1.7px] w-full max-w-xl bg-gradient-to-r from-transparent via-gray-800 to-transparent dark:via-white md:my-8 lg:mb-20" ></div>
          </div>
        <div>
          <div className="flex justify-center items-center px-8">
            <Image
              src={"https://ui.shadcn.com/og.jpg"}
              width={1000}
              height={1000}
              alt="heroimage"
              className="border-4 rounded-lg border-black"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Herosec;
