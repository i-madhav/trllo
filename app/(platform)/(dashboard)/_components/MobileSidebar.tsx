// each component even if it has use client it will be render as server-side render , atleast the first iteration of it
// so suppose while working with sheet like component we update it and in the client side it become true but on server side it is still false , and this is why hydration error occur 
"use client"

import { Button } from "@/components/ui/button";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import { Sheet , SheetContent } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

export const MobileSidebar = () =>{
    const pathName = usePathname();
    // mounted helps with hydration error
    const[isMounted , setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen)
    const onClose = useMobileSidebar((state) => state.onClose)
    const isOpen = useMobileSidebar((state) => state.isOpen)

    useEffect(() => {
        setIsMounted(true);
    },[]);

    useEffect(() => {
        onClose();
    },[pathName , onClose])

    if(!isMounted){
        return null;
    }
    return(
       <>
        <Button onClick={onOpen} className=" block md:hidden" variant={"ghost"} size={"sm"}>
            <Menu className="h-4 w-4"/>
        </Button>
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent side={"left"} className=" p-2 pt-10">
                <Sidebar storageKey="t-sidebar-mobile-state"/>
            </SheetContent>
        </Sheet>
       </>
    )
}