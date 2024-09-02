"use client";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { NavItem, Organization } from "./NavItem";

interface SidebarProps {
  // used to keep track of what was open and what was not open in the side bar!!
  storageKey?:string
}

const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
  // this useSate is going to keep track of which sidebar , is expanded and which is not !
  /*so record means that we are going to accept a object in our useSate
    storageKey: This is a string that identifies the key under which the state will be stored in localStorage. By using a dynamic key (passed as a prop), the component can store different states for different instances or contexts. For example, if you have multiple sidebars in your application, each with its own storageKey, each sidebar can independently manage and persist its state.
  */
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const {
    // clerk function
    organization: activeOrganization,
    isLoaded: isLoadedOrg,
  } = useOrganization();

  const {
    // clerk hook
    userMemberships,
    isLoaded: isLoadedOrgList,
  } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordianValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <div className=" flex items-center justify-between mb-2">
        <Skeleton className=" h-10 w-[50%]"/>
        <Skeleton className="h-10 w-10"/>
        </div>
      </>
    );
  }
  return (
    <>
      <div className=" font-medium text-xs flex items-center mb-1">
        <span className=" pl-4">Workspaces</span>
        <Button
          asChild
          type="button"
          size={"icon"}
          variant={"ghost"}
          className=" ml-auto"
        >
          <Link href={"/select-org"}>
            <Plus className=" h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Accordion
        type="multiple"
        defaultValue={defaultAccordianValue}
        className="space-y-2"
      >
        {/* {the navItem component will render organization in nicer way !!a } */}
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded = {expanded[organization.id]}
            organization={organization as Organization}
            onExpand = {onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};

export default Sidebar;
