"use client";

import { Bell, Contrast, Menu, Search, Video } from "lucide-react";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { DialogTitle } from "@radix-ui/react-dialog";

const TopNavigation = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  function printSearch(){
      if(searchInputRef.current){
        console.log(searchInputRef.current.value);
      } 
  }


  return (
    <nav className="fixed top-0 left-0 w-screen z-20 dark:bg-black bg-white">
      <div className="flex justify-between items-center px-2 md:px-7 h-16">
        <div className="flex items-center">
          <span className="hover:bg-background-dark/30 hover:text-white cursor-pointer rounded-full p-2 mr-1">
            <Menu
              size={30}
              className="text-black dark:text-white md:flex hidden"
            />
          </span>
          <Link href="/" className="flex items-center space-x-2">
            <Contrast size={48} className="text-black dark:text-white" />
            <span className="hidden md:block text-2xl font-bold text-black dark:text-white">
              MYtube
            </span>
          </Link>
        </div>

        <div className="md:flex items-center justify-center hidden">
          <form
            onSubmit={(values) => {handleSubmit(values), printSearch()}}
            className="flex items-center h-10 mx-auto"
          >
            <input
              type="search"
              placeholder="Search"
              ref={searchInputRef}
              className="px-4 h-full md:w-48 dark:bg-gray-50 border-gray-300 rounded-l-md text-black focus:outline-none"
            />
            <div className="h-full px-5 grid place-content-center bg-background-LIGHT rounded-r-md text-black">
              <Search />
            </div>
          </form>
        </div>

        <div className="flex items-center space-x-7 dark:text-white text-black">
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          <Video />
          <Bell />
          <div className="md:hidden">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger>
                <Search onClick={() => setDialogOpen(true)} />
              </DialogTrigger>

              <DialogTitle title="Search Anything">
              <DialogContent>
                <form
                  onSubmit={(values) => {handleSubmit(values), printSearch()}}
                  className="flex items-center h-10 mx-auto"
                >
                  <input
                    onSubmit={printSearch}
                    type="search"
                    placeholder="Search"
                    ref={searchInputRef}
                    className="px-4 h-full md:w-48 dark:bg-gray-50 border-gray-300 rounded-l-md text-black focus:outline-none"
                  />
                  <div className="h-full px-5 grid place-content-center bg-background-LIGHT rounded-r-md text-black">
                    <Search />
                  </div>
                </form>
              </DialogContent>
              </DialogTitle>
            </Dialog>
          </div>

          <div className="py-5 hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Mohamed Yusuf"
                  />
                  <AvatarFallback>MY</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72">
                <DropdownMenuLabel>
                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Mohamed Yusuf"
                      />
                      <AvatarFallback>MY</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col space-y-3 text-base">
                      <span>
                        <p>Mohamed Yusuf</p>
                        <p>@mohamedyusuf</p>
                        <Link href={"/channels"} className="text-blue-500">
                          View your channel
                        </Link>
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="p-2 flex items-center"> </div>
                <span className="mr-2"> Appearance: </span> <ThemeToggle />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
