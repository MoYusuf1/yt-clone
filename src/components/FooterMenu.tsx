import { GalleryVerticalEnd, Home, PlusCircle, Telescope } from "lucide-react"
import { Avatar } from "@/components/ui/Avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";

export const FooterMenu = () => {
  return (
    <footer className="bg-white dark:bg-black md:hidden text-[8px] h-14 fixed w-full flex items-center justify-around bottom-0 left-0 z-20">
      <div className="flex flex-col items-center">
        <Home/>
        <span>Home</span>
      </div>

      <div className="flex flex-col items-center">
        <Telescope/>
        <span>Shorts</span>
      </div> 

      <PlusCircle/>

      <div className="flex flex-col items-center">
        <GalleryVerticalEnd/>
        <span>Subscriptions</span>
      </div>

      <Link href={'/channels/'} className="flex flex-col items-center">
        <Avatar className="w-6 h-6"> 
            <AvatarFallback className="ml-3 mt-2">A</AvatarFallback>
        </Avatar>
            <span>You</span>
      </Link>
    </footer>
  )
}

export default FooterMenu;