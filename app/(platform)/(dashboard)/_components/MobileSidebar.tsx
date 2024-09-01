"use client"

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { usePathname } from "next/navigation"
import { useState } from "react";

export const MobileSidebar = () =>{
    const pathName = usePathname();
    const[isMounted , setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen)
    const onClose = useMobileSidebar((state) => state.onClose)
    const isOpen = useMobileSidebar((state) => state.isOpen)

    return(
        <div>
            Hello
        </div>
    )
}