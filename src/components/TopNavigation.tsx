"use client";

import { Contrast, Menu} from "lucide-react";
import Link from "next/link";

const TopNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen z-20 dark:bg-black bg-white">
        <div className="flex justify-between items-center px-2 md:px-7 h-16">
            <div className="flex items-center">
                <span className="hover:bg-background-dark/30 md:block hidden hover:text-white cursor-pointer rounded-full p-2 mr-1">
                <Menu size={30}/>
                </span>

                <Link href="/" className="flex items-center space-x-2">
                <Contrast size={48} className="text-green"/>
                <span className="hidden md:block text-2xl font-bold">MyTube</span>
                </Link>

            </div>

        </div>
    </nav>
  );
};

export default TopNavigation;
