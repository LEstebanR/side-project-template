import React from "react";
import { Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { GoHeart } from "react-icons/go";
import { VscGithub } from "react-icons/vsc";

export function Footer() {
  return (
    <footer className="footer w-full">
      <Divider />
      <div className="z-10 flex flex-wrap  justify-center items-center gap-x-1 gap-y-3 sm:gap-x-2 ">
        <Link href="https://github.com/LEstebanR/lesteban" target="_blank">
          <VscGithub className="h-6 w-6 text-black dark:text-white" />
        </Link>
        <div className="mx-2 h-[30px] w-[0.5px] rotate-[20deg] transform bg-primary"></div>
        <div className="flex items-center gap-x-1 text-xs sm:text-base">
          <span className="text-black">Made with</span>
          <GoHeart className="h-4 w-4 text-red-500" />
          <span className="text-black">by</span>
          <Link
            className="font-medium text-primary underline decoration-dashed decoration-0 underline-offset-4"
            href="https://github.com/LEstebanR"
            target="_blank"
          >
            LEstebanR
          </Link>
        </div>
      </div>
    </footer>
  );
}