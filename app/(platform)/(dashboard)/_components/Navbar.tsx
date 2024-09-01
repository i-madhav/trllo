import { Plus } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, SignOutButton, UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "./MobileSidebar";

const Navbar = () => {
  return (
    <nav className="fixed px-4 z-50 top-0 w-full h-14 bg-white border-b shadow-sm flex items-center">
      <MobileSidebar/>
      <div className="flex items-center gap-x-4">
        <div className=" hidden md:flex">
          <Logo />
        </div>

        <Button
          size={"sm"}
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          Create
        </Button>
        <Button size={"sm"} className="block md:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className=" ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl={"/organization/:id"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />

        <SignOutButton redirectUrl="/">
        {/* {used signout , when user sign-out using userButton it should redirect toward home page} */}
          <UserButton appearance={{
            elements:{
                avatarBox:{
                    height:30,
                    width:30
                }
            }
          }}/>
        </SignOutButton>
      </div>
    </nav>
  );
};

export default Navbar;
