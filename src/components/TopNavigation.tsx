"use client";

import { Contrast, Menu, Search} from "lucide-react";
import Link from "next/link";
import { FormEvent, useRef } from "react";

const TopNavigation = () => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    if(searchInputRef.current) {
        console.log(searchInputRef.current.value)
    }

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

            <div className="md:flex items-center justify-center hidden">
                <form onSubmit={handleSubmit} className="flex items-center h-10 mx-auto">
                    <input 
                    type="search" 
                    placeholder="Search" 
                    ref={searchInputRef} 
                    className="px-4 h-full md:w-48 dark:bg-gray-50 border-gray-300 rounded-l-md text-black focus:outline-none"
                    />
                    <div className="h-full px-5 grid place-content-center bg-background-LIGHT rounded-r-md text-black">
                        <Search/>
                    </div>
                </form>
            </div> 
        </div>
    </nav>
  );
};

export default TopNavigation;
