"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";

interface SidebarProps {
  // used to keep track of what was open and what was not open in the side bar!!
  storageKey?: string;
}

const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const { 
    organization: activeOrganization,
    isLoaded:isLoadedOrg
   } = useOrganization();


  const{
    userMemberships,
    isLoaded:isLoadedOrgList
  } = useOrganizationList({
    userMemberships:{
      infinite:true,
    }
  });

  const defaultAccordianValue:string[] = Object.keys(expanded).reduce((acc:string[] , key:string) => {
    if(expanded[key]){
      acc.push(key);
    }
    return acc;
  },[]);

  const onExpand = (id:string) => {
    
  }

  return (
  <div>Sidebar</div>

  );
};

export default Sidebar;
