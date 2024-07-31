import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/ScrollArea";
import Link from "next/link";
import { Contrast } from "lucide-react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar = (className: Props) => {
  return (
    <ScrollArea
      className={cn(
        "h-screen w-60 !fixed hidden md:block top-0 dark:bg-black dark:text-white -translate-x-full transition-transform duration-500",
        className
      )}
    >
        <div className="px-5 flex items-center">
            <Link href={"/"} className="flex items-center space-x-2">
                <Contrast size={48} className="text-red-700"/>
                <span className="text-2xl font-bold">
                    MyTube
                </span>
            </Link>
        </div>

    </ScrollArea>
  );
};

export default Sidebar;
